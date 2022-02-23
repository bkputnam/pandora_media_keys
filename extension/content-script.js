let audio = document.createElement('audio');
audio.src = 'https://storage.googleapis.com/media-session/sintel/snow-fight.mp3';
audio.play().then(() => {
  audio.pause();
});

navigator.mediaSession.setActionHandler('previoustrack', function() {
  document.querySelector('.SkipButton[class*="SkipBack"]').click();
});

navigator.mediaSession.setActionHandler('nexttrack', function() {
  // Sometimes only the SkipForward button will be present and sometimes
  // both SkipForward and SkipBackwards will be present. When it's just
  // one button it will look like:
  // button.SkipButton.Tuner__Control__Button.Tuner__Control__Skip__Button.TunerControl
  // When there are two buttons they will look like:
  // button.SkipButton.Tuner__Control__Button.Tuner__Control__SkipBack__Button.TunerControl
  // button.SkipButton.Tuner__Control__Button.Tuner__Control__SkipForward__Button.TunerControl
  //
  // Classes observed on pandora.com on 2022-02-23
  const skipKeys = document.querySelectorAll('.SkipButton');
  if (skipKeys.length === 1) {
    skipKeys[0].click();
  } else {
    [...skipKeys]
        .find((el) => el.matches('[class*="SkipForward"]'))
        .click();
  }
});

navigator.mediaSession.setActionHandler('play', function() {
  document.querySelector('.PlayButton').click();
});

navigator.mediaSession.setActionHandler('pause', function() {
  document.querySelector('.PlayButton').click();
});

console.log("Pandora media keys extension loaded");
