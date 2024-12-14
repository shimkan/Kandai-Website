
document.addEventListener('DOMContentLoaded', function () {
  const audioButton = document.getElementById('name-audio-button');
  const audioElement = document.getElementById('audio-name');

  audioButton.addEventListener('click', function () {
    audioElement.currentTime = 0; // Reset to start
    audioElement.play();
  });
});