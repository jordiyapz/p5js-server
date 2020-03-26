let paper;

function setup() {
  const cvs = createCanvas(800, 600);
  cvs.parent('sketch-container');
  const offset = 40;
  paper = new Paper(Global.rowDist, {x: 0, y: offset}, {w: width, h: height - offset});
  frameRate(Global.fps);
}

function draw() {
  background(255);
  paper.render();

  const {needleLength, rowDist} = Global;
  const {numOfNeedle, numOfIntersection} = paper;
  textAlign(LEFT);
  textSize(26);
  const pi_est = 2*needleLength*numOfNeedle/(rowDist * numOfIntersection);
  text('PI estimation: ' + pi_est, 350, 24);
  textSize(18);
  text('N', 10, 15);
  text('Intersect', 10, 35);
  text(':', 90, 15);
  text(':', 90, 35);
  textAlign(RIGHT);
  text(numOfNeedle, 180, 15);
  text(numOfIntersection, 180, 35)

  for (let i = 0; i < Global.frameSkip; i++) {
    paper.addNeedle();
    paper.update();
  }
}