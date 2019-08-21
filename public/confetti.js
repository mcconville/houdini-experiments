class ConfettiPainter {

  static get inputProperties() {
    return [
      '--confettiColor',
      '--confettiSize',
      '--confettiLimit',
      '--movement'
    ];
  }

  count = 0;
  confettiColor = '#4BB066';
  confettiLimit = 1000;
  confetti = [];
  shifts = [];

  paint(ctx, geom, properties) {

    this.t1 = new Date();

    this.count = properties.get('--count');

    var limit = parseFloat(properties.get('--confettiLimit').toString());
    var size = parseFloat(properties.get('--confettiSize').toString());

    this.confettiColor = properties.get('--confettiColor');
    this.confettiLimit = limit;
    this.confettiSize = size;
    this.BOUNDARY = 500;

    this.draw(ctx);
  }

  draw(ctx){

    if (this.confetti.length < this.confettiLimit) {
      this.confetti.push({
        x: ~~(Math.random() * this.BOUNDARY),
        y: ~~(Math.random() * this.BOUNDARY)
      });

      this.shifts.push({
        x: ~~(Math.random() * 10) - this.confettiSize,
        y: ~~(Math.random() * 10) - this.confettiSize
      });
    }

    for (let i = 0; i < this.confetti.length; i += 1) {
      var confetto = this.confetti[i];

      // ctx.fillStyle = `rgba(${~~(Math.sin(i)*255)},${~~(Math.cos(i)*255)},${~~(Math.tan(i)*255)},${Math.random()})`;
      ctx.fillStyle = this.confettiColor;
      ctx.fillRect(confetto.x, confetto.y, this.confettiSize, this.confettiSize );

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
