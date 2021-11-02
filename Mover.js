class Mover {
  constructor(x, y, m) {
    this.pos = createVector(x, y);
    this.vel = createVector();
    this.acc = createVector();
    this.m = m;

  }

  applyForce(aForce) {
    let f = p5.Vector.div(aForce, this.m);
    this.acc.add(f);
  }

  attractTo(aPos) {
    let f = p5.Vector.sub(aPos,this.pos);
    f.limit(2);
    this.applyForce(f);
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
  }

  show() {
    stroke(0,0,200);
    noFill();
    circle(this.pos.x, this.pos.y, this.m);
  }

  drawOn(c) {
    c.fill(0, 0, 200, 20);
    c.noStroke();
    c.circle(this.pos.x, this.pos.y, this.m);
  }
}
