let audio = document.createElement('audio');
audio.src = 'https://storage.googleapis.com/media-session/sintel/snow-fight.mp3';
audio.play().then(() => {
  audio.pause();
});

navigator.mediaSession.setActionHandler('previoustrack', function() {
  document.querySelector('.SkipButton[class*="SkipBack"]').click();
});

navigator.mediaSession.setActionHandler('nexttrack', function() {
  document.querySelector('.SkipButton[class*="SkipForward"]').click();
});

navigator.mediaSession.setActionHandler('play', async function() {
  document.querySelector('.PlayButton').click();
});

navigator.mediaSession.setActionHandler('pause', function() {
  document.querySelector('.PlayButton').click();
});

console.log("Pandora media keys extension loaded");
