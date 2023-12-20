const audio = document.getElementById('audioPlayer');
const currentTimeDisplay = document.getElementById('currentTime');
const durationDisplay = document.getElementById('duration');

function playPause() {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}

function stop() {
  audio.pause();
  audio.currentTime = 0;
}

function setVolume(volume) {
  audio.volume = volume;
}

function updateTimeDisplay() {
  const currentTime = formatTime(audio.currentTime);
  const duration = formatTime(audio.duration);

  currentTimeDisplay.textContent = currentTime;
  durationDisplay.textContent = duration;
}

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  const formattedTime = `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  return formattedTime;
}

audio.addEventListener('timeupdate', updateTimeDisplay);

audio.addEventListener('loadedmetadata', updateTimeDisplay);
