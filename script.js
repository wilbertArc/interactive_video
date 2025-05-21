const video = document.getElementById('videos');

document.addEventListener('fullscreenchange', () => {
  if (document.fullscreenElement) {
    video.style.objectFit = 'contain'; // in fullscreen
  } else {
    video.style.objectFit = 'cover'; // normal view
  }
});

// video 1: pilih makanan
const video1 = document.getElementById('scene1');
if( video1) {
  video1.addEventListener('ended', function () {
    window.location.href = "scene2.html"; // Redirect when video ends
  });
  document.addEventListener('fullscreenchange', () => {
  if (document.fullscreenElement) {
    video1.style.objectFit = 'contain'; // in fullscreen
  } else {
    video1.style.objectFit = 'cover'; // normal view
  }
});
}

// video McD: Habis mcd mau ngapain
const videoMcD = document.getElementById('sceneMcD');
if (videoMcD) {
  videoMcD.addEventListener('ended', function () {
    window.location.href = "sceneAfterMcD.html"; // Redirect when video ends
  });
  document.addEventListener('fullscreenchange', () => {
  if (document.fullscreenElement) {
    videoMcD.style.objectFit = 'contain'; // in fullscreen
  } else {
    videoMcD.style.objectFit = 'cover'; // normal view
  }
});
}

// video Healthy: habis Healthy mau ngapain
const videoHealthy = document.getElementById('sceneHealthy');
if (videoHealthy) {
  videoHealthy.addEventListener('ended', function () {
    window.location.href = "sceneAfterHealthy.html"; // Redirect when video ends
  });
  document.addEventListener('fullscreenchange', () => {
  if (document.fullscreenElement) {
    videoHealthy.style.objectFit = 'contain'; // in fullscreen
  } else {
    videoHealthy.style.objectFit = 'cover'; // normal view
  }
});
}



