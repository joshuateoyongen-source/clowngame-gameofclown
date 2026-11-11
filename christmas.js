(() => {
  'use strict';

  const container = document.createElement('div');
  container.id = 'christmas-snow';
  document.body.appendChild(container);

  const NORMAL_INTERVAL = 650;
  const GAME_INTERVAL = NORMAL_INTERVAL * 5;

  let lastSpawn = 0;
  let wasSurviveal = false;

  function isSurviveal() {
  return document.body.classList.contains('christmas-surviveal');
}

  function isGameActive() {
  return (
    document.body.classList.contains('cr-active') ||
    document.body.classList.contains('christmas-gameplay')
  );
}

  function spawnFlake() {
    const flake = document.createElement('img');

    flake.className = 'christmas-flake';

    flake.src = Math.random() < 0.8
      ? 'christmas/snowflake.png'
      : 'christmas/clown.png';

    const size = 20 + Math.random() * 30;
    const duration = 9 + Math.random() * 7;

    flake.style.left = `${Math.random() * 100}%`;
    flake.style.setProperty('--flake-size', `${size}px`);
    flake.style.setProperty('--fall-time', `${duration}s`);

    container.appendChild(flake);

    flake.addEventListener('animationend', () => {
      flake.remove();
    }, { once: true });
  }

  function updateSnow(now) {
    const surviveal = isSurviveal();

    // When Surviveal begins, stop new flakes entirely.
    if (surviveal) {
      wasSurviveal = true;
      requestAnimationFrame(updateSnow);
      return;
    }

    // Reset the spawn timer after exiting Surviveal.
    if (wasSurviveal) {
      wasSurviveal = false;
      lastSpawn = now;
    }

    const interval = isGameActive()
      ? GAME_INTERVAL
      : NORMAL_INTERVAL;

    if (now - lastSpawn >= interval) {
      spawnFlake();
      lastSpawn = now;
    }

    requestAnimationFrame(updateSnow);
  }

  // Populate the screen gradually at startup.
  requestAnimationFrame(updateSnow);
})();