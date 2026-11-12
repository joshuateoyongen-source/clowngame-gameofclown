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
  const BASE_MAX_HP = 4000;
  let MAX_HP = BASE_MAX_HP;
  const REEF_PANORAMAS = [
    'reefpano1.jpg',
    'reefpano2.jpg',
    'reefpano3.jpg',
    'reefpano4.jpg'
];
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
    step1: new Audio(SFX_DIR + 'step1.mp3'),
    step2: new Audio(SFX_DIR + 'step2.mp3'),
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
  const deathReason = document.createElement('p');

deathReason.id = 'cr-death-reason';
deathReason.textContent = 'Lack of HP';
deathReason.hidden = true;

$('cr-death-heading').insertAdjacentElement('afterend', deathReason);
  const state = {
    running:false, active:false, day:1, hp:MAX_HP, elapsed:0, lastTick:0,
    catchTime:40, distance:30, stepIndex:0, species:'', clues:[], inspected:new Set(),
    guessLockUntil:0, speedBoostUntil:0, history:[], viewX:.5, viewY:.5, raf:0, timer:0, dark:false, coins:1, inventory:[], owned:new Set(), nextMerchantDay:2, pendingDistance:0, distanceBonus:0, mungNextDay:false, inventoryPaused:false, shopOpen:false, shopItems:[], hints:new Map(), extraSlots:0, extraSlotsBought:0, pepperUses:0, kazooUsed:false, csGlovesDistance:15, fishBaitActive:false, maxHpPenalty:0, decoyCheckedDay:false, decoyDistractedUntil:0, decoySlowForDay:false, vestUsedToday:false, spearClicks:0, spearLastClick:0, lanternX:50, lanternY:50
  };
  // Merchant items. Images are optional: put item artwork in horrormusic/items/<id>.png.
  const ITEMS = [
    {id:'gloves',name:'Gloves',cost:3,desc:'While in your inventory, start every day with the triggerfish 10 m farther away.'},
    {id:'basket',name:'Basket of Gloves',cost:7,desc:'While in your inventory, start every day with the triggerfish 25 m farther away.'},
    {id:'helmet',name:'Diving Helmet',cost:6,desc:'Faint yellow glows reveal hidden clown images.'},
    {id:'treasure',name:'Buried Treasure Map',cost:3,desc:'30% chance to earn a coin when inspecting a new clue.'},
    {id:'cookie',name:'Astral Cookie',cost:2,desc:'Immediately gain 0–5 Clown Coins.',immediate:true},
    {id:'anemone',name:'Anemone Protection',cost:5,desc:'Once, bounce a catching triggerfish back to 20 m.'},
    {id:'goggles',name:'Diving Goggles',cost:5,desc:'Brighter reefs; no monochrome effect on seventh days.'},
    {id:'book',name:'Clown Book - Book of Clown',cost:4,desc:'Mark the correct species and nine decoys in the dropdown.'},
    {id:'bandaid',name:'Bandaid',cost:2,desc:'Immediately heal 300 HP.',immediate:true},
    {id:'plaster',name:'Plaster',cost:1,desc:'Immediately heal 150 HP.',immediate:true},
    {id:'vitamins',name:'Vitamins',cost:3,desc:'Heal 50 HP at the start of each day.'},
    {id:'clyde',name:'Hidden Clyde',cost:3,desc:'Mark seven incorrect species with a red cross.'},
    {id:'saddle',name:'Clown Saddle',cost:2,desc:'Highlight Ephippium, Polymnus or Sebae when correct.'},
    {id:'pill',name:'Clown Pill',cost:15,desc:'Immediately restore full health.',immediate:true},
    {id:'kash',name:'Kash',cost:3,desc:'Immediately gain 0–4 coins and heal 10–200 HP.',immediate:true},
    {id:'batteries',name:'Batteries',cost:3,desc:'Double the flashlight viewing diameter.'},
    {id:'degree',name:'Cape Town University Degree',cost:3,desc:'Highlight the correct African clown species.'},
    {id:'beanie',name:'Black Beanie',cost:2,desc:'While in your inventory, start every day with +4m distance; highlight Barberi if correct.'},
    {id:'family',name:'Family Tree',cost:12,desc:'Show the correct or a similar species in a bottom-left hint (20% chance of a random species).'},
    {id:'beans',name:'Mung Beans',cost:1,desc:'For the next day only, start with 20 m extra distance.',immediate:true},
    {id:'bait',name:'Fish Bait',cost:3,desc:'Double the hidden clown images; the triggerfish moves 10% faster.'},
    {id:'pepper',name:'Pepper Spray',cost:12,desc:'When caught, finish the day safely and lose 800 HP. Each subsequent use doubles the damage.'},
    {id:'coupon',name:'Coupon',cost:2,desc:'All merchant items cost one fewer coin while this is held.'},
    {id:'food',name:'Fishy Food',cost:3,desc:'Immediately heal 800 HP or lose 400 HP (50/50).',immediate:true},
    {id:'slot',name:'Extra Slot',cost:15,desc:'Permanently increase inventory capacity by one (maximum two purchases).',immediate:true},
    {id:'beets',name:"Bear's Beets",cost:3,desc:'Permanently increase maximum HP by 600.',immediate:true},
    {id:'armour',name:'Jockey Armour',cost:6,desc:'Reduce all damage taken by 20%.'},
    {id:'converter',name:'Clown Converter',cost:5,desc:'Negate the next damage and heal by that amount; then consume this item.'},
    {id:'csgloves',name:'CS Gloves',cost:4,desc:'Push the triggerfish back by 15m; each day spend one coin to increase this bonus by 1 m.'},
    {id:'cursed',name:'Cursed Gloves',cost:9,desc:'Start 30 m farther away, but lose 2,000 maximum HP while held.'},
    {id:'strawberry',name:'Strawberry',cost:14,desc:'Immediately heal 50% of maximum HP.',immediate:true},
    {id:'vest',name:'Triggerproof Vest',cost:5,desc:'Once per day when caught, push the triggerfish back to 35 m. Reduce HP to 100, or to 50 if already below 100; no damage below 50 HP.'},
    {id:'kazoo',name:'Kazoo',cost:5,desc:'On an Awful Guess, push the triggerfish back 20 m once per day.'},
    {id:'razor',name:'Razor',cost:1,desc:'Gain 3 coins if you guess with the triggerfish within 3m.'},
    {id:'shield',name:'Face Shield',cost:2,desc:'Remove Awful Guess jumpscare and guessing lockout.'},
    {id:'farmrelax',name:'Fish Farm Relax',cost:2,desc:'Earn 1 extra {{coin}} each day.'},
    {id:'farm3',name:'Fish Farm 3',cost:5,desc:'Earn 2 extra {{coin}} each day.'},
    {id:'decoy',name:'A fake decoy',cost:4,desc:'At 7 m, distract the triggerfish with a decoy, possibly pushing it back 5–8 m and slow it. When the distraction ends, it plays its jumpscare sound and resumes at a slower pace. Consumed after a successful distraction.'},
    {id:'puppet',name:'Finger Puppet',cost:1,desc:'While held, start each day with the triggerfish 5 m farther away.'},
    {id:'algae',name:'Algae a la mode',cost:2,desc:'Heal 200 HP.',immediate:true},
    {id:'pellets',name:'Fish Pellets',cost:2,desc:'Heal 200 HP.',immediate:true},
    {id:'reefheal',name:'Reef Heal',cost:6,desc:'Remove the seventh-day monochrome effect while equipped.'},
    {id:'lantern',name:'Lantern',cost:4,desc:'On every fifth day, your cursor illuminates a region of the reef without affecting inspected images.'},
    {id:'seasalt',name:'Seasalt',cost:2,desc:'Immediately heal 150 HP.',immediate:true},
    {id:'pricetag',name:'Price Tag',cost:2,desc:'Discarding an item refunds its original price minus one coin. Discard this for one coin.'},
    {id:'spear',name:'Sailfish Spear',cost:3,desc:'Click on the triggerfish silhouette to jab at it and push it back slightly.'},
    {id:'ring',name:"Hypnotist's Ring",cost:7,desc:'Prevent acceleration during the day, including Awful Guess acceleration. Starting speed and equipment speed effects still apply.'},
    {id:'barrel',name:"Davy Jone's barrel of barrels",cost:4,desc:'Gain a random item and add it to your inventory.',immediate:true},
    {id:'detector',name:'Metal Detector',cost:1,desc:'50% chance to earn one clown coin at the end of each day.'},
    {id:'mints',name:'Fresh Mints',cost:1,desc:'50% chance to heal 65 HP at the end of each day.'},
    {id:'ketchup',name:'Ketchup',cost:3,desc:'Highlight the correct tomato Clown.'},
    {id:'hat',name:'Clown Hat',cost:4,desc:'Clown Hats attract Clowns and make them easier to see.'},
    {id:'orb',name:"Clark E.'s Orb of Remembrance",cost:2,desc:'Chrysopterus and Maohiensis...'}
  ];
  const hasItem = id => state.inventory.includes(id);
  const inventoryCapacity=()=>5+state.extraSlots;
  const itemPrice=item=>Math.max(0,item.cost-(hasItem('coupon')&&item.cost>=3?1:0));
  const randomInt = (a,b) => Math.floor(Math.random()*(b-a+1))+a;
  let shopPurchaseAnimating = false;
  const coinHud = document.createElement('div'); coinHud.className='cr-coin-hud';
  const invButton = document.createElement('button'); invButton.type='button'; invButton.className='cr-inventory-button'; invButton.textContent='Your Inventory';
  const merchant = document.createElement('div'); merchant.className='cr-merchant-modal'; merchant.hidden=true;
  const inventoryModal = document.createElement('div'); inventoryModal.className='cr-merchant-modal cr-inventory-modal'; inventoryModal.hidden=true;
  const familyHint = document.createElement('div'); familyHint.className='cr-family-hint'; familyHint.hidden=true;
  let familyHintReady = false;
  let familyHintTimer = null;
  function updateFamilyHintVisibility() {
    familyHint.hidden = !(hasItem('family') && familyHintReady && state.running && state.active && !state.shopOpen && ui.overlay.hidden && !ui.curtain.classList.contains('cr-black'));
  }
  function hideFamilyHint() {
    familyHintReady = false;
    clearTimeout(familyHintTimer);
    familyHintTimer = null;
    familyHint.hidden = true;
  }
  ui.screen.append(coinHud,invButton,merchant,inventoryModal,familyHint);
  const merchantStyles=document.createElement('style'); merchantStyles.textContent=`


.cr-shop-card.cr-sold-out {
    background: #000 !important;
    border-color: #333 !important;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 260px;
}

.cr-sold-out-text {
    color: #ff2525;
    font-size: clamp(22px, 3vw, 34px);
    font-weight: 900;
    text-transform: uppercase;
    text-shadow: 0 0 12px rgba(255, 0, 0, 0.5);
    transform: rotate(-5deg);
    animation: cr-sold-out-appear 0.6s ease-out both;
}

@keyframes cr-sold-out-appear {
    from {
        opacity: 0;
        transform: rotate(-5deg) scale(0.6);
    }

    to {
        opacity: 1;
        transform: rotate(-5deg) scale(1);
    }
}


  
  /* Special death screen for running out of HP */
#clown-run-screen.cr-health-death #cr-death {
    background: #000;
    text-align: center;
}

#clown-run-screen.cr-health-death #cr-death-heading {
    color: #ff2020;
    font-size: clamp(48px, 9vw, 90px);
    font-weight: 900;
    text-shadow: 0 0 18px rgba(255, 0, 0, 0.35);
    animation: cr-health-death-appear 1.8s ease-out both;
}

#clown-run-screen.cr-health-death #cr-death-reason {
    color: #d0d0d0;
    font-size: 20px;
    margin: 10px 0 30px;
    animation: cr-health-death-appear 1.8s ease-out 0.5s both;
}

#clown-run-screen.cr-health-death #cr-death > p,
#clown-run-screen.cr-health-death #cr-history,
#clown-run-screen.cr-health-death #cr-restart,
#clown-run-screen.cr-health-death #cr-death-exit {
    animation: cr-health-death-appear 1.5s ease-out 1s both;
}

#clown-run-screen.cr-health-death #cr-death-species,
#clown-run-screen.cr-health-death #cr-death-gallery {
    display: none !important;
}

@keyframes cr-health-death-appear {
    from {
        opacity: 0;
        transform: translateY(15px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}
    /* Day and triggerfish details occupy separate lines on the right. */
    #clown-run-screen .cr-hud{position:relative;min-height:76px;padding-top:43px;box-sizing:border-box;align-items:center;}
    #clown-run-screen #cr-day{position:absolute;right:8px;top:3px;white-space:nowrap;}
    #clown-run-screen .cr-enemy{position:absolute;right:8px;top:35px;white-space:nowrap;z-index:12;pointer-events:none;}
    #clown-run-screen .cr-health{position:absolute;top:6px;left:50%;transform:translateX(-50%);width:34%;max-width:380px;min-width:140px;margin:0;text-align:center;z-index:12;}
    @media(max-width:650px){#clown-run-screen .cr-hud{min-height:115px;padding-top:72px;}#clown-run-screen .cr-health{top:65px;width:55%;max-width:220px;}#clown-run-screen .cr-enemy strong{font-size:18px;}}
    .cr-coin-hud{position:absolute;top:12px;left:145px;z-index:75;color:#ffe08c;font-weight:800;background:#1c1026df;padding:8px 12px;border:1px solid #b38b48;border-radius:12px;display:flex;gap:7px;align-items:center}
    .cr-coin-hud img{width:24px;height:24px;object-fit:contain}
    .cr-coin-hud,.cr-inventory-button{transition:opacity .25s ease}
    /* Keep the wallet and inventory button above the merchant, without covering inventory details. */
    #clown-run-screen.cr-shop-hud .cr-coin-hud,
    #clown-run-screen.cr-shop-hud .cr-inventory-button{z-index:225}
    .cr-merchant-modal.cr-inventory-modal{z-index:250}
    .cr-merchant-modal.cr-shop-enter{animation:cr-merchant-enter .32s cubic-bezier(.2,.85,.25,1) both}
    .cr-merchant-modal.cr-shop-exit{animation:cr-merchant-exit .28s ease-in both;pointer-events:none}
    @keyframes cr-merchant-enter{from{transform:translateX(105%);opacity:.65}to{transform:translateX(0);opacity:1}}
    @keyframes cr-merchant-exit{from{transform:translateX(0);opacity:1}to{transform:translateX(-105%);opacity:.65}}

    .cr-hud-hidden{opacity:0!important;visibility:hidden!important;pointer-events:none!important}
    .cr-coin-particle{position:fixed!important;width:25px!important;height:25px!important;object-fit:contain;pointer-events:none;z-index:1000;animation:cr-coin-gain .75s ease-out forwards}
    .cr-coin-particle.cr-coin-loss{animation:cr-coin-loss .75s ease-in forwards}
    @keyframes cr-coin-gain{0%{transform:translate(var(--coin-x),48px) scale(.8);opacity:0}20%{opacity:1}100%{transform:translate(0,0) scale(.5);opacity:0}}
    @keyframes cr-coin-loss{0%{transform:translate(0,0) scale(.7);opacity:1}100%{transform:translate(var(--coin-x),52px) scale(.85);opacity:0}}
    .cr-inventory-button{position:absolute;top:12px;left:12px;z-index:76;background:#24182f;color:#fff2d4;border:1px solid #b38b48;border-radius:10px;padding:9px;cursor:pointer;font-weight:bold}
    .cr-merchant-modal[hidden],.cr-family-hint[hidden]{display:none!important}
    .cr-merchant-modal{position:absolute;inset:0;z-index:200;background:rgba(4,5,12,.96);color:#f4e6c9;display:flex;align-items:center;justify-content:center;overflow:auto;padding:20px;box-sizing:border-box}
    .cr-shop-panel{width:min(850px,100%);max-height:95%;overflow:auto;text-align:center}
    .cr-shop-panel h2{color:#f9cf74;font-size:clamp(24px,4vw,38px);margin:0 0 14px}
    .cr-shop-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px;margin:16px 0}
    .cr-shop-card{display:flex;flex-direction:column;align-items:center;min-height:260px;padding:12px 8px;border:2px solid #8b6d42;border-radius:13px;background:#221a24;gap:10px}
    .cr-shop-card strong{min-height:36px}.cr-shop-art{height:94px;width:90%;object-fit:contain;background:#17131b;border:1px dashed #685a48;border-radius:9px}
    .cr-shop-description{flex:1;font-size:13px;line-height:1.4}.cr-shop-cost{font-weight:800;color:#ffe08c}
    .cr-shop-panel button{cursor:pointer;padding:9px 14px;border-radius:8px;background:#d2a45d;color:#160d17;border:0;font-weight:800}
    .cr-shop-panel button:disabled{opacity:.45;cursor:not-allowed}.cr-shop-panel .cr-shop-close{background:#e8dfcd;margin-top:10px}
    /* A bought card fades away while its artwork flies into Your Inventory. */
    .cr-shop-card.cr-purchased{animation:cr-purchased-card-fade .7s ease-out both;pointer-events:none}
    @keyframes cr-purchased-card-fade{from{opacity:1;filter:blur(0)}to{opacity:0;filter:blur(2px)}}
    .cr-item-flying{position:fixed!important;z-index:10010!important;pointer-events:none!important;object-fit:contain!important;background:transparent!important;border:0!important;filter:drop-shadow(0 3px 9px #f3d48a88)}
    .cr-inline-coin{width:18px;height:18px;object-fit:contain;display:inline-block;vertical-align:-4px;margin:0 2px}
    .cr-heal-float{position:fixed;z-index:10020;pointer-events:none;color:#ff4d55;font-size:16px;font-weight:900;text-shadow:0 1px 4px #100;white-space:nowrap;animation:cr-heal-float-up 1.05s ease-out both}
    @keyframes cr-heal-float-up{0%{transform:translate(-50%,0) scale(.9);opacity:0}15%{opacity:1}70%{opacity:1}100%{transform:translate(-50%,-32px) scale(.75);opacity:0}}
    #clown-run-screen .cr-inventory-button{pointer-events:auto;touch-action:manipulation}
    .cr-inventory-grid{grid-template-columns:repeat(auto-fit,minmax(min(100%,205px),1fr))}
    .cr-inventory-card{min-height:290px;gap:8px}
    .cr-inventory-card .cr-shop-art{width:min(100%,180px);height:105px}
    .cr-inventory-card .cr-shop-description{flex:1}
    .cr-inventory-card button{width:100%;margin-top:auto}
    .cr-inventory-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(130px,1fr));gap:10px}
    .cr-inventory-grid button{min-height:55px}.cr-family-hint{position:absolute;bottom:18px;left:12px;z-index:78;background:#211b2bdf;color:#ffe4a2;padding:10px;border:1px solid #9a7e4d;border-radius:10px;max-width:250px}
    .cr-clue.cr-clue-glow{box-shadow:0 0 12px 8px #f8df5b66,0 0 28px 15px #f8df5b33!important}
    /* Cursor glow only over the reef during dark fifth days. */
    .cr-lantern-light{position:absolute;inset:0;z-index:6;pointer-events:none;opacity:0;transition:opacity .15s;background:radial-gradient(circle 150px at var(--cr-lantern-x,50%) var(--cr-lantern-y,50%),rgba(255,236,163,.28) 0%,rgba(255,221,126,.12) 40%,transparent 100%);mix-blend-mode:screen}
    #clown-run-screen.cr-lantern-on .cr-lantern-light{opacity:1}
    #clown-run-screen.cr-lantern-on:has(#cr-inspect:not([hidden])) .cr-lantern-light{opacity:0}
    #clown-run-screen:has(.cr-inventory-modal:not([hidden])) .cr-lantern-light{opacity:0}
    #clown-run-screen .cr-clue.cr-clown-hat{background-size:cover!important}
    /* Native option borders are browser-dependent; the selected option is also outlined. */
    #clown-run-screen option.cr-exact-hint{background:#554414!important;color:#ffe35c!important;font-weight:900!important;box-shadow:inset 0 0 10px 3px #ffe348!important;border:2px solid #ffe348!important}
    #clown-run-screen select.cr-exact-selected{outline:3px solid #ffdf3c;box-shadow:0 0 14px 4px #ffdf3c99}
    #cr-trigger-shadow.cr-spear-target{pointer-events:auto!important;cursor:crosshair;user-select:none;touch-action:manipulation}
    .cr-reef-brighter #cr-world{filter:brightness(1.18)!important}
    .cr-battery-light #cr-flashlight{background:radial-gradient(circle 210px at var(--fx,50%) var(--fy,50%),transparent 0,rgba(0,0,0,.05) 130px,rgba(0,0,0,.94) 290px)!important}
    @media(max-width:560px){.cr-shop-grid{gap:5px}.cr-shop-card{padding:8px 4px;min-height:270px}.cr-shop-art{height:65px}.cr-shop-description{font-size:11px}.cr-shop-panel button{padding:7px}}
  `;document.head.appendChild(merchantStyles);
  function updateCoins(){coinHud.replaceChildren();const icon=document.createElement('img');icon.src='horrormusic/coin.png';icon.alt='';icon.onerror=()=>icon.remove();coinHud.append(icon,document.createTextNode(String(state.coins)));}
  function setGameHudVisible(visible){coinHud.classList.toggle('cr-hud-hidden',!visible);invButton.classList.toggle('cr-hud-hidden',!visible);}
  setGameHudVisible(false);
  function animateCoinChange(amount){
    if(!amount || coinHud.classList.contains('cr-hud-hidden'))return;
    const rect=coinHud.getBoundingClientRect();
    const count=Math.min(2,Math.abs(amount));
    for(let i=0;i<count;i++){
      const particle=document.createElement('img');particle.src='horrormusic/coin.png';
      particle.className='cr-coin-particle'+(amount<0?' cr-coin-loss':'');
      particle.style.left=(rect.left+rect.width/2-12)+'px';
      particle.style.top=(rect.top+rect.height/2-12)+'px';
      particle.style.setProperty('--coin-x', (i===0?-14:14)+'px');
      document.body.appendChild(particle);
      particle.addEventListener('animationend',()=>particle.remove(),{once:true});
      setTimeout(()=>particle.remove(),1100);
    }
  }
  function changeCoins(amount){const before=state.coins;state.coins=Math.max(0,state.coins+amount);updateCoins();animateCoinChange(state.coins-before);}
  const coinSpendSound=new Audio('horrormusic/coinspend.mp3');coinSpendSound.preload='auto';
  function playCoinSpend(){coinSpendSound.pause();coinSpendSound.currentTime=0;coinSpendSound.play().catch(()=>{});}
  function applyDamage(amount){
    let damage=Math.max(0,Math.round(amount));
    if(hasItem('armour'))damage=Math.round(damage*.8);
    if(hasItem('converter') && damage>0){
      state.inventory=state.inventory.filter(x=>x!=='converter');
      heal(damage);refreshItemEffects();
      return 0;
    }
    state.hp=Math.max(0,state.hp-damage);
    setHp(state.hp);
    return damage;
  }
  function animateHealing(amount){
    if(amount<=0||!state.running)return;
    const track=ui.fill.parentElement;
    if(!track)return;
    const rect=track.getBoundingClientRect();
    if(!rect.width||!rect.height)return;
    const number=document.createElement('span');
    number.className='cr-heal-float';number.textContent=String(amount);
    number.style.left=(rect.left+rect.width/2)+'px';
    number.style.top=(rect.bottom+8)+'px';
    document.body.appendChild(number);
    number.addEventListener('animationend',()=>number.remove(),{once:true});
    setTimeout(()=>number.remove(),1500);
  }
  function heal(amount){
    const before=state.hp;
    state.hp=Math.min(MAX_HP,state.hp+Math.max(0,Math.round(amount)));
    setHp(state.hp);
    animateHealing(state.hp-before);
  }
  // Equipment pushes the triggerfish away each day for as long as it stays in inventory.
  // These bonuses stack, and discarding equipment removes the bonus immediately.
  function ownedDistanceBonus(){
    return (hasItem('gloves')?10:0) + (hasItem('basket')?25:0) + (hasItem('beanie')?4:0) + (hasItem('puppet')?5:0) + (hasItem('csgloves')?state.csGlovesDistance:0) + (hasItem('cursed')?30:0);
  }
  function syncOwnedDistanceBonus(){
    const newBonus=ownedDistanceBonus();
    const difference=newBonus-(state.heldDistanceBonus||0);
    state.heldDistanceBonus=newBonus;
    if(state.active && difference){
      state.distanceBonus+=difference;
      state.distance=Math.max(0,state.distance+difference);
      ui.distance.textContent=`${Math.ceil(state.distance)} m away`;
    }
  }
  function itemArtwork(item){const img=document.createElement('img');img.className='cr-shop-art';img.src=`horrormusic/items/${item.id}.png`;img.alt=`${item.name} artwork`;img.onerror=()=>{img.removeAttribute('src');img.alt='Item image coming soon';};return img;}
  function itemDescription(item){
    const description=document.createElement('div');description.className='cr-shop-description';
    const chunks=item.desc.split('{{coin}}');
    chunks.forEach((chunk,index)=>{
      if(index){const icon=document.createElement('img');icon.src='horrormusic/coin.png';icon.className='cr-inline-coin';icon.alt='coin';description.append(icon);}
      description.append(document.createTextNode(chunk));
    });
    return description;
  }
  async function animatePurchasedItem(card,art){
    // The real card fades; a separate copy of the image stays opaque and flies away.
    const from=art.getBoundingClientRect();
    const target=invButton.getBoundingClientRect();
    const flying=art.cloneNode(true);
    flying.className='cr-item-flying';
    flying.style.left=from.left+'px';flying.style.top=from.top+'px';
    flying.style.width=from.width+'px';flying.style.height=from.height+'px';
    document.body.appendChild(flying);
    art.style.visibility='hidden';
    card.classList.add('cr-purchased');
    const dx=target.left+target.width/2-(from.left+from.width/2);
    const dy=target.top+target.height/2-(from.top+from.height/2);
    const controlX=dx*.58;
    const controlY=Math.min(dy,0)-100;
    const frames=[];
    for(let i=0;i<=10;i++){
      const t=i/10, one=1-t;
      const x=2*one*t*controlX+t*t*dx;
      const y=2*one*t*controlY+t*t*dy;
      frames.push({offset:t,transform:`translate(${x}px,${y}px) scale(${1-.65*t})`,opacity:t<.7?1:Math.max(0,1-(t-.7)/.3)});
    }
    try{
      if(typeof flying.animate==='function'){
        const animation=flying.animate(frames,{duration:850,easing:'cubic-bezier(.2,.65,.15,1)',fill:'forwards'});
        await animation.finished.catch(()=>{});
      } else await new Promise(resolve=>setTimeout(resolve,850));
    } finally {flying.remove();}
  }
  // The lantern glow is a separate layer, so inspected images stay unchanged.
  const lanternLight=document.createElement('div');
  lanternLight.className='cr-lantern-light';
  ui.screen.appendChild(lanternLight);
  ui.screen.addEventListener('pointermove',event=>{
    if(!state.active||!state.dark||!hasItem('lantern')||!ui.inspect.hidden)return;
    const rect=ui.screen.getBoundingClientRect();
    lanternLight.style.setProperty('--cr-lantern-x',`${(event.clientX-rect.left)/rect.width*100}%`);
    lanternLight.style.setProperty('--cr-lantern-y',`${(event.clientY-rect.top)/rect.height*100}%`);
  });
  function updateLantern(){
    ui.screen.classList.toggle('cr-lantern-on',state.active&&state.dark&&hasItem('lantern')&&ui.inspect.hidden&&inventoryModal.hidden);
  }
  // Silhouette clicks are counted only while it is genuinely visible.
  triggerShadow.addEventListener('pointerdown',event=>{
    if(!state.active||!hasItem('spear')||!triggerShadow.classList.contains('cr-shadow-visible')||!ui.inspect.hidden||!inventoryModal.hidden)return;
    event.stopPropagation();event.preventDefault();
    const now=performance.now();
    if(now-state.spearLastClick>1800)state.spearClicks=0;
    state.spearLastClick=now;
    if(++state.spearClicks>=2){
      state.spearClicks=0;
      state.distanceBonus+=3;state.distance+=3;
      ui.distance.textContent=`${Math.ceil(state.distance)} m away`;
      // No further attacks on a silhouette once it is out of range.
      if(state.distance>=7)triggerShadow.classList.remove('cr-shadow-visible');
    }
  });
  function applyItem(item){
    switch(item.id){
      // Gloves, Basket of Gloves and Black Beanie work while held,
      // including at the start of every subsequent day.
      case 'bandaid':heal(300);break;
      case 'plaster':heal(150);break;
      case 'seasalt':heal(150);break;
      case 'algae':heal(200);break;
      case 'pellets':heal(200);break;
      case 'pill':heal(MAX_HP);break;
      case 'food':if(Math.random()<0.5)heal(800);else applyDamage(400);break;
      case 'slot':state.extraSlots=Math.min(2,state.extraSlots+1);state.extraSlotsBought++;break;
      case 'beets':MAX_HP+=600;setHp(state.hp);break;
      case 'strawberry':heal(Math.round(MAX_HP*.5));break;
      case 'cookie':changeCoins(randomInt(0,5));break;
      case 'kash':changeCoins(randomInt(0,4));heal(randomInt(10,200));break;
      case 'beans':state.mungNextDay=true;break;
      case 'barrel':{
        const pool=ITEMS.filter(x=>!x.immediate&&!state.owned.has(x.id));
        if(pool.length&&state.inventory.length<inventoryCapacity()){
          const reward=pick(pool);state.inventory.push(reward.id);state.owned.add(reward.id);
        }
        break;
      }
    }
    refreshItemEffects();
  }
  function refreshItemEffects(){
    // Cursed Gloves' maximum-HP penalty lasts only while equipped.
    const penalty=hasItem('cursed')?2000:0;
    if(state.maxHpPenalty!==penalty){
      MAX_HP+=state.maxHpPenalty-penalty;
      state.maxHpPenalty=penalty;
      state.hp=Math.min(state.hp,MAX_HP);
      setHp(state.hp);
    }
    syncOwnedDistanceBonus();
    ui.screen.classList.toggle('cr-reef-brighter',hasItem('goggles'));
    ui.screen.classList.toggle('cr-battery-light',hasItem('batteries'));
    ui.screen.classList.toggle('cr-monochrome',state.day%7===0&&!hasItem('goggles')&&!hasItem('reefheal'));
    for(const clue of state.clues) if(clue.element)clue.element.classList.toggle('cr-clue-glow',hasItem('helmet'));
    triggerShadow.classList.toggle('cr-spear-target',hasItem('spear'));
    updateLantern();
    refreshSpeciesHints();
  }
  function refreshSpeciesHints(){
    const correct=state.species;
    if(!correct)return;
    const hints=new Map();
    const exactHints=new Set();
    const mark=(name,symbol)=>{if(name&&name!==undefined)hints.set(name,symbol);};
    if(hasItem('book')){
      mark(correct,'★');
      const others=available.map(x=>x.name).filter(x=>x!==correct).sort(()=>Math.random()-.5).slice(0,9);
      others.forEach(name=>mark(name,'★'));
    }
    if(hasItem('clyde')){
      const others=available.map(x=>x.name).filter(x=>x!==correct&&!hints.has(x)).sort(()=>Math.random()-.5).slice(0,7);
      others.forEach(name=>mark(name,'✖'));
    }
    const lower=correct.toLowerCase();
    const exact=(condition)=>{if(condition){mark(correct,'★');exactHints.add(correct);}};
    exact(hasItem('saddle')&&['ephippium','polymnus','sebae'].some(x=>lower.includes(x)));
    exact(hasItem('degree')&&['allardi','fuscocaudatus','chrysogaster','latifaciatus'].some(x=>lower.includes(x)));
    exact(hasItem('beanie')&&lower.includes('barberi'));
    exact(hasItem('ketchup')&&['barberi','frenatus','melanopus','ephippium','rubrocinctus'].some(x=>lower.includes(x)));
    exact(hasItem('orb')&&['chrysopterus','maohiensis'].some(x=>lower.includes(x)));
    for(const option of ui.guess.options){
      const symbol=hints.get(option.value);
      option.textContent=(symbol?symbol+' ':'')+option.value;
      option.style.color=symbol==='✖'?'#e64b4b':symbol?'#c79700':'';
      option.style.fontWeight=symbol?'bold':'';
      option.classList.toggle('cr-exact-hint',exactHints.has(option.value));
    }
    ui.guess.classList.toggle('cr-exact-selected',exactHints.has(ui.guess.value));
    if(hasItem('family')){
      const raw=clownfishGuide[correct]?.similarSpecies;
      const candidates=(Array.isArray(raw)?raw:typeof raw==='string'?raw.split(/[,;/\n]|\band\b/i):[])
        .map(x=>String(x).trim()).filter(Boolean);
      const allNames=available.map(x=>x.name).filter(Boolean);
      const hintName=Math.random()<0.20 ? pick(allNames) : pick([correct,...candidates]);
      familyHint.textContent='Family Tree: '+hintName;
    }
    updateFamilyHintVisibility();
  }
  function renderInventory(){
    inventoryModal.replaceChildren();
    const panel=document.createElement('div');panel.className='cr-shop-panel';
    const heading=document.createElement('h2');heading.textContent=`Your Inventory (${state.inventory.length}/${inventoryCapacity()})`;panel.append(heading);
    const grid=document.createElement('div');grid.className='cr-inventory-grid';
    for(const id of state.inventory){
      const item=ITEMS.find(x=>x.id===id);
      if(!item)continue;
      const card=document.createElement('div');card.className='cr-shop-card cr-inventory-card';
      const name=document.createElement('strong');name.textContent=item.name;
      const discard=document.createElement('button');discard.type='button';discard.textContent='Discard Item';
      discard.onclick=()=>{
        const refund=hasItem('pricetag')?Math.max(0,item.cost-1):0;
        state.inventory=state.inventory.filter(x=>x!==id);
        if(refund)changeCoins(refund);
        refreshItemEffects();
        if(state.shopOpen && !shopPurchaseAnimating)renderShop();
        renderInventory();
      };
      card.append(name,itemArtwork(item),itemDescription(item),discard);
      grid.append(card);
    }
    if(!state.inventory.length){const p=document.createElement('p');p.textContent='Your inventory is empty.';grid.append(p);}
    panel.append(grid);
    const close=document.createElement('button');close.className='cr-shop-close';close.textContent='Close Inventory';
    close.onclick=()=>{
      inventoryModal.hidden=true;
      if(state.inventoryPaused && state.running && state.active){
        state.inventoryPaused=false;state.lastTick=0;state.raf=requestAnimationFrame(tick);
      } else state.inventoryPaused=false;
    };
    panel.append(close);inventoryModal.append(panel);
  }
  invButton.addEventListener('click',()=>{
    // Visibility is the rule: result screen, merchant and active day are all allowed.
    if(!state.running||invButton.classList.contains('cr-hud-hidden')||inventoryModal.hidden===false)return;
    if(state.active && !state.inventoryPaused){state.inventoryPaused=true;cancelAnimationFrame(state.raf);}
    renderInventory();inventoryModal.hidden=false;
  });
  function renderShop(){
    merchant.replaceChildren();const panel=document.createElement('div');panel.className='cr-shop-panel';
    const heading=document.createElement('h2');heading.textContent='THE MERCHANT';
    const wallet=document.createElement('p');wallet.textContent=`You have ${state.coins} Clown Coins · Inventory ${state.inventory.length}/${inventoryCapacity()}`;
    const grid=document.createElement('div');grid.className='cr-shop-grid';
    for (const item of state.shopItems) {
    const card = document.createElement('div');
    card.className = 'cr-shop-card';

    if (item.sold) {
        card.classList.add('cr-sold-out');

        const soldText = document.createElement('strong');
        soldText.className = 'cr-sold-out-text';
        soldText.textContent = 'Sold Out!';

        card.append(soldText);
        grid.append(card);
        continue;
    }
      const name=document.createElement('strong');name.textContent=item.name;
      const desc=itemDescription(item);
      const cost=document.createElement('div');cost.className='cr-shop-cost';cost.textContent=`🪙 ${itemPrice(item)} Clown Coins`;
      const buy=document.createElement('button');buy.textContent='Buy';
      buy.disabled=state.coins<itemPrice(item)||((!item.immediate||item.id==='barrel')&&state.inventory.length>=inventoryCapacity())||(item.id==='slot'&&state.extraSlotsBought>=2);
      const art=itemArtwork(item);
      buy.onclick=async()=>{
        if(shopPurchaseAnimating||!state.shopOpen||state.coins<itemPrice(item)||((!item.immediate||item.id==='barrel')&&state.inventory.length>=inventoryCapacity())||(item.id==='slot'&&state.extraSlotsBought>=2))return;
        shopPurchaseAnimating=true;
        buy.disabled=true;
        const price=itemPrice(item);
        changeCoins(-price);
        playCoinSpend();
        if(!item.immediate){state.inventory.push(item.id);state.owned.add(item.id);}
        applyItem(item);
        item.sold = true;
        try{await animatePurchasedItem(card,art);}
        finally{shopPurchaseAnimating=false;if(state.shopOpen)renderShop();}
      };
      card.append(name,art,desc,cost,buy);grid.append(card);
    }
    const leave=document.createElement('button');leave.className='cr-shop-close';leave.textContent='Leave Merchant / Next Day';leave.onclick=()=>{
      if(shopPurchaseAnimating||merchant.classList.contains('cr-shop-exit'))return;
      leave.disabled=true;
      merchant.classList.remove('cr-shop-enter');
      merchant.classList.add('cr-shop-exit');
      setTimeout(()=>{
        merchant.hidden=true;
        merchant.classList.remove('cr-shop-exit');
        ui.screen.classList.remove('cr-shop-hud');
        state.shopOpen=false;
        state.day++;
        startDay();
      },290);
    };
    panel.append(heading,wallet,grid,leave);merchant.append(panel);
  }
  function openShop(){
    hideFamilyHint();
    state.shopOpen=true;shopPurchaseAnimating=false;inventoryModal.hidden=true;
    setGameHudVisible(true);
    ui.screen.classList.add('cr-shop-hud');
    playCoinSpend();
    fadeEndOfDayMusic(0.035,900);
    const eligible=ITEMS.filter(x=>!state.owned.has(x.id) && (x.id!=='slot'||state.extraSlotsBought<2) && (x.id!=='barrel'||ITEMS.some(y=>!y.immediate&&!state.owned.has(y.id))));
    for(let i=eligible.length-1;i>0;i--){const j=randomInt(0,i);[eligible[i],eligible[j]]=[eligible[j],eligible[i]];}
    state.shopItems=eligible.slice(0,3);renderShop();
    merchant.classList.remove('cr-shop-enter','cr-shop-exit');
    merchant.hidden=false;
    void merchant.offsetWidth;
    merchant.classList.add('cr-shop-enter');
    function afterShopEntrance(event){
      if(event.target!==merchant||event.animationName!=='cr-merchant-enter')return;
      merchant.removeEventListener('animationend',afterShopEntrance);
      if(!state.shopOpen||merchant.hidden)return;
      ui.result.hidden=true;
      ui.overlay.style.background='#000';
    }
    merchant.addEventListener('animationend',afterShopEntrance);
    state.nextMerchantDay=state.day+randomInt(2,3);
  }

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
    if(which) hideFamilyHint();
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
    hideFamilyHint();
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
    const count=(5+Math.floor(Math.random()*3))*(hasItem('bait')?2:1);
    for (let i=0;i<count;i++) {
      const x=rand(.08,.92), y=Math.random()<.88?rand(.53,.92):rand(.12,.46);
      const clue={x,y,img:pick(imgs),cropX:rand(10,90),cropY:rand(10,90),index:i,flipped:Math.random()<.46,fullView:hasItem('hat')&&i%2===0};
      state.clues.push(clue);
      const button=document.createElement('button');
      button.type='button'; button.className='cr-clue'; button.style.left=`${x*100}%`; button.style.top=`${y*100}%`;
      button.style.backgroundImage=`url(${JSON.stringify(clue.img)})`;
      button.style.backgroundPosition=clue.fullView?'center':`${clue.cropX}% ${clue.cropY}%`;
      if(clue.fullView){button.style.backgroundSize='contain';button.style.backgroundRepeat='no-repeat';}
      if(clue.flipped)button.style.scale='-1 1';
      button.setAttribute('aria-label',`Inspect clue ${i+1}`);
      button.addEventListener('click',()=>inspectClue(clue));
      clue.element=button; ui.markers.appendChild(button);
    }
    refreshItemEffects();
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
    const firstTime=!state.inspected.has(clue.index);
    state.inspected.add(clue.index);
    if(firstTime&&hasItem('treasure')&&Math.random()<0.3)changeCoins(1);
    ui.inspect.hidden=false;
    ui.inspectImage.style.backgroundImage=`url(${JSON.stringify(clue.img)})`;
    ui.inspectImage.style.backgroundPosition=clue.fullView?'center':`${clue.cropX}% ${clue.cropY}%`;
    ui.inspectImage.style.backgroundSize=clue.fullView?'contain':'';
    ui.inspectImage.style.backgroundRepeat=clue.fullView?'no-repeat':'';
    ui.inspectImage.style.scale = '';

ui.inspectImage.style.backgroundPosition = clue.fullView
    ? 'center'
    : `${clue.flipped ? 100 - clue.cropX : clue.cropX}% ${clue.cropY}%`;
    updateLantern();
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
    // Decoy distraction temporarily slows the triggerfish, then leaves it slower
    // for the remainder of this day. The sound plays once as it refocuses.
    if(state.decoyDistractedUntil && now>=state.decoyDistractedUntil){
      state.decoyDistractedUntil=0;
      state.inventory=state.inventory.filter(id=>id!=='decoy');
      refreshItemEffects();
      play(sfx.jump);
    }
    const decoySpeed=state.decoyDistractedUntil?0.15:state.decoySlowForDay?0.75:1;
    state.elapsed += deltaSeconds * (!hasItem('ring')&&now < state.speedBoostUntil ? 2 : 1) * (hasItem('bait')?1.1:1) * decoySpeed;
    state.lastTick=now;
    const rawProgress=state.elapsed/state.catchTime;
    const progress=Math.min(1,rawProgress);
    // Continue approaching even after the original catch time when items add distance.
    state.distance=Math.max(0,30*(1-Math.pow(progress,hasItem('ring')?1:1.12))-Math.max(0,rawProgress-1)*30+state.distanceBonus);
    // Check once each day when the triggerfish first reaches 7 metres.
    // An unsuccessful 60% roll cannot be retried every animation frame.
    if(hasItem('decoy')&&!state.decoyCheckedDay&&state.distance<=7){
      state.decoyCheckedDay=true;
      if(Math.random()<0.60){
        const push=randomInt(5,8);
        state.distanceBonus+=push;state.distance+=push;
        state.decoyDistractedUntil=now+2600;
        state.decoySlowForDay=true;
      }
    }
    ui.distance.textContent=`${Math.ceil(state.distance)} m away`;
    updateTriggerShadow(now);
    updateLantern();
    // A slow, ominous dark-red vignette builds from 11m to 1m.
    const danger = Math.max(0, Math.min(1, (11 - state.distance) / 10));
    ui.screen.style.setProperty('--cr-danger', danger.toFixed(3));
    // Subtle proximity shake; do not disturb merchant/results or text controls.
    ui.world.style.setProperty('--cr-shake-x', `${danger*(Math.random()-.5)*3}px`);
    ui.world.style.setProperty('--cr-shake-y', `${danger*(Math.random()-.5)*3}px`);
    ui.world.style.translate=`var(--cr-shake-x) var(--cr-shake-y)`;
    // Step.mp3 first plays after moving 1m from today's starting distance,
    // then after each additional 3m (works with equipment bonuses above 30m).
    // Play at most one footstep in a frame, even if the fish moves several metres.
    const metresTravelled=Math.max(0,state.startDistance-state.distance);
    const stepsDue=metresTravelled>=1 ? 1+Math.floor((metresTravelled-1)/3) : 0;
    if (stepsDue > state.stepIndex) {
    // Randomly choose between the two footstep sounds
    const randomStep = Math.random() < 0.5 ? sfx.step1 : sfx.step2;

    play(randomStep);

    state.stepIndex = stepsDue;
}
const desiredVolume = Math.min(
    1,
    (state.day % 7 !== 0 && !state.dark ? .38 : .30) +
    (state.day % 7 !== 0 && !state.dark ? .62 : .70) * Math.pow(progress, 1.45)
);

const fadeIn = Math.min(1, state.elapsed / 1.5);

ui.music.volume = desiredVolume * fadeIn;
    if (state.distance<=0) {
      if(hasItem('pepper')){
        const damage=800*Math.pow(2,state.pepperUses++);
        // Pepper Spray remains owned and escalates each time it activates.
        revealDay(null,damage);return;
      }
      if(hasItem('vest') && !state.vestUsedToday){
        state.vestUsedToday=true;
        // The vest sets the distance to 35 m, rather than adding 35 m.
        state.distanceBonus+=35-state.distance;
        state.distance=35;
        // Below 50 HP: no damage. Between 50 and 99: set to 50.
        // At 100 HP or above: set to 100.
        if(state.hp>=100)state.hp=100;
        else if(state.hp>=50)state.hp=50;
        setHp(state.hp);
        ui.distance.textContent='35 m away';
      }
      else if(hasItem('anemone')){state.inventory=state.inventory.filter(x=>x!=='anemone');state.distanceBonus+=20;state.distance=20;refreshItemEffects();}
      else {endRun('caught');return;}
    }
    state.raf=requestAnimationFrame(tick);
  }
  async function startDay() {
    ui.overlay.style.background='';
    document.getElementById('cr-world')
    .classList.remove('cr-first-day-fade');
    if (!state.running || !available.length) return;
    hideFamilyHint();
    fadeEndOfDayMusic(0, 900);
    state.active=false; cancelAnimationFrame(state.raf);
    // Hide the reef before the countdown
ui.world.classList.remove('cr-reef-visible');
    changeCoins(2+(hasItem('farmrelax')?1:0)+(hasItem('farm3')?2:0));
    state.kazooUsed=false;
    state.spearClicks=0;state.spearLastClick=0;
    state.vestUsedToday=false;
    state.decoyCheckedDay=false;state.decoyDistractedUntil=0;state.decoySlowForDay=false;
    if(hasItem('csgloves') && state.coins>0){changeCoins(-1);state.csGlovesDistance++;}
    if(hasItem('vitamins'))heal(50);
    state.dark=state.day%5===0;
    ui.screen.style.setProperty('--cr-danger', '0');
    ui.screen.classList.toggle(
    'cr-monochrome',
    state.day % 7 === 0 && !hasItem('goggles') && !hasItem('reefheal')
);
    const reefImage = pick(REEF_PANORAMAS);
ui.world.style.backgroundImage =
    `linear-gradient(180deg, rgba(2,14,25,.38), rgba(0,0,0,.58)), url("${reefImage}")`;
    // Day 19: ~14 footsteps over 5.6 seconds (one every 0.4 s).
    state.catchTime=60*Math.pow(0.15,(Math.min(state.day,30)-1)/29);
    state.elapsed=0; state.lastTick=0;
    state.heldDistanceBonus=ownedDistanceBonus();
    state.distanceBonus=state.pendingDistance+(state.mungNextDay?20:0)+state.heldDistanceBonus;
    state.pendingDistance=0;state.mungNextDay=false;state.distance=30+state.distanceBonus;state.startDistance=state.distance;state.stepIndex=0;
    state.viewX=.5; state.viewY=.5; state.guessLockUntil=0; state.speedBoostUntil=0;
    ui.day.textContent=`DAY ${state.day}`; ui.distance.textContent=`${Math.ceil(state.distance)} m away`;
    ui.screen.classList.toggle('cr-extra-dark',state.dark);
    ui.notice.hidden=false;
    ui.inspect.hidden=true; ui.guessPanel.hidden=false; ui.feedback.hidden=true;
    ui.submit.disabled=false;
    const selected=pick(available); state.species=selected.name;
    createClues(selected.imgs);
    ui.guess.value=available[0].name;
    refreshItemEffects();
    configureMusic();
if (!await countdown()) return;
setGameHudVisible(true);
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
updateLantern();
// Reveal Family Tree only once the reef is fully in view.
familyHintTimer=setTimeout(()=>{
  familyHintReady=true;
  updateFamilyHintVisibility();
},state.day===1?2100:200);

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
  async function revealDay(guess, forcedDamage=null) {
    if (!state.active) return;

    state.active = false;
    updateLantern();
    // A successful decoy has been used even if the day ends during distraction.
    if(state.decoyDistractedUntil){
      state.decoyDistractedUntil=0;
      state.inventory=state.inventory.filter(id=>id!=='decoy');
      refreshItemEffects();
    }
    hideFamilyHint();
    cancelAnimationFrame(state.raf);

    ui.inspect.hidden = true;
    ui.guessPanel.hidden = true;

    // The accepted-guess sound already plays in submitGuess().
    // Don't play the locked sound over it.
    let damage=forcedDamage!==null?forcedDamage:(guess===state.species?correctDamage(state.elapsed)*3:similarDamage(state.elapsed,state.inspected.size));
    const before=state.hp;
    // The orb doubles damage from incorrect guesses at its two remembered species.
    if(guess!==null&&guess!==state.species&&hasItem('orb')&&['chrysopterus','maohiensis'].some(x=>state.species.toLowerCase().includes(x)))damage*=2;
    damage=applyDamage(damage);
    // End-of-day passive effects apply once per completed day.
    const actualHealthLost = before - state.hp;
    if(hasItem('detector')&&Math.random()<.5)changeCoins(1);
    if(hasItem('mints')&&Math.random()<.5)heal(65);
const wasCorrect = guess !== null && guess === state.species;
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
    $('cr-result-guess').textContent=guess===null?'Pepper Spray saved you from the triggerfish.':`Your guess: ${guess}`;
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
        const lockout=hasItem('shield')?0:6000;
        state.guessLockUntil=Date.now()+lockout;
        if(lockout)ui.submit.disabled=true;
        if(!hasItem('shield'))play(sfx.awful);
        if(hasItem('kazoo')&&!state.kazooUsed){
          state.kazooUsed=true;state.distanceBonus+=20;state.distance+=20;
          ui.distance.textContent=`${Math.ceil(state.distance)} m away`;
        }
        if(!hasItem('ring'))state.speedBoostUntil = performance.now() + 3000;
        feedback('AWFUL GUESS');
        if(lockout)setTimeout(()=>{ui.submit.disabled=false;},lockout);
        return;
    }

    if(hasItem('razor') && state.distance<=3)changeCoins(3);
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
    hideFamilyHint();
    triggerShadow.classList.remove('cr-shadow-visible');
clearTimeout(shadowHideTimer);
    if (!state.running) return;
    state.active = false;
cancelAnimationFrame(state.raf);
cancelDeathTransition();

const diedFromHealth = reason === 'health';

// Apply the special death-screen appearance only for HP deaths.
ui.screen.classList.toggle('cr-health-death', diedFromHealth);

deathReason.hidden = !diedFromHealth;

// Stop all gameplay audio when HP reaches zero.
if (diedFromHealth) {
    stopAudio();
    stopIntroMusic();
    fadeMusicbox(0, 500);

    ui.inspect.hidden = true;
    ui.guessPanel.hidden = true;

    inventoryModal.hidden = true;
    ui.inspect.hidden = true;
}
    if (reason==='caught') {
      state.history.push({day:state.day,answer:state.species,guess:'No guess',clues:[...state.clues]});
      setOverlay(null);
      ui.jumpscare.hidden=false;
      play(sfx.jump);
    }
    state.running=false;
    setGameHudVisible(false);
    ui.screen.classList.remove('cr-shop-hud');
    inventoryModal.hidden=true;
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
    if (reason === 'health') {
    // Do not reveal the most recent clown.
    $('cr-death-species').textContent = '';
    $('cr-death-gallery').replaceChildren();
} else {
    // Keep the normal triggerfish death summary.
    deathGallery(state.history.at(-1));
}
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
    // HP death: fade to black, then reveal the death screen.
    ui.curtain.classList.add('cr-black');

    setTimeout(() => {
        // Show the death screen behind the black curtain.
        setOverlay('death');

        ui.death.classList.remove('cr-death-fade');
        void ui.death.offsetWidth;
        ui.death.classList.add('cr-death-fade');

        // Reveal the death screen.
        ui.curtain.classList.remove('cr-black');
    }, 850);
}
  }
  
  function startRun() {
    ui.screen.classList.remove('cr-health-death');
deathReason.hidden = true;
ui.curtain.classList.remove('cr-black');
    hideFamilyHint();
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
    MAX_HP=BASE_MAX_HP;stopAudio(); state.running=true; state.active=false; state.day=1; state.hp=MAX_HP; state.history=[];
    state.coins=1;state.inventory=[];state.owned=new Set();state.nextMerchantDay=randomInt(2,3);
    state.spearClicks=0;state.spearLastClick=0;
    state.extraSlots=0;state.extraSlotsBought=0;state.pepperUses=0;state.kazooUsed=false;state.vestUsedToday=false;state.decoyCheckedDay=false;state.decoyDistractedUntil=0;state.decoySlowForDay=false;state.csGlovesDistance=15;state.maxHpPenalty=0;state.pendingDistance=0;state.distanceBonus=0;state.heldDistanceBonus=0;state.mungNextDay=false;state.shopOpen=false;state.inventoryPaused=false;
    shopPurchaseAnimating=false;merchant.hidden=true;merchant.classList.remove('cr-shop-enter','cr-shop-exit');ui.screen.classList.remove('cr-shop-hud');inventoryModal.hidden=true;familyHint.hidden=true;setGameHudVisible(false);updateCoins();refreshItemEffects();
    setHp(state.hp); showOnly(ui.screen); document.body.classList.add('clown-run-active');
    const generation = ++introGeneration;

playSurvivealIntro(generation).then(completed => {
    if (completed && state.running) {
        startDay();
    }
});
  }
  function exitRun() {
    hideFamilyHint();
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
    merchant.hidden=true;merchant.classList.remove('cr-shop-enter','cr-shop-exit');ui.screen.classList.remove('cr-shop-hud');inventoryModal.hidden=true;familyHint.hidden=true;setGameHudVisible(false);state.shopOpen=false;state.inventoryPaused=false;
    stopAudio(); ui.inspect.hidden=true; updateLantern(); setOverlay(null);
    document.body.classList.remove('clown-run-active'); showOnly(ui.home);
    window.clownSurvivealAudioOnly = false;
    window.clownRunNormalMusic?.restore();
  }
  ui.button.addEventListener('click',startRun);
  ui.exit.addEventListener('click',exitRun); ui.deathExit.addEventListener('click',exitRun);
  ui.restart.addEventListener('click',startRun);
  ui.next.addEventListener('click',()=>{if (!state.running || state.hp <= 0) return; if(state.day>=state.nextMerchantDay)openShop();else{state.day++;startDay();}});
  ui.submit.addEventListener('click',submitGuess);
  ui.guess.addEventListener('change',()=>ui.guess.classList.toggle('cr-exact-selected',ui.guess.selectedOptions[0]?.classList.contains('cr-exact-hint')||false));
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
  ui.inspect.addEventListener('pointermove', event => {
    const r = ui.inspectImage.getBoundingClientRect();

    let x = (event.clientX - r.left) / r.width * 100;
    const y = (event.clientY - r.top) / r.height * 100;

    // Compensate for horizontally flipped inspection images.
    if (ui.inspectImage.style.scale === '-1 1') {
        x = 100 - x;
    }

    ui.flashlight.style.setProperty('--fx', `${x}%`);
    ui.flashlight.style.setProperty('--fy', `${y}%`);
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
