// document.getElementById('canvas')


class ConfettiPainter {

  static get inputProperties() {
    return [
      '--limit',
      '--color',
      '--confettiSize',
      '--movement'
    ];
  }

  count = 0;
  confetti = [];
  shifts = [];

  paint(ctx, geom, properties) {

    this.t1 = new Date();

    this.confettiSet = properties.get('--confetti');
    this.count = properties.get('--count');

    this.t1 = new Date();

    this.CONFETTILIMIT = 1000;
    this.CONFETTISIZE = 8;
    this.BOUNDARY = 500;

      var diff = (new Date()) - this.t1;

    this.draw(ctx);
  }

  draw(ctx){

    if (this.confetti.length < this.CONFETTILIMIT) {
      this.confetti.push({
        x: ~~(Math.random() * this.BOUNDARY),
        y: ~~(Math.random() * this.BOUNDARY)
      });

      this.shifts.push({
        x: ~~(Math.random() * 10) - this.CONFETTISIZE,
        y: ~~(Math.random() * 10) - this.CONFETTISIZE
      });
    }

    for (let i = 0; i < this.confetti.length; i += 1) {
      var confetto = this.confetti[i];

      // ctx.fillStyle = `rgba(${~~(Math.sin(i)*255)},${~~(Math.cos(i)*255)},${~~(Math.tan(i)*255)},${Math.random()})`;
      ctx.fillStyle = `rgba(75, 176, 102)`;
      ctx.fillRect(confetto.x, confetto.y, this.CONFETTISIZE, this.CONFETTISIZE );

      var delta = this.shifts[i];
      confetto.x = (confetto.x + delta.x) % this.BOUNDARY;
      if (confetto.x < 0) confetto.x += this.BOUNDARY;
      confetto.y = (confetto.y + delta.y) % this.BOUNDARY;
      if (confetto.y < 0) confetto.y += this.BOUNDARY;
    }
  }
}

// Register our class under a specific name
registerPaint('confettiarea', ConfettiPainter);
