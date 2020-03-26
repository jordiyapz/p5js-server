let paper;

function setup() {
  let cwid = 1000, chei;
  if (windowWidth < 640) cwid = windowWidth * .91 ;
  else if (windowWidth < 820) cwid = 600;
  else if (windowWidth < 992) cwid = 800;
  const cvs = createCanvas(cwid, 450);
  cvs.parent('sketch-container');
  const offset = 49;
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
  text('PI est: ' + pi_est, 200, 24);
  textSize(18);
  text('N', 10, 15);
  text('Intersect', 10, 35);
  text(':', 90, 15);
  text(':', 90, 35);
  textAlign(RIGHT);
  text(numOfNeedle, 180, 15);
  text(numOfIntersection, 180, 35)

  for (let i = 0; i < Global.batchSize; i++) {
    paper.addNeedle();
    paper.update();
  }
}