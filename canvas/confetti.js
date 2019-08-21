/* cuts all fractional digits. ~~42.453754 -> 42 */

(function(c) {
  let x = c.getContext('2d');
  let t1 = new Date();
  graffitiSet = [], shifts = [];

  var GRAFFITILIMIT = 1000;
  var GRAFFITISIZE = 8;
  var BOUNDARY = 500;

  function draw(t) {
    c.width |= 0;
    if (graffitiSet.length < GRAFFITILIMIT) {
      graffitiSet.push({
        x: ~~(Math.random() * BOUNDARY),
        y: ~~(Math.random() * BOUNDARY)
      });
      shifts.push({
        x: ~~(Math.random() * 10) - GRAFFITISIZE,
        y: ~~(Math.random() * 10) - GRAFFITISIZE
      });
    }
    for (let i = 0; i < graffitiSet.length; i += 1) {
      const graffiti = graffitiSet[i],
        delta = shifts[i];
      // x.fillStyle = `rgba(${~~(Math.sin(i)*255)},${~~(Math.cos(i)*255)},${~~(Math.tan(i)*255)},${Math.random()})`;
      x.fillStyle = `rgba(75, 176, 102)`;
      x.fillRect(graffiti.x, graffiti.y, GRAFFITISIZE, GRAFFITISIZE );
      graffiti.x = (graffiti.x + delta.x) % BOUNDARY;
      if (graffiti.x < 0) graffiti.x += BOUNDARY;
      graffiti.y = (graffiti.y + delta.y) % BOUNDARY;
      if (graffiti.y < 0) graffiti.y += BOUNDARY;
    }
  };

  function iterate() {
    var diff = (new Date()) - t1;
    draw();
    window.requestAnimationFrame(iterate);
  }
  iterate();
})(document.getElementById('cvs'));
