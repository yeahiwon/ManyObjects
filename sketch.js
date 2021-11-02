let m, m2;
let movers = [];
let canvas;

function setup() {
  createCanvas(400, 400);
  canvas = createGraphics(400, 400);
  m = new Mover(50, 50, 10);
  m2 = new Mover(300, 300, 50);

  for (let i=0; i<10; i++) {
    let mover = new Mover(random(400),random(400),random(5,50))
    movers.push(mover);
  }
}

function draw() {
  background(220);
  image(canvas, 0, 0);
  // for (let i=0; (i < movers.length; i++) {
  //   let mover = movers[i];
  //   mover.update();
  //   mover.show();
  // }

  for (let mover of movers) {
    mover.update();
    mover.show();
    mover.drawOn(canvas);
  }

  if (mouseIsPressed) {
    //make attract to mouse position
   let mousePos = createVector(mouseX,mouseY);

   for (let mover of movers) {
     mover.attractTo(mousePos);
   }
  }
}
