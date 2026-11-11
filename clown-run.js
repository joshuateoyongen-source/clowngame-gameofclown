/* Clown Run: isolated single-player survival mode. Uses the existing fish and clownfishGuide globals. */
(() => {
  'use strict';
  const $ = id => document.getElementById(id);
  const ui = {
    home: $('home-screen'), screen: $('clown-run-screen'), button: $('clown-run-button'),
    day: $('cr-day'), hp: $('cr-hp'), fill: $('cr-health-fill'), distance: $('cr-distance'),
    reef: $('cr-reef'), world: $('cr-world'), markers: $('cr-markers'), notice: $('cr-notice'),
    inspect: $('cr-inspect'), inspectImage: $('cr-inspect-image'), flashlight: $('cr-flashlight'),
    guessPanel: $('cr-guess-panel'), guess: $('cr-guess'), feedback: $('cr-feedback'),
    overlay: $('cr-overlay'),
intro: $('cr-intro'),
curtain: $('cr-curtain'),
countdown: $('cr-countdown'),
result: $('cr-result'),
    death: $('cr-death'), jumpscare: $('cr-jumpscare'), music: $('cr-music'),
    next: $('cr-next'), guessButton: $('cr-guess-button'), submit: $('cr-submit'),
    inspectBack: $('cr-inspect-back'), exit: $('cr-exit'), deathExit: $('cr-death-exit'), restart: $('cr-restart')
  };

  if (!ui.screen || !ui.button || typeof fish === 'undefined' || typeof clownfishGuide === 'undefined') return;
  const MAX_HP = 6000;
  const REEF_PANORAMAS = [
    'reefpano1.jpg',
    'reefpano2.jpg',
    'reefpano3.jpg',
    'reefpano4.jpg'
];
  const STEP_THRESHOLDS = [29,26,23,20,17,14,11,9,7,5,3,2,1,0];
  const SFX_DIR = 'horrormusic/';
  // Introductory cinematic soundtrack
const introMusic = new Audio('horrormusic/dark.mp3');
introMusic.loop = true;
introMusic.preload = 'auto';
introMusic.volume = 0;

// Triggerfish silhouette in the reef
const triggerShadow = document.createElement('img');

triggerShadow.id = 'cr-trigger-shadow';
triggerShadow.src = 'horrormusic/triggerfish.png';

ui.world.appendChild(triggerShadow);

let lastShadowTime = 0;
let shadowHideTimer = null;


let introMusicFadeId = null;
  const sfx = {
    step: new Audio(SFX_DIR + 'step.mp3'),
    countdown: new Audio(SFX_DIR + 'horrorcountdown.mp3'),
    locked: new Audio(SFX_DIR + 'horrorguesslockedin.mp3'),
    loss: new Audio('duelsmusic/losehealth.mp3'),
    jump: new Audio(SFX_DIR + 'triggerjumpscare.mp3'),
    awful: new Audio(SFX_DIR + 'triggerjumpscare.mp3'),
    horrorguessed: new Audio('horrormusic/horrorguessednew.mp3')
  };
  // Prepare the accepted-guess sound
sfx.horrorguessed.preload = 'auto';
sfx.horrorguessed.volume = 0.3;
sfx.loss.volume = 0.4;
sfx.horrorguessed.load();
sfx.horrorguessed.addEventListener('canplaythrough', () => {
  console.log('Horror guessed sound ready!');
}, { once: true });

function playHorrorGuessed() {
  const sound = sfx.horrorguessed;

  sound.pause();
  sound.currentTime = 0;
  sound.volume = 0.3;

  if (sound.readyState >= 3) {
    sound.play().catch(console.warn);
  } else {
    sound.addEventListener('canplay', () => {
      sound.currentTime = 0;
      sound.play().catch(console.warn);
    }, { once: true });

    sound.load();
  }
}


function fadeIntroMusic(targetVolume, duration = 1500) {
    cancelAnimationFrame(introMusicFadeId);

    const startingVolume = introMusic.volume;
    const startTime = performance.now();

    if (targetVolume > 0) {
        introMusic.play().catch(error => {
            console.warn('Intro music could not play:', error);
        });
    }

    function animate(now) {
        const progress = Math.min(1, (now - startTime) / duration);

        introMusic.volume = Math.max(
            0,
            Math.min(1,
                startingVolume + (targetVolume - startingVolume) * progress
            )
        );

        if (progress < 1) {
            introMusicFadeId = requestAnimationFrame(animate);
        } else if (targetVolume === 0) {
            introMusic.pause();
            introMusic.currentTime = 0;
        }
    }

    introMusicFadeId = requestAnimationFrame(animate);
}

function stopIntroMusic() {
    cancelAnimationFrame(introMusicFadeId);

    introMusic.pause();
    introMusic.currentTime = 0;
    introMusic.volume = 0;
}
  const musicbox = new Audio('horrormusic/musicbox.mp3');
musicbox.loop = true;
musicbox.volume = 0;

let musicboxFadeId = null;

function fadeMusicbox(targetVolume, duration = 1500) {
    cancelAnimationFrame(musicboxFadeId);

    const startVolume = musicbox.volume;
    const startTime = performance.now();

    if (targetVolume > 0) {
        musicbox.play().catch(() => {});
    }

    function animate(now) {
        const progress = Math.min(1, (now - startTime) / duration);

        musicbox.volume =
            startVolume + (targetVolume - startVolume) * progress;

        if (progress < 1) {
            musicboxFadeId = requestAnimationFrame(animate);
        } else if (targetVolume === 0) {
            musicbox.pause();
            musicbox.currentTime = 0;
        }
    }

    musicboxFadeId = requestAnimationFrame(animate);
}
  Object.values(sfx).forEach(a => { a.preload = 'auto'; });
  const state = {
    running:false, active:false, day:1, hp:MAX_HP, elapsed:0, lastTick:0,
    catchTime:40, distance:30, stepIndex:0, species:'', clues:[], inspected:new Set(),
    guessLockUntil:0, speedBoostUntil:0, history:[], viewX:.5, viewY:.5, raf:0, timer:0, dark:false
  };
  const rand = (min,max) => min + Math.random() * (max-min);
  const pick = list => list[Math.floor(Math.random()*list.length)];
  const play = (audio, restart=true) => {
    if (!audio) return;
    try { if (restart) audio.currentTime=0; const p=audio.play(); if(p && p.catch) p.catch(()=>{}); } catch (_) {}
  };
  function stopAudio() {
    ui.screen.style.setProperty('--cr-danger', '0');
    ui.music.pause(); ui.music.currentTime=0;
    stopEndOfDayMusic();
    Object.values(sfx).forEach(a => { a.pause(); a.currentTime=0; });
  }
  function showOnly(screen) {
    document.querySelectorAll('body > section.game-container').forEach(el => { el.hidden = el !== screen; });
  }
  function setOverlay(which) {
    ui.intro.hidden = which !== 'intro';
    ui.overlay.hidden = !which;
    ui.countdown.hidden = which !== 'countdown';
    ui.result.hidden = which !== 'result';
    ui.death.hidden = which !== 'death';
  }
  const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

let introGeneration = 0;

async function playSurvivealIntro(generation) {
  stopIntroMusic();
fadeIntroMusic(1.0, 1800);
  introMusic.currentTime = 0;
introMusic.volume = 0;
fadeIntroMusic(1.5, 1800);
    setOverlay('intro');

    const messages = [
        ['Search the Reef for Clowns', false],
        ['Survive for as many days as possible', false],
        ["Don't let it catch you", true]
    ];

    for (const [message, danger] of messages) {
        if (!state.running || generation !== introGeneration) {
            return false;
        }

        ui.intro.textContent = message;
        ui.intro.classList.toggle('cr-intro-danger', danger);

        ui.intro.classList.remove('cr-intro-visible');
        void ui.intro.offsetWidth;
        ui.intro.classList.add('cr-intro-visible');

        await wait(2900);

        if (!state.running || generation !== introGeneration) {
            return false;
        }

        ui.intro.classList.remove('cr-intro-visible');
        await wait(850);
    }

    if (!state.running || generation !== introGeneration) {
        return false;
    }

    fadeIntroMusic(0, 1500);

fadeIntroMusic(0, 1200);

setOverlay(null);
return true;
}
async function fadeToBlack() {
    ui.curtain.classList.add('cr-black');
    await wait(850);
}

async function fadeFromBlack() {
    ui.curtain.classList.remove('cr-black');
    await wait(850);
}
  function setHp(hp) {
    ui.hp.textContent = `${Math.max(0,Math.ceil(hp)).toLocaleString()} / ${MAX_HP.toLocaleString()} HP`;
    ui.fill.style.width = `${Math.max(0,hp)/MAX_HP*100}%`;
  }
  function allSpecies() {
    const groups = new Map();
    fish.forEach(entry => {
      if (!entry || !entry.species || !entry.image || !clownfishGuide[entry.species]) return;
      if (!groups.has(entry.species)) groups.set(entry.species, []);
      groups.get(entry.species).push(entry.image);
    });
    return [...groups].filter(([,imgs]) => imgs.length).map(([name,imgs])=>({name,imgs}));
  }
  const available = allSpecies();
  available.sort((a,b)=>a.name.localeCompare(b.name));
  available.forEach(({name}) => {
    const option=document.createElement('option'); option.value=name; option.textContent=name; ui.guess.appendChild(option);
  });
  function similarEnough(guess, answer) {
    if (guess === answer) return true;
    const a = clownfishGuide[answer]?.similarSpecies;
    const b = clownfishGuide[guess]?.similarSpecies;
    const matches = (field, name) => {
      if (Array.isArray(field)) return field.some(x => String(x).trim().toLowerCase()===name.toLowerCase());
      if (typeof field !== 'string') return false;
      return field.split(/[,;/\n]|\band\b/i).some(x => x.replace(/[^a-z0-9 -]/gi,'').trim().toLowerCase()===name.toLowerCase());
    };
    return matches(a,guess) || matches(b,answer);
  }
  function countdown() {
    return new Promise(resolve => {
        setOverlay('countdown');
        play(sfx.countdown);

        let i = 3;

        // Displays a number or DIVE! with a heavy impact animation
        function showCountdown(text) {
            ui.countdown.textContent = text;

            // Red letters for DIVE!
            ui.countdown.classList.toggle(
                'cr-countdown-dive',
                text === 'DIVE!'
            );

            // Restart animation for each number
            ui.countdown.classList.remove('cr-countdown-impact');
            void ui.countdown.offsetWidth;
            ui.countdown.classList.add('cr-countdown-impact');
        }

        // Show 3 immediately
        showCountdown('3');

        const id = setInterval(() => {
            if (!state.running) {
                clearInterval(id);
                resolve(false);
                return;
            }

            i--;

            if (i >= 0) {
                showCountdown(i > 0 ? String(i) : 'DIVE!');
            }

            if (i < 0) {
                clearInterval(id);
                ui.countdown.classList.remove(
                    'cr-countdown-impact',
                    'cr-countdown-dive'
                );
                setOverlay(null);
                resolve(true);
            }
        }, 900);
    });
}
function configureMusic() {
    ui.music.pause();
    // Seventh-day soundtrack takes precedence on days divisible by both 5 and 7.
    ui.music.src = SFX_DIR + (state.day % 7 === 0 ? 'darkerer.mp3' : state.dark ? 'evendarker.mp3' : 'dark.mp3');
    ui.music.loop = true;
    ui.music.volume = 0;
    ui.music.currentTime = 0;
}
  function createClues(imgs) {
    ui.markers.replaceChildren(); state.clues=[]; state.inspected.clear();
    const count=5+Math.floor(Math.random()*3);
    for (let i=0;i<count;i++) {
      const x=rand(.08,.92), y=Math.random()<.88?rand(.53,.92):rand(.12,.46);
      const clue={x,y,img:pick(imgs),cropX:rand(10,90),cropY:rand(10,90),index:i};
      state.clues.push(clue);
      const button=document.createElement('button');
      button.type='button'; button.className='cr-clue'; button.style.left=`${x*100}%`; button.style.top=`${y*100}%`;
      button.style.backgroundImage=`url(${JSON.stringify(clue.img)})`;
      button.style.backgroundPosition=`${clue.cropX}% ${clue.cropY}%`;
      button.setAttribute('aria-label',`Inspect clue ${i+1}`);
      button.addEventListener('click',()=>inspectClue(clue));
      clue.element=button; ui.markers.appendChild(button);
    }
    updatePan();
  }
  function updatePan() {
    // The world is 2x the viewport, so the cursor can scan a panorama in both axes.
    ui.world.style.transform=`translate(${-state.viewX*50}%, ${-state.viewY*50}%)`;
    for (const clue of state.clues) {
      const close = Math.abs(clue.x-state.viewX)<.19 && Math.abs(clue.y-state.viewY)<.21;
      clue.element.classList.toggle('cr-clue-visible',close);
      clue.element.tabIndex=close?0:-1;
      clue.element.setAttribute('aria-hidden',String(!close));
    }
  }
  function inspectClue(clue) {
    if (!state.active) return;
    state.inspected.add(clue.index);
    ui.inspect.hidden=false;
    ui.inspectImage.style.backgroundImage=`url(${JSON.stringify(clue.img)})`;
    ui.inspectImage.style.backgroundPosition=`${clue.cropX}% ${clue.cropY}%`;
    ui.flashlight.style.setProperty('--fx','50%'); ui.flashlight.style.setProperty('--fy','50%');
  }

  function updateTriggerShadow(now) {
  if (state.distance >= 7) {
    triggerShadow.classList.remove('cr-shadow-visible');
    return;
  }

  // Check every 1.5 seconds
  if (now - lastShadowTime < 1500) return;

  lastShadowTime = now;

  // 35% chance of appearing
  if (Math.random() > 0.65) return;

  // Random position inside the panorama
  triggerShadow.style.left = `${20 + Math.random() * 60}%`;
  triggerShadow.style.top = `${25 + Math.random() * 45}%`;

  // Random size
  triggerShadow.style.width = `${110 + Math.random() * 100}px`;

  triggerShadow.classList.add('cr-shadow-visible');

  clearTimeout(shadowHideTimer);

  shadowHideTimer = setTimeout(() => {
    triggerShadow.classList.remove('cr-shadow-visible');
  }, 7300);
}
  function tick(now) {
    if (!state.active) return;
    if (!state.lastTick) state.lastTick=now;
    const deltaSeconds = Math.min((now-state.lastTick)/1000, 0.1);
    state.elapsed += deltaSeconds * (now < state.speedBoostUntil ? 2 : 1);
    state.lastTick=now;
    const progress=Math.min(1,state.elapsed/state.catchTime);
    state.distance=Math.max(0,30*(1-Math.pow(progress,1.7)));
    ui.distance.textContent=`${Math.ceil(state.distance)} m away`;
    updateTriggerShadow(now);
    // A slow, ominous dark-red vignette builds from 11m to 1m.
    const danger = Math.max(0, Math.min(1, (11 - state.distance) / 10));
    ui.screen.style.setProperty('--cr-danger', danger.toFixed(3));
    while (state.stepIndex<STEP_THRESHOLDS.length && state.distance<=STEP_THRESHOLDS[state.stepIndex]) {
      play(sfx.step); state.stepIndex++;
    }
const desiredVolume = Math.min(
    1,
    (state.day % 7 !== 0 && !state.dark ? .38 : .30) +
    (state.day % 7 !== 0 && !state.dark ? .62 : .70) * Math.pow(progress, 1.45)
);

const fadeIn = Math.min(1, state.elapsed / 1.5);

ui.music.volume = desiredVolume * fadeIn;
    if (progress>=1) { endRun('caught'); return; }
    state.raf=requestAnimationFrame(tick);
  }
  async function startDay() {
    document.getElementById('cr-world')
  .classList.remove('cr-first-day-fade');
    ui.curtain.classList.remove('cr-black');
    if (!state.running || !available.length) return;
    fadeEndOfDayMusic(0, 900);
    state.active=false; cancelAnimationFrame(state.raf);
    // Hide the reef before the countdown
ui.world.classList.remove('cr-reef-visible');
    state.dark=state.day%5===0;
    ui.screen.style.setProperty('--cr-danger', '0');
    ui.screen.classList.toggle(
    'cr-monochrome',
    state.day % 7 === 0
);
    const reefImage = pick(REEF_PANORAMAS);
ui.world.style.backgroundImage =
    `linear-gradient(180deg, rgba(2,14,25,.38), rgba(0,0,0,.58)), url("${reefImage}")`;
    state.catchTime=Math.max(15,40-(state.day-1)*3);
    state.elapsed=0; state.lastTick=0; state.distance=30; state.stepIndex=0;
    state.viewX=.5; state.viewY=.5; state.guessLockUntil=0; state.speedBoostUntil=0;
    ui.day.textContent=`DAY ${state.day}`; ui.distance.textContent='30 m away';
    ui.screen.classList.toggle('cr-extra-dark',state.dark);
    ui.notice.hidden=false;
    ui.inspect.hidden=true; ui.guessPanel.hidden=false; ui.feedback.hidden=true;
    ui.submit.disabled=false;
    const selected=pick(available); state.species=selected.name;
    createClues(selected.imgs);
    ui.guess.value=available[0].name;
    configureMusic();
if (!await countdown()) return;
if (state.day === 1) {
  const world = document.getElementById('cr-world');

  world.classList.remove('cr-first-day-fade');
  void world.offsetWidth;
  world.classList.add('cr-first-day-fade');
}
if (!state.running) return;

// Fade the reef into view after DIVE!
requestAnimationFrame(() => {
    ui.world.classList.add('cr-reef-visible');
});

state.active = true;

ui.music.currentTime = 0;
ui.music.volume = 0;
play(ui.music, false);

state.raf = requestAnimationFrame(tick);
  }
  function correctDamage(seconds) {
    if (seconds<3) return 1;
    return Math.round(1+99*Math.min(1,(seconds-3)/27));
  }
  function similarDamage(seconds, inspected) {
    const base=100+1400*Math.min(1,Math.max(0,(seconds-3)/27));
    const multiplier=1+Math.min(6,Math.max(0,inspected-1))*.35;
    return Math.round(base*multiplier);
  }
  async function revealDay(guess) {
    if (!state.active) return;

    state.active = false;
    cancelAnimationFrame(state.raf);

    ui.inspect.hidden = true;
    ui.guessPanel.hidden = true;

    // The accepted-guess sound already plays in submitGuess().
    // Don't play the locked sound over it.
    const damage=guess===state.species?correctDamage(state.elapsed):similarDamage(state.elapsed,state.inspected.size);
    const before=state.hp;
    state.hp=Math.max(0,state.hp-damage);
    const actualHealthLost = before - state.hp;
const wasCorrect = guess === state.species;
    state.history.push({day:state.day,answer:state.species,guess,correct: wasCorrect,healthLost: actualHealthLost,clues:[...state.clues]});
    ui.music.pause();
    ui.music.currentTime = 0;
    ui.music.volume = 0;
    ui.screen.style.setProperty('--cr-danger', '0');
    stopEndOfDayMusic();
    // Begin playback, then fade only once the browser has started the track.
    // Do not block the results-screen transition on audio loading.
    const endOfDayAttempt = endOfDayMusic.play();
    if (endOfDayAttempt && typeof endOfDayAttempt.then === 'function') {
        endOfDayAttempt.then(() => {
            if (state.running && !state.active && !endOfDayMusic.paused) {
                fadeEndOfDayMusic(0.5, 1500);
            }
        }).catch(error => console.warn('End-of-day audio failed:', error));
    } else {
        fadeEndOfDayMusic(0.5, 1500);
    }
    $('cr-result-answer').textContent=`It was ${state.species}.`;
    $('cr-result-guess').textContent=`Your guess: ${guess}`;
    $('cr-damage').textContent=`−${damage.toLocaleString()} HP`;
    ui.next.hidden = state.hp <= 0;
    ui.next.disabled = state.hp <= 0;
    ui.next.textContent = 'Continue to Next Day';
    await fadeToBlack();

if (!state.running) return;

setOverlay('result');
setHp(before);

await fadeFromBlack();

if (!state.running) return;
    const resultFill=$('cr-result-health-fill');
    resultFill.style.transition='none'; resultFill.style.width=`${before/MAX_HP*100}%`;
    void resultFill.offsetWidth; resultFill.style.transition='width 1.3s ease';
    setTimeout(()=>{
      if (!state.running) return;
      if (damage > 0) {
    
    play(sfx.loss);
}
      requestAnimationFrame(()=>{setHp(state.hp);resultFill.style.width=`${state.hp/MAX_HP*100}%`;});
      if (state.hp<=0) setTimeout(()=>{if(state.running)endRun('health');},1800);
    },1300);
  }
  function feedback(message) {
    ui.feedback.textContent=message; ui.feedback.hidden=false;
    ui.feedback.classList.remove('cr-feedback-flash'); void ui.feedback.offsetWidth;
    ui.feedback.classList.add('cr-feedback-flash');
    setTimeout(()=>{ui.feedback.hidden=true;},1700);
  }
  function submitGuess() {
    if (!state.active || Date.now()<state.guessLockUntil) return;

    const guess=ui.guess.value;

    if (!similarEnough(guess,state.species)) {
        state.guessLockUntil=Date.now()+4000;
        ui.submit.disabled=true;
        play(sfx.awful);
        state.speedBoostUntil = performance.now() + 3000;
        feedback('AWFUL GUESS');
        setTimeout(()=>{ui.submit.disabled=false;},4000);
        return;
    }

    // Play the accepted-guess sound from the beginning
playHorrorGuessed();

revealDay(guess);
}
const endOfDayMusic = new Audio('horrormusic/evendarker.mp3');
endOfDayMusic.preload = 'auto';
endOfDayMusic.load();
endOfDayMusic.loop = true;
endOfDayMusic.volume = 0;

let endOfDayFade = null;

function stopEndOfDayMusic() {
    cancelAnimationFrame(endOfDayFade);
    endOfDayFade = null;
    endOfDayMusic.pause();
    endOfDayMusic.currentTime = 0;
    endOfDayMusic.volume = 0;
}

function fadeEndOfDayMusic(targetVolume, duration = 1200) {
    cancelAnimationFrame(endOfDayFade);

    const startingVolume = endOfDayMusic.volume;
    const started = performance.now();

    function update(now) {
        const progress = Math.min(1, (now - started) / duration);

        endOfDayMusic.volume =
            startingVolume + (targetVolume - startingVolume) * progress;

        if (progress < 1) {
            endOfDayFade = requestAnimationFrame(update);
        } else if (targetVolume === 0) {
            endOfDayMusic.pause();
            endOfDayMusic.currentTime = 0;
        }
    }

    endOfDayFade = requestAnimationFrame(update);
}

  function deathGallery(record) {
    const gallery=$('cr-death-gallery'); gallery.replaceChildren();
    if (!record) return;
    $('cr-death-species').textContent=`It was ${record.answer}.`;
    const seenImages = new Set();

record.clues.forEach(clue => {
  if (seenImages.has(clue.img)) return;

  seenImages.add(clue.img);

  const img = document.createElement('img');
  img.src = clue.img;
  img.alt = `Clue for ${record.answer}`;
  img.loading = 'lazy';
  gallery.appendChild(img);
});
  }
  let deathTransitionTimer = null;
  let deathRevealTimer = null;
  function cancelDeathTransition() {
    clearTimeout(deathTransitionTimer);
    clearTimeout(deathRevealTimer);
    ui.jumpscare.hidden = true;
    ui.jumpscare.classList.remove('cr-blackout');
  }
  function endRun(reason) {
    triggerShadow.classList.remove('cr-shadow-visible');
clearTimeout(shadowHideTimer);
    if (!state.running) return;
    state.active=false; cancelAnimationFrame(state.raf);
    cancelDeathTransition();
    if (reason==='caught') {
      state.history.push({day:state.day,answer:state.species,guess:'No guess',clues:[...state.clues]});
      setOverlay(null);
      ui.jumpscare.hidden=false;
      play(sfx.jump);
    }
    state.running=false;
    stopEndOfDayMusic();
    ui.music.pause();
    $('cr-death-heading').textContent=reason==='caught'?'YOU WERE CAUGHT':'YOU DIED';
    $('cr-days-survived').textContent=String(state.history.filter(x=>x.guess!=='No guess').length-(reason==='health'?1:0));
    
    
    
    
    const history=$('cr-history'); history.replaceChildren();
    state.history.forEach(entry=>{
          const resultIndicator = entry.guess == null
    ? ''
    : entry.correct
        ? '<span class="cr-summary-correct">✔</span>'
        : '<span class="cr-summary-wrong">✖</span>';

    const li = document.createElement('li');

li.textContent = `Day ${entry.day}: ${entry.answer}`;

// Only show a result if the player made a guess
if (entry.guess != null) {

    li.textContent += ` — Your guess: ${entry.guess} `;

    // Green tick or red cross
    const indicator = document.createElement('span');

    const correct = entry.correct ??
        (entry.guess === entry.answer);

    indicator.textContent = correct ? ' ✔ ' : ' ✖ ';
    indicator.className = correct
        ? 'cr-summary-correct'
        : 'cr-summary-wrong';

    li.appendChild(indicator);

    // Health lost that day
    const damage = document.createElement('span');
    damage.className = 'cr-summary-damage';
    damage.textContent = ` −${entry.healthLost ?? 0} HP`;

    li.appendChild(damage);

} else {
    li.textContent += ' — Caught before guessing';
}

history.appendChild(li);
    });
    deathGallery(state.history.at(-1));
    if (reason === 'caught') {
      // Show the jumpscare first, then a completely black screen for three seconds.
      deathTransitionTimer = setTimeout(() => {
        ui.jumpscare.classList.add('cr-blackout');
        deathRevealTimer = setTimeout(() => {
  setOverlay('death');
  ui.death.classList.remove('cr-death-fade');
  void ui.death.offsetWidth;
  ui.death.classList.add('cr-death-fade');

  ui.jumpscare.hidden = true;
  ui.jumpscare.classList.remove('cr-blackout');
          musicbox.currentTime = 0;
musicbox.volume = 0;
fadeMusicbox(0.28, 2000);
        }, 3000);
      }, 850);
    } else {
    fadeToBlack().then(async () => {
        setOverlay('death');
        await fadeFromBlack();
    });
}
  }
  
  function startRun() {
    document.body.classList.add('christmas-surviveal');
    fadeMusicbox(0, 1200);
    cancelAnimationFrame(introMusicFadeId);
introMusic.pause();
introMusic.currentTime = 0;
introMusic.volume = 0;
    cancelDeathTransition();
    if (!available.length) { alert('No matching clownfish species were found in the game database.'); return; }
    window.clownSurvivealAudioOnly = true;
    window.clownRunNormalMusic?.fadeOut();
    stopAudio(); state.running=true; state.active=false; state.day=1; state.hp=MAX_HP; state.history=[];
    setHp(state.hp); showOnly(ui.screen); document.body.classList.add('clown-run-active');
    const generation = ++introGeneration;

playSurvivealIntro(generation).then(completed => {
    if (completed && state.running) {
        startDay();
    }
});
  }
  function exitRun() {
    document.body.classList.remove('christmas-surviveal');
    stopIntroMusic();
    cancelAnimationFrame(introMusicFadeId);
introMusic.pause();
introMusic.currentTime = 0;
introMusic.volume = 0;
    ++introGeneration;
    fadeMusicbox(0, 800);
    cancelDeathTransition();
    state.running=false; state.active=false; cancelAnimationFrame(state.raf);
    stopAudio(); ui.inspect.hidden=true; setOverlay(null);
    document.body.classList.remove('clown-run-active'); showOnly(ui.home);
    window.clownSurvivealAudioOnly = false;
    window.clownRunNormalMusic?.restore();
  }
  ui.button.addEventListener('click',startRun);
  ui.exit.addEventListener('click',exitRun); ui.deathExit.addEventListener('click',exitRun);
  ui.restart.addEventListener('click',startRun);
  ui.next.addEventListener('click',()=>{if (!state.running || state.hp <= 0) return; state.day++;startDay();});
  ui.submit.addEventListener('click',submitGuess);
  // Space and right-click lock in the species currently selected in the always-visible dropdown.
  document.addEventListener('keydown', event => {
    if (!state.running || !state.active || event.code !== 'Space' || event.repeat) return;
    const target = event.target;
    if (target instanceof HTMLElement && (target.isContentEditable || ['INPUT', 'TEXTAREA'].includes(target.tagName))) return;
    event.preventDefault();
    submitGuess();
  });
  document.addEventListener('contextmenu', event => {
    if (!state.running || !state.active || !ui.screen.contains(event.target)) return;
    // Keep native controls usable; right-clicking the reef or other game area submits.
    if (event.target instanceof HTMLElement && event.target.closest('select, input, textarea')) return;
    event.preventDefault();
    submitGuess();
  });
  ui.inspectBack.addEventListener('click',()=>{ui.inspect.hidden=true;});
  ui.reef.addEventListener('pointermove',event=>{
    if (!state.active || !ui.inspect.hidden) return;
    const r=ui.reef.getBoundingClientRect();
    state.viewX=Math.max(0,Math.min(1,(event.clientX-r.left)/r.width));
    state.viewY=Math.max(0,Math.min(1,(event.clientY-r.top)/r.height));
    updatePan();
  });
  ui.inspect.addEventListener('pointermove',event=>{
    const r=ui.inspectImage.getBoundingClientRect();
    ui.flashlight.style.setProperty('--fx',`${(event.clientX-r.left)/r.width*100}%`);
    ui.flashlight.style.setProperty('--fy',`${(event.clientY-r.top)/r.height*100}%`);
  });
  // Touch users can drag to pan; desktop users can move their pointer.
  ui.reef.addEventListener('touchmove',event=>{
    if (!state.active || !ui.inspect.hidden || !event.touches[0]) return;
    const r=ui.reef.getBoundingClientRect(), t=event.touches[0];
    state.viewX=Math.max(0,Math.min(1,(t.clientX-r.left)/r.width));
    state.viewY=Math.max(0,Math.min(1,(t.clientY-r.top)/r.height));
    updatePan();
  },{passive:true});
})();
