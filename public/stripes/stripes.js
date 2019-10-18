class Stripes {

  static get inputProperties() {
    return [
      '--stripeColor',
      '--stripeGap',
      '--stripeWidth'
    ];
  }

  count = 0;
  stripeColor = '#4BB066';

  paint(ctx, geom, properties) {
    this.stripeColor = properties.get('--stripeColor');
    this.stripeGap = parseFloat(properties.get('--stripeGap').toString());
    this.stripeWidth = parseFloat(properties.get('--stripeWidth').toString());
    this.draw(ctx, geom);
  }

  drawStripe(context, startx, starty, endx, endy) {
    context.beginPath();
    context.strokeStyle = this.stripeColor;
    context.lineWidth = this.stripeWidth;
    // context.lineCap = 'round';
    context.moveTo(startx, starty);
    context.lineTo(endx, endy);
    context.stroke();
  }

  draw(ctx, geom) {

    var starty = 0;
    var endx = 0;
    var startx = 0;
    var endy = 0;

    var gap = this.stripeGap;

    do {
      starty = starty + gap;
      endx = endx + gap;
      this.drawStripe(ctx, startx, starty, endx, endy)
    } while (starty < geom.height && endx + gap < geom.width)

    if (geom.width > geom.height) {

      console.log('width > height')

      endx = geom.height;

      do {
        starty = geom.height;
        startx = startx + gap;
        endx = endx + gap;
        this.drawStripe(ctx, startx, starty, endx, endy)
      } while (endx + gap < geom.width)

      endx = geom.width
      endy = 0 - gap;
      starty = geom.height;

      do {
        startx = startx + gap;
        endy = endy + gap;
        this.drawStripe(ctx, startx, starty, endx, endy)
      } while (endy + gap < geom.height)
    }


    if (geom.height > geom.width) {

      endx = geom.width;
      endy = 0 - gap;
      startx = 0;
      starty = geom.width - gap;

      do {
        starty = starty + gap;
        endy = endy + gap;
        this.drawStripe(ctx, startx, starty, endx, endy)
      } while (starty + gap < geom.height)

      starty = geom.height;
      startx = 0 - gap;
      endx = geom.width;

      do {
        startx = startx + gap;
        endy = endy + gap;
        this.drawStripe(ctx, startx, starty, endx, endy)
      } while (startx + gap < geom.width )
    }
  }
}

// Register our class under a specific name
registerPaint('stripes', Stripes);
