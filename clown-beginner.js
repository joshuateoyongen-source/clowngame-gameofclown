// Clown Beginner — separate from Free Play and Clown Surviveal.
(() => {
  'use strict';
  const lessons = [{"title": "Ocellaris vs Percula", "species": ["Ocellaris", "Percula"], "focus": null}, {"title": "Meet the Maroon", "species": ["Ocellaris", "Percula", "Biaculeatus"], "focus": "Biaculeatus"}, {"title": "Maroon Lookalikes", "species": ["Biaculeatus", "Epigrammata"], "focus": "Epigrammata"}, {"title": "Meet the Red Saddleback", "species": ["Ocellaris", "Percula", "Biaculeatus", "Ephippium"], "focus": "Ephippium"}, {"title": "Tomato Clownfish", "species": ["Ephippium", "Frenatus"], "focus": "Frenatus"}, {"title": "Frenatus vs Barberi", "species": ["Frenatus", "Barberi"], "focus": "Barberi"}, {"title": "Meet Melanopus", "species": ["Ephippium", "Frenatus", "Barberi", "Melanopus"], "focus": "Melanopus"}, {"title": "Meet Rubrocinctus", "species": ["Ephippium", "Frenatus", "Barberi", "Melanopus", "Rubrocinctus"], "focus": "Rubrocinctus"}, {"title": "Refresher: Early Clowns", "species": ["Ocellaris", "Percula", "Biaculeatus"], "focus": null}, {"title": "Test 1: Early Clowns", "species": ["Ocellaris", "Percula", "Biaculeatus", "Epigrammata", "Ephippium", "Frenatus", "Barberi", "Melanopus", "Rubrocinctus"], "focus": null, "test": [10, 8]}, {"title": "Meet the Skunks", "species": ["Akallopisos", "Perideraion"], "focus": null}, {"title": "Meet Sandarancinos", "species": ["Akallopisos", "Perideraion", "Sandarancinos"], "focus": "Sandarancinos"}, {"title": "Meet Pacificus", "species": ["Akallopisos", "Pacificus"], "focus": "Pacificus"}, {"title": "Skunk Identification", "species": ["Akallopisos", "Perideraion", "Sandarancinos", "Pacificus"], "focus": null}, {"title": "Refresher: Non-skunk Clowns", "species": ["Ocellaris", "Percula", "Biaculeatus", "Epigrammata", "Ephippium", "Frenatus", "Barberi", "Melanopus", "Rubrocinctus"], "focus": null}, {"title": "Test 2: All Species So Far", "species": ["Ocellaris", "Percula", "Biaculeatus", "Epigrammata", "Ephippium", "Frenatus", "Barberi", "Melanopus", "Rubrocinctus", "Akallopisos", "Perideraion", "Sandarancinos", "Pacificus"], "focus": null, "test": [15, 12]}, {"title": "Eastern Australia", "species": ["Mccullochi", "Latezonatus"], "focus": null}, {"title": "Arabian Seas", "species": ["Bicinctus", "Omanensis"], "focus": null}, {"title": "African Clownfish", "species": ["Allardi", "Latifaciatus"], "focus": null}, {"title": "Meet Chrysogaster", "species": ["Allardi", "Latifaciatus", "Chrysogaster"], "focus": "Chrysogaster"}, {"title": "Chrysogaster vs Fuscocaudatus", "species": ["Chrysogaster", "Fuscocaudatus"], "focus": null}, {"title": "African Clownfish Refresher", "species": ["Allardi", "Latifaciatus", "Chrysogaster", "Fuscocaudatus"], "focus": null}, {"title": "Test 3: Everything So Far", "species": ["Ocellaris", "Percula", "Biaculeatus", "Epigrammata", "Ephippium", "Frenatus", "Barberi", "Melanopus", "Rubrocinctus", "Akallopisos", "Perideraion", "Sandarancinos", "Pacificus", "Mccullochi", "Latezonatus", "Bicinctus", "Omanensis", "Allardi", "Latifaciatus", "Chrysogaster", "Fuscocaudatus"], "focus": null, "test": [30, 25]}, {"title": "Meet the Saddlebacks", "species": ["Polymnus", "Sebae"], "focus": null}, {"title": "Saddlebacks and Australian Clowns", "species": ["Polymnus", "Sebae", "Mccullochi", "Latezonatus"], "focus": null}, {"title": "Saddleback Test", "species": ["Polymnus", "Sebae"], "focus": null, "test": [7, 5]}, {"title": "Clarkii vs Allardi", "species": ["Clarkii", "Allardi"], "focus": "Clarkii"}, {"title": "Clarkii vs Snyderi", "species": ["Clarkii", "Snyderi"], "focus": null}, {"title": "Meet Japonicus", "species": ["Clarkii", "Snyderi", "Japonicus"], "focus": "Japonicus"}, {"title": "Meet Chrysargyrus", "species": ["Clarkii", "Snyderi", "Japonicus", "Chrysargyrus"], "focus": "Chrysargyrus"}, {"title": "Meet Milii", "species": ["Clarkii", "Snyderi", "Japonicus", "Chrysargyrus", "Milii"], "focus": "Milii"}, {"title": "Clarkii Group Test", "species": ["Clarkii", "Snyderi", "Japonicus", "Chrysargyrus", "Milii"], "focus": null, "test": [15, 12]}, {"title": "Skunk Refresher", "species": ["Akallopisos", "Perideraion", "Sandarancinos", "Pacificus"], "focus": null, "test": [10, 7]}, {"title": "Tomato Group Refresher", "species": ["Frenatus", "Barberi", "Melanopus", "Ephippium", "Rubrocinctus"], "focus": null, "test": [10, 7]}, {"title": "Leucokranos and Thiellei", "species": ["Leucokranos", "Thiellei"], "focus": null}, {"title": "Meet Chrysopterus", "species": ["Chrysopterus", "Allardi"], "focus": "Chrysopterus"}, {"title": "Chrysopterus vs Maohiensis", "species": ["Chrysopterus", "Maohiensis"], "focus": null}, {"title": "Chrysopterus Group Test", "species": ["Maohiensis", "Chrysopterus", "Allardi", "Clarkii"], "focus": null, "test": [15, 12]}, {"title": "Comprehensive Test", "species": ["Ocellaris", "Percula", "Biaculeatus", "Epigrammata", "Ephippium", "Frenatus", "Barberi", "Melanopus", "Rubrocinctus", "Akallopisos", "Perideraion", "Sandarancinos", "Pacificus", "Mccullochi", "Latezonatus", "Bicinctus", "Omanensis", "Allardi", "Latifaciatus", "Chrysogaster", "Fuscocaudatus", "Polymnus", "Sebae", "Clarkii", "Snyderi", "Japonicus", "Chrysargyrus", "Milii", "Leucokranos", "Thiellei", "Chrysopterus", "Maohiensis"], "focus": null, "test": [35, 27]}, {"title": "Meet Tricinctus", "species": ["Tricinctus", "Chrysargyrus"], "focus": "Tricinctus"}, {"title": "Meet Akindynos", "species": ["Omanensis", "Akindynos"], "focus": "Akindynos"}, {"title": "Meet Chagosensis", "species": ["Chagosensis", "Bicinctus"], "focus": "Chagosensis"}, {"title": "Meet Nigripes", "species": ["Nigripes", "Chagosensis"], "focus": "Nigripes"}, {"title": "Nigripes vs Perideraion", "species": ["Nigripes", "Perideraion"], "focus": null}, {"title": "Early Clowns Refresher", "species": ["Ocellaris", "Percula", "Biaculeatus", "Epigrammata"], "focus": null}, {"title": "Spot the Fake", "species": ["a Fake", "Ocellaris", "Percula"], "focus": "a Fake"}, {"title": "African Clownfish Test", "species": ["Allardi", "Latifaciatus", "Chrysogaster", "Fuscocaudatus"], "focus": null, "test": [15, 12]}, {"title": "Saddleback Test", "species": ["Polymnus", "Sebae"], "focus": null, "test": [7, 5]}, {"title": "FINAL TEST: Clown Mastery", "species": ["Ocellaris", "Percula", "Biaculeatus", "Epigrammata", "Ephippium", "Frenatus", "Barberi", "Melanopus", "Rubrocinctus", "Akallopisos", "Perideraion", "Sandarancinos", "Pacificus", "Mccullochi", "Latezonatus", "Bicinctus", "Omanensis", "Allardi", "Latifaciatus", "Chrysogaster", "Fuscocaudatus", "Polymnus", "Sebae", "Clarkii", "Snyderi", "Japonicus", "Chrysargyrus", "Milii", "Leucokranos", "Thiellei", "Chrysopterus", "Maohiensis", "Tricinctus", "Akindynos", "Chagosensis", "Nigripes", "a Fake"], "focus": null, "test": [50, 44]}];
  const $ = id => document.getElementById(id);
  const STORAGE_KEY = 'clown-beginner-progress-v1';
  let unlocked = 1, current = 1, questions = [], questionIndex = 0, score = 0, answered = false;
  const allPhotos = Array.isArray(fish) ? fish : [];
  const photoMap = new Map();
  for (const item of allPhotos) {
    if (!photoMap.has(item.species)) photoMap.set(item.species, []);
    photoMap.get(item.species).push(item.image);
  }
  try { unlocked = Math.max(1, Math.min(50, Number(localStorage.getItem(STORAGE_KEY)) || 1)); } catch (_) {}
  const show = screen => {
    for (const id of ['home-screen', 'play-mode-screen', 'challenge-screen', 'clown-beginner-screen', 'guide-screen', 'game-screen']) {
      const el = $(id); if (el) el.hidden = id !== screen;
    }
  };
  $('play-button').onclick = () => show('play-mode-screen');
  $('play-mode-back').onclick = () => show('home-screen');
  $('play-mode-free').onclick = () => {
    // Reuse the original Free Play setup, without changing its game logic.
    for (const id of ['blink-checkbox','upside-checkbox','reverse-checkbox','corrupt-checkbox','hazelnut-checkbox']) {
      const checkbox = $(id); if (checkbox) checkbox.checked = false;
    }
    show('challenge-screen');
  };
  $('play-mode-beginner').onclick = () => { show('clown-beginner-screen'); renderMap(); };
  $('cb-home').onclick = () => show('play-mode-screen');
  $('cb-back').onclick = () => { $('cb-lesson').hidden = true; $('cb-map').hidden = false; renderMap(); };
  $('cb-retry').onclick = () => startLesson(current);
  $('cb-next').onclick = () => startLesson(Math.min(49, current + 1));
  $('cb-start').onclick = () => startQuiz();
  $('cb-submit').onclick = () => checkAnswer();
  $('cb-answer').addEventListener('change', () => { $('cb-submit').disabled = !$('cb-answer').value; });
  function renderMap() {
    $('cb-map').hidden = false; $('cb-lesson').hidden = true;
    $('cb-progress').textContent = `Unlocked: ${Math.min(unlocked,49)} of 49 lessons`;
    const list = $('cb-levels'); list.replaceChildren();
    lessons.forEach((lesson, i) => {
      const n = i + 1, button = document.createElement('button');
      button.type = 'button'; button.className = 'cb-level';
      button.disabled = n > unlocked;
      button.textContent = `${n}. ${lesson.title}${n > unlocked ? ' 🔒' : n < unlocked ? ' ✓' : ''}`;
      button.addEventListener('click', () => startLesson(n)); list.append(button);
    });
    $('cb-certificate-link').hidden = unlocked < 50;
    // Show the beginning of the path when first entering; preserve manual scrolling afterward.
    const path = $('cb-levels');
    if (path.dataset.initialized !== 'yes') {
      path.scrollLeft = 0;
      path.dataset.initialized = 'yes';
    }
  }
  function startLesson(n) {
    if (n > unlocked || n < 1 || n > lessons.length) return;
    current = n; const lesson = lessons[n-1];
    $('cb-map').hidden = true; $('cb-lesson').hidden = false;
    $('cb-preview').hidden = false; $('cb-quiz').hidden = true; $('cb-results').hidden = true;
    $('cb-heading').textContent = `Lesson ${n}: ${lesson.title}`;
    $('cb-description').textContent = lesson.test
      ? `Checkpoint test: ${lesson.test[0]} photos. Score at least ${lesson.test[1]} to unlock the next lesson.`
      : `Learn these ${lesson.species.length} species, then try five practice photographs. Mistakes are part of learning!`;
    const cards = $('cb-cards'); cards.replaceChildren();
    lesson.species.forEach(name => {
      const card = document.createElement('article'); card.className = 'cb-card';
      const img = document.createElement('img'); img.loading = 'lazy'; img.alt = name;
      img.src = (photoMap.get(name) || [])[0] || '';
      const heading = document.createElement('strong'); heading.textContent = name;
      const note = document.createElement('p');
      note.textContent = name === lesson.focus ? 'Focus species — pay extra attention to its markings.' : 'Study the colours, white bands and body shape.';
      if (current === 6 && name === 'Barberi') {
        note.textContent = 'Look for the distinctive dark/black patch on the forehead of Barberi, useful when comparing it with Frenatus.';
      }
      card.append(img, heading, note); cards.append(card);
    });
    $('cb-start').textContent = lesson.test ? 'Start Test' : 'Start Practice';
  }
  function startQuiz() {
    const lesson = lessons[current-1];
    const available = lesson.species.filter(s => (photoMap.get(s) || []).length);
    if (!available.length) { alert('No images were found for this lesson.'); return; }
    const total = lesson.test ? lesson.test[0] : 5;
    questions = [];
    const used = new Set();
    for (let i = 0; i < total; i++) {
      let pool = available;
      if (!lesson.test && lesson.focus && i % 2 === 0 && available.includes(lesson.focus)) pool = [lesson.focus];
      const species = pool[Math.floor(Math.random() * pool.length)];
      const photos = photoMap.get(species);
      const fresh = photos.filter(p => !used.has(p));
      const image = (fresh.length ? fresh : photos)[Math.floor(Math.random() * (fresh.length ? fresh.length : photos.length))];
      used.add(image); questions.push({species, image});
    }
    questionIndex = 0; score = 0;
    $('cb-preview').hidden = true; $('cb-quiz').hidden = false; $('cb-results').hidden = true;
    const select = $('cb-answer'); select.replaceChildren();
    const placeholder = document.createElement('option'); placeholder.value = ''; placeholder.textContent = 'Choose a species…'; select.append(placeholder);
    lesson.species.forEach(name => { const option = document.createElement('option'); option.value = name; option.textContent = name; select.append(option); });
    renderQuestion();
  }
  function renderQuestion() {
    answered = false; const q = questions[questionIndex];
    $('cb-counter').textContent = `Photo ${questionIndex+1} / ${questions.length} · Correct: ${score}`;
    $('cb-photo').src = q.image; $('cb-photo').alt = 'Identify this clownfish';
    $('cb-answer').value = ''; $('cb-answer').disabled = false;
    $('cb-submit').disabled = true; $('cb-submit').textContent = 'Submit Guess';
    $('cb-feedback').textContent = '';
  }
  function checkAnswer() {
    if (!answered) {
      const guess = $('cb-answer').value; if (!guess) return;
      answered = true; const q = questions[questionIndex];
      if (guess === q.species) { score++; $('cb-feedback').textContent = `Correct! That's ${q.species}.`; }
      else $('cb-feedback').textContent = `Not quite. This is ${q.species}, not ${guess}. Compare its bands and colours with the lesson cards.`;
      $('cb-answer').disabled = true; $('cb-submit').textContent = questionIndex + 1 === questions.length ? 'See Results' : 'Next Photo';
      $('cb-submit').disabled = false;
      return;
    }
    questionIndex++;
    if (questionIndex < questions.length) renderQuestion(); else finishQuiz();
  }
  function finishQuiz() {
    const lesson = lessons[current-1];
    const required = lesson.test ? lesson.test[1] : 0;
    const passed = !lesson.test || score >= required;
    $('cb-quiz').hidden = true; $('cb-results').hidden = false;
    $('cb-result-title').textContent = passed ? 'Lesson complete!' : 'Try again';
    $('cb-result-text').textContent = `You identified ${score} of ${questions.length} photographs correctly.` +
      (lesson.test ? ` Required: ${required} / ${questions.length}.` : ' You can revisit this lesson anytime.');
    if (passed && current === unlocked) {
      unlocked = Math.min(50, unlocked + 1);
      try { localStorage.setItem(STORAGE_KEY, String(unlocked)); } catch (_) {}
    }
    $('cb-next').hidden = !passed || current === 49;
    $('cb-retry').hidden = passed && current === 49;
    $('cb-certificate-earned').hidden = !(passed && current === 49);
  }
})();
