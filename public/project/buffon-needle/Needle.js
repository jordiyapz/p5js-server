class Needle {
  constructor (x0, y0, x1, y1, intersect = false) {
    this.coords = {x0, y0, x1, y1};
    this.intersect = intersect;
  }

  render (flag) {
    const c = this.coords;
    const alpha = flag? 255:100;
    const weight = flag? 3:2;
    push();
    strokeWeight(weight);
    if (this.intersect) stroke(0, 200, 0, alpha);
    else stroke(100, alpha);
    line(c.x0, c.y0, c.x1, c.y1);
    pop();
  }
}