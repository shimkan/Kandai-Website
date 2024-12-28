
document.addEventListener('DOMContentLoaded', function () {
  const audioButton = document.getElementById('name-audio-button');
  const audioElement = document.getElementById('audio-name');

  audioButton.addEventListener('click', function () {
    audioElement.currentTime = 0; // Reset to start
    audioElement.play();
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const containers = document.querySelectorAll('.container');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
        entry.target.classList.add('animated');
        entry.target.style.animationPlayState = 'running';
      }
    });
  }, { threshold: 0.1 });

  containers.forEach(container => {
    container.style.animationPlayState = 'paused';
    observer.observe(container);
  });
});
