// viedo MCD Game: habis mcd and game (Ending)
const mcdGame = document.getElementById('sceneMCDGame');
if (mcdGame) {
  mcdGame.addEventListener('ended', function () {
    window.location.href = "endingMCDHW.html"; // Redirect when video ends
  });
  document.addEventListener('fullscreenchange', () => {
  if (document.fullscreenElement) {
    mcdGame.style.objectFit = 'contain'; // in fullscreen
  } else {
    mcdGame.style.objectFit = 'cover'; // normal view
  }
});
}

// video MCD Homework: habis mcd and homework (Ending)
const mcdhome = document.getElementById('sceneMCDHomework');
if (mcdhome) {
  mcdhome.addEventListener('ended', function () {
    window.location.href = "endingRIP.html"; // Redirect when video ends
  });
  document.addEventListener('fullscreenchange', () => {
  if (document.fullscreenElement) {
    mcdhome.style.objectFit = 'contain'; // in fullscreen
  } else {
    mcdhome.style.objectFit = 'cover'; // normal view
  }
});
}

// video Healthy Game: habis healthy and game (Ending)
const healthygame = document.getElementById('sceneHealthyGame');
if (healthygame) {
  healthygame.addEventListener('ended', function () {
    window.location.href = "healthyGame.html"; // Redirect when video ends
  });
  document.addEventListener('fullscreenchange', () => {
  if (document.fullscreenElement) {
    healthygame.style.objectFit = 'contain'; // in fullscreen
  } else {
    healthygame.style.objectFit = 'cover'; // normal view
  }
});
}

// video Healthy Homework: habis healthy and homework (Ending)
const healthyhomework = document.getElementById('sceneHealthyHomework');
if (healthyhomework) {
  healthyhomework.addEventListener('ended', function () {
    window.location.href = "healthyStudy.html"; // Redirect when video ends
  });
  document.addEventListener('fullscreenchange', () => {
  if (document.fullscreenElement) {
    healthyhomework.style.objectFit = 'contain'; // in fullscreen
  } else {
    healthyhomework.style.objectFit = 'cover'; // normal view
  }
});
}
