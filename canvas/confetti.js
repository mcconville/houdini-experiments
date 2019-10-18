/* cuts all fractional digits. ~~42.453754 -> 42 */

(function(c) {
  let x = c.getContext('2d');
  let t1 = new Date();
  confettiSet = [], shifts = [];

  var CONFETTILIMIT = 1000;
  var CONFETTISIZE = 8;
  var BOUNDARY = 500;

  function draw(t) {
    c.width |= 0;
    if (confettiSet.length < CONFETTILIMIT) {
      confettiSet.push({
        x: ~~(Math.random() * BOUNDARY),
        y: ~~(Math.random() * BOUNDARY)
      });
      shifts.push({
        x: ~~(Math.random() * 10) - CONFETTISIZE,
        y: ~~(Math.random() * 10) - CONFETTISIZE
      });
    }
    for (let i = 0; i < confettiSet.length; i += 1) {
      const confetti = confettiSet[i],
        delta = shifts[i];
      // x.fillStyle = `rgba(${~~(Math.sin(i)*255)},${~~(Math.cos(i)*255)},${~~(Math.tan(i)*255)},${Math.random()})`;
      x.fillStyle = `rgba(75, 176, 102)`;
      x.fillRect(confetti.x, confetti.y, CONFETTISIZE, CONFETTISIZE );
      confetti.x = (confetti.x + delta.x) % BOUNDARY;
      if (confetti.x < 0) confetti.x += BOUNDARY;
      confetti.y = (confetti.y + delta.y) % BOUNDARY;
      if (confetti.y < 0) confetti.y += BOUNDARY;
    }
  };

  function iterate() {
    var diff = (new Date()) - t1;
    draw();
    window.requestAnimationFrame(iterate);
  }
  iterate();
})(document.getElementById('cvs'));
