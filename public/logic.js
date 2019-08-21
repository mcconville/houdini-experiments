if (location.protocol === 'http:' && location.hostname !== 'localhost')
  location.protocol = 'https:';
if ('paintWorklet' in CSS) {
  CSS.paintWorklet.addModule('confetti.js');
} else {
  document.body.innerHTML = 'You need support for <a href="https://drafts.css-houdini.org/css-paint-api/">CSS Paint API</a> to view this demo :(';
}

var count = 0;

function iterate() {
  count++;
  var canvas = document.getElementById('canvas');
  canvas.style.setProperty('--movement', count);
    // canvas.style.setProperty('--confettiColor', 'rgba(20,20,20)');
  window.requestAnimationFrame(iterate);
}

function init() {
  iterate();
}
