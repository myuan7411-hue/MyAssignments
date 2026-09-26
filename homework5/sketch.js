const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Composite = Matter.Composite;

let engine;

let capsules = [];

let tableTop;
let chairSeat;
let chairBack;
let floorBody;

let boxX, boxY;
let boxAngle = 0.28;

const capsuleColors = [
  ["#EF6A67", "#F8E9DF"],
  ["#F3B94F", "#F8E9DF"],
  ["#8DB8AE", "#F8E9DF"],
  ["#D986A5", "#F3D8E4"],
  ["#7398C6", "#E9EFF7"],
  ["#9BBF72", "#F0E7C5"],
  ["#E98858", "#F6C894"],
  ["#A998D4", "#E8DDF4"],
];

function setup() {
  createCanvas(windowWidth, windowHeight);

  engine = Engine.create();

  // 自然向下的重力
  engine.gravity.x = 0;
  engine.gravity.y = 1.05;

  // ---------------------------------
  // POSITION
  // ---------------------------------

  boxX = width * 0.37;
  boxY = height * 0.22;

  // ---------------------------------
  // FLOOR
  // ---------------------------------

  floorBody = Bodies.rectangle(width / 2, height - 30, width + 200, 50, {
    isStatic: true,
    friction: 0.15,
    restitution: 0.55,
  });

  // ---------------------------------
  // TABLE TOP
  // ---------------------------------

  tableTop = Bodies.rectangle(width * 0.23, height * 0.3, width * 0.38, 24, {
    isStatic: true,
    friction: 0.08,
    restitution: 0.55,
  });

  // ---------------------------------
  // CHAIR SEAT
  // ---------------------------------

  chairSeat = Bodies.rectangle(width * 0.61, height * 0.56, width * 0.25, 24, {
    isStatic: true,
    friction: 0.05,
    restitution: 0.72,
  });

  // 椅面稍微斜一点
  Body.setAngle(chairSeat, 0.035);

  // ---------------------------------
  // CHAIR BACK
  // ---------------------------------

  chairBack = Bodies.rectangle(width * 0.72, height * 0.45, 18, height * 0.23, {
    isStatic: true,
    friction: 0.04,
    restitution: 0.7,
  });

  Body.setAngle(chairBack, -0.1);

  // ---------------------------------
  // SIDE WALLS
  // ---------------------------------

  let leftWall = Bodies.rectangle(-30, height / 2, 60, height * 2, {
    isStatic: true,
  });

  let rightWall = Bodies.rectangle(width + 30, height / 2, 60, height * 2, {
    isStatic: true,
  });

  Composite.add(engine.world, [
    floorBody,
    tableTop,
    chairSeat,
    chairBack,
    leftWall,
    rightWall,
  ]);
}

function draw() {
  background("#F1EEE7");

  Engine.update(engine, 1000 / 60);

  // ---------------------------------
  // CAPSULES COME OUT GRADUALLY
  // ---------------------------------

  if (frameCount > 35 && frameCount < 315) {
    if (frameCount % 11 === 0) {
      createCapsule();
    }
  }

  // 家具先画
  drawTable();
  drawChair();
  drawMedicineBox();
  drawFloorLine();

  // 最后画胶囊
  for (let capsule of capsules) {
    drawCapsule(capsule);
  }
}

// =====================================================
// CREATE CAPSULE
// =====================================================

function createCapsule() {
  let w = random(58, 86);
  let h = random(23, 31);

  // ---------------------------------
  // 药盒开口的局部位置
  // ---------------------------------

  let localX = 100;
  let localY = 18;

  // 根据药盒倾斜角度算真正位置
  let spawnX = boxX + localX * cos(boxAngle) - localY * sin(boxAngle);

  let spawnY = boxY + localX * sin(boxAngle) + localY * cos(boxAngle);

  spawnX += random(-8, 8);
  spawnY += random(-5, 5);

  let body = Bodies.rectangle(spawnX, spawnY, w, h, {
    chamfer: {
      radius: h / 2,
    },

    restitution: random(0.82, 0.98),

    friction: random(0.015, 0.055),

    frictionAir: random(0.002, 0.006),

    density: random(0.0009, 0.0015),
  });

  // 随机初始角度
  Body.setAngle(body, boxAngle + random(-0.5, 0.5));

  // 让它从盒口自然往右下滚出去
  Body.setVelocity(body, {
    x: random(1.6, 3.2),
    y: random(0.5, 1.7),
  });

  // 自带一点旋转
  Body.setAngularVelocity(body, random(-0.13, 0.13));

  let palette = random(capsuleColors);

  capsules.push({
    body: body,
    w: w,
    h: h,
    c1: palette[0],
    c2: palette[1],
  });

  Composite.add(engine.world, body);
}

// =====================================================
// DRAW CAPSULE
// =====================================================

function drawCapsule(capsule) {
  let body = capsule.body;

  let w = capsule.w;
  let h = capsule.h;

  let r = h / 2;

  push();

  translate(body.position.x, body.position.y);

  rotate(body.angle);

  drawingContext.shadowBlur = 8;
  drawingContext.shadowColor = "rgba(60, 45, 35, 0.13)";

  // ---------------------------------
  // 整颗胶囊底色
  // ---------------------------------

  noStroke();

  fill(capsule.c1);

  rectMode(CENTER);

  rect(0, 0, w, h, h / 2);

  // ---------------------------------
  // 右半颗
  // ---------------------------------

  fill(capsule.c2);

  rectMode(CORNER);

  rect(0, -h / 2, w / 2 - r, h);

  circle(w / 2 - r, 0, h);

  // ---------------------------------
  // 中间接缝
  // ---------------------------------

  stroke(60, 50, 45, 70);

  strokeWeight(1);

  line(0, -h / 2 + 3, 0, h / 2 - 3);

  // ---------------------------------
  // 外轮廓
  // ---------------------------------

  noFill();

  stroke(55, 48, 42, 85);

  strokeWeight(1);

  rectMode(CENTER);

  rect(0, 0, w, h, h / 2);

  // 一点微弱高光
  stroke(255, 255, 255, 105);

  strokeWeight(1.2);

  line(-w * 0.3, -h * 0.22, -w * 0.08, -h * 0.22);

  drawingContext.shadowBlur = 0;

  pop();
}

// =====================================================
// DRAW TABLE
// =====================================================

function drawTable() {
  let tableY = height * 0.3;

  // ---------------------------------
  // 桌面
  // ---------------------------------

  noStroke();

  fill("#64594E");

  rectMode(CENTER);

  rect(width * 0.23, tableY, width * 0.38, 24, 3);

  // ---------------------------------
  // 桌腿
  // ---------------------------------

  fill("#74685C");

  rect(width * 0.09, tableY + height * 0.19, 15, height * 0.38, 3);

  rect(width * 0.35, tableY + height * 0.19, 15, height * 0.38, 3);
}

// =====================================================
// DRAW CHAIR
// =====================================================

function drawChair() {
  push();

  // ---------------------------------
  // 椅面
  // ---------------------------------

  translate(chairSeat.position.x, chairSeat.position.y);

  rotate(chairSeat.angle);

  noStroke();

  fill("#78958D");

  rectMode(CENTER);

  rect(0, 0, width * 0.25, 24, 4);

  pop();

  // ---------------------------------
  // 椅背
  // ---------------------------------

  push();

  translate(chairBack.position.x, chairBack.position.y);

  rotate(chairBack.angle);

  fill("#78958D");

  rect(0, 0, 18, height * 0.23, 6);

  pop();

  // ---------------------------------
  // 椅腿
  // ---------------------------------

  stroke("#667E78");

  strokeWeight(10);

  strokeCap(ROUND);

  let seatY = height * 0.56;

  line(width * 0.53, seatY + 15, width * 0.5, height - 55);

  line(width * 0.68, seatY + 15, width * 0.72, height - 55);

  noStroke();
}

// =====================================================
// DRAW MEDICINE BOX
// =====================================================

function drawMedicineBox() {
  push();

  translate(boxX, boxY);

  rotate(boxAngle);

  drawingContext.shadowBlur = 18;

  drawingContext.shadowColor = "rgba(70, 55, 42, 0.15)";

  // ---------------------------------
  // 后面的盒盖
  // ---------------------------------

  noStroke();

  fill("#DAD2C5");

  quad(-100, -40, -70, -67, 105, -67, 92, -39);

  // ---------------------------------
  // 主盒体
  // ---------------------------------

  fill("#FAF8F2");

  rectMode(CENTER);

  rect(0, 0, 200, 84, 4);

  // ---------------------------------
  // 包装图形
  // ---------------------------------

  fill("#E9635F");

  rect(-51, 0, 53, 84);

  fill("#F2BE4F");

  circle(20, 0, 33);

  fill("#80A89F");

  rect(62, -14, 42, 8, 5);

  rect(61, 2, 55, 6, 4);

  rect(55, 17, 43, 6, 4);

  // ---------------------------------
  // 开口
  // ---------------------------------

  fill("#F1EEE7");

  rect(99, 8, 18, 58);

  // 内部阴影
  fill(60, 50, 42, 32);

  rect(91, 8, 6, 56);

  drawingContext.shadowBlur = 0;

  pop();
}

// =====================================================
// FLOOR
// =====================================================

function drawFloorLine() {
  stroke("#C8C0B4");

  strokeWeight(1);

  line(0, height - 55, width, height - 55);
}

// =====================================================
// RESIZE
// =====================================================

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
