// ===============================================
// ENCHANTED SPORES
// LEVEL 1 — TAP TO VANISH
// ===============================================

let spores = [];
let sparkles = [];
let stars = [];

const SPORE_COUNT = 26;
const STAR_COUNT = 80;

// ===============================================
// SETUP
// ===============================================

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();

  for (let i = 0; i < SPORE_COUNT; i++) {
    spores.push(new Spore(random(width), random(height), random(18, 42)));
  }

  for (let i = 0; i < STAR_COUNT; i++) {
    stars.push({
      x: random(width),
      y: random(height),
      s: random(1, 2.5),
      a: random(80, 200),
      phase: random(TWO_PI),
    });
  }
}

// ===============================================
// DRAW
// ===============================================

function draw() {
  drawBackground();

  for (let s of spores) {
    s.move();
    s.display();
  }

  for (let i = sparkles.length - 1; i >= 0; i--) {
    sparkles[i].update();
    sparkles[i].display();

    if (sparkles[i].life <= 0) {
      sparkles.splice(i, 1);
    }
  }

  // 自动补充
  if (spores.length < SPORE_COUNT && frameCount % 30 === 0) {
    spores.push(new Spore(random(width), random(height), random(18, 42)));
  }
}

// ===============================================
// BACKGROUND
// ===============================================

function drawBackground() {
  background(3, 8, 48);

  noStroke();

  fill(70, 90, 180, 20);
  ellipse(width * 0.2, height * 0.25, 700, 420);

  fill(70, 90, 180, 18);
  ellipse(width * 0.75, height * 0.22, 760, 360);

  fill(70, 90, 180, 16);
  ellipse(width * 0.28, height * 0.75, 980, 360);

  fill(70, 90, 180, 14);
  ellipse(width * 0.82, height * 0.72, 900, 320);

  for (let st of stars) {
    let blink = sin(frameCount * 0.02 + st.phase) * 30;

    fill(255, st.a + blink);

    circle(st.x, st.y, st.s);
  }
}

// ===============================================
// DELETE
// ===============================================

function deleteSpore(x, y) {
  for (let i = spores.length - 1; i >= 0; i--) {
    let s = spores[i];

    let d = dist(x, y, s.x, s.y);

    if (d < s.r) {
      makeSparkles(s.x, s.y, s.col);

      spores.splice(i, 1);

      break;
    }
  }
}

function mousePressed() {
  deleteSpore(mouseX, mouseY);
}

function touchStarted() {
  if (touches.length > 0) {
    deleteSpore(touches[0].x, touches[0].y);
  }

  return false;
}

// ===============================================
// SPORE
// ===============================================

class Spore {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;

    this.vx = random(-0.35, 0.35);

    this.vy = random(-0.25, 0.25);

    this.seed = random(1000);

    let palette = [
      [180, 220, 255],
      [255, 190, 225],
      [210, 200, 255],
      [170, 255, 235],
      [225, 225, 255],
    ];

    this.col = random(palette);
  }

  move() {
    this.x += this.vx + sin(frameCount * 0.01 + this.seed) * 0.15;

    this.y += this.vy + cos(frameCount * 0.012 + this.seed) * 0.12;

    if (this.x < -60) {
      this.x = width + 60;
    }

    if (this.x > width + 60) {
      this.x = -60;
    }

    if (this.y < -60) {
      this.y = height + 60;
    }

    if (this.y > height + 60) {
      this.y = -60;
    }
  }

  display() {
    for (let i = 4; i > 0; i--) {
      fill(this.col[0], this.col[1], this.col[2], 16 / i);

      circle(this.x, this.y, this.r * 2.8 * i * 0.6);
    }

    fill(255, 255, 255, 245);

    circle(this.x, this.y, this.r * 0.78);
  }
}

// ===============================================
// SPARKLE
// ===============================================

class Sparkle {
  constructor(x, y, col) {
    this.x = x;
    this.y = y;

    this.vx = random(-2.2, 2.2);

    this.vy = random(-2.2, 2.2);

    this.life = 28;

    this.size = random(2, 5);

    this.col = col;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;

    this.vx *= 0.96;
    this.vy *= 0.96;

    this.life--;
  }

  display() {
    fill(this.col[0], this.col[1], this.col[2], this.life * 7);

    circle(this.x, this.y, this.size);
  }
}

function makeSparkles(x, y, col) {
  for (let i = 0; i < 12; i++) {
    sparkles.push(new Sparkle(x, y, col));
  }
}

// ===============================================
// RESIZE
// ===============================================

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
