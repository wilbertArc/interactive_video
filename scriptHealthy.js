// video Healthy
const video = document.getElementById('sceneHealthy');

  video.addEventListener('ended', function () {
    window.location.href = "sceneAfterHealthy.html"; // Redirect when video ends
});
