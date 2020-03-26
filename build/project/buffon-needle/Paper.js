class Paper {
  constructor(rowDist, pos, size) {
    this.rowDist = rowDist;
    this.property = {width: size.w, height: size.h, x: pos.x, y: pos.y};
    this.needles = [];
    this.numOfNeedle = 0;
    this.numOfIntersection = 0;
  }

  addNeedle() {
    const {scale} = Global;
    const needleActual = Global.needleLength * scale;
    const rowActual = this.rowDist * scale;
    const x0 = random(this.property.width - needleActual);
    const y0 = random(this.property.height - needleActual);
    const tetha = random(HALF_PI);
    const x1 = x0 + needleActual * cos(tetha);
    const y1 = y0 + needleActual * sin(tetha);
    const intersect = (y0 % rowActual + y1 - y0 >= rowActual);
    this.needles.push(new Needle(x0, y0, x1, y1, intersect));
    if (intersect) this.numOfIntersection++;
    this.numOfNeedle++;
  }

  update() {
    if (this.needles.length > Global.numOFMaxNeedleShow) {
      this.needles.shift();
    }
  }

  render() {
    const {width, height} = this.property
    push()
      translate(this.property.x, this.property.y);
      noStroke();
      fill(255, 250, 190);
      rect(0, 0, width, height);
      stroke(0);
      for (let i = 0; i <= height; i += this.rowDist * Global.scale)
        line(0, i, width, i);
      for (let i = 0; i < this.needles.length; i++) {
        let needle = this.needles[i];
        needle.render((i == this.needles.length - 1));
      }
    pop();
  }
}
