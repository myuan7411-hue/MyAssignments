// ===============================================
// ENCHANTED SPORES
// LEVEL 2 — SWIPE TO DISSOLVE
// ===============================================

let spores = [];
let dusts = [];
let stars = [];
let trail = [];

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

  updateTrail();
  displayTrail();

  for (let s of spores) {
    s.update();
    s.display();
  }

  if (mouseIsPressed) {
    checkSwipe();
  }

  for (let i = spores.length - 1; i >= 0; i--) {
    if (spores[i].dead) {
      spores.splice(i, 1);
    }
  }

  for (let i = dusts.length - 1; i >= 0; i--) {
    dusts[i].update();
    dusts[i].display();

    if (dusts[i].life <= 0) {
      dusts.splice(i, 1);
    }
  }

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
// LONG TRAIL
// ===============================================

function updateTrail() {
  if (mouseIsPressed) {
    let speed = dist(mouseX, mouseY, pmouseX, pmouseY);

    if (speed > 1) {
      trail.push({
        x: mouseX,
        y: mouseY,

        alpha: 120,

        size: random(18, 32),

        phase: random(TWO_PI),
      });
    }
  }

  for (let i = trail.length - 1; i >= 0; i--) {
    trail[i].alpha -= 1.7;

    trail[i].size *= 0.995;

    if (trail[i].alpha <= 0) {
      trail.splice(i, 1);
    }
  }

  if (trail.length > 180) {
    trail.splice(0, trail.length - 180);
  }
}

// ===============================================
// DISPLAY TRAIL
// ===============================================

function displayTrail() {
  if (trail.length < 2) {
    return;
  }

  // 柔光
  noStroke();

  for (let i = 0; i < trail.length; i++) {
    let t = trail[i];

    let ratio = i / max(trail.length - 1, 1);

    let r = lerp(175, 220, ratio);

    let g = lerp(215, 185, ratio);

    fill(r, g, 255, t.alpha * 0.06);

    circle(t.x, t.y, t.size * 3.6);

    fill(r, g, 255, t.alpha * 0.11);

    circle(t.x, t.y, t.size * 2);
  }

  // 光带
  for (let i = 1; i < trail.length; i++) {
    let a = trail[i - 1];
    let b = trail[i];

    let ratio = i / trail.length;

    let r = lerp(175, 225, ratio);

    let g = lerp(220, 190, ratio);

    stroke(r, g, 255, b.alpha * 0.1);

    strokeWeight(16);

    line(a.x, a.y, b.x, b.y);

    stroke(r, g, 255, b.alpha * 0.2);

    strokeWeight(7);

    line(a.x, a.y, b.x, b.y);

    stroke(255, 255, 255, b.alpha * 0.34);

    strokeWeight(2);

    line(a.x, a.y, b.x, b.y);
  }

  noStroke();

  // 尾迹星点
  for (let i = 0; i < trail.length; i += 4) {
    let t = trail[i];

    let blink = map(sin(frameCount * 0.08 + t.phase), -1, 1, 0.25, 1);

    fill(255, 255, 255, t.alpha * 0.5 * blink);

    circle(
      t.x + sin(t.phase) * 7,

      t.y + cos(t.phase) * 7,

      2,
    );
  }
}

// ===============================================
// SWIPE
// ===============================================

function checkSwipe() {
  let speed = dist(mouseX, mouseY, pmouseX, pmouseY);

  if (speed < 2) {
    return;
  }

  for (let s of spores) {
    if (s.dissolving) {
      continue;
    }

    let d = dist(mouseX, mouseY, s.x, s.y);

    if (d < s.r + 28) {
      s.startDissolve();
    }
  }
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

    this.alpha = 1;

    this.dissolving = false;

    this.dead = false;

    let palette = [
      [180, 220, 255],
      [255, 190, 225],
      [210, 200, 255],
      [170, 255, 235],
      [225, 225, 255],
    ];

    this.col = random(palette);
  }

  startDissolve() {
    this.dissolving = true;
  }

  update() {
    if (this.dissolving) {
      this.r *= 0.96;

      this.alpha *= 0.91;

      if (frameCount % 2 === 0) {
        dusts.push(
          new Dust(
            this.x + random(-7, 7),

            this.y + random(-7, 7),

            this.col,
          ),
        );
      }

      if (this.r < 3 || this.alpha < 0.05) {
        this.dead = true;
      }

      return;
    }

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
      fill(
        this.col[0],
        this.col[1],
        this.col[2],

        (16 / i) * this.alpha,
      );

      circle(
        this.x,
        this.y,

        this.r * 2.8 * i * 0.6,
      );
    }

    fill(
      255,
      255,
      255,

      245 * this.alpha,
    );

    circle(this.x, this.y, this.r * 0.78);
  }
}

// ===============================================
// DUST
// ===============================================

class Dust {
  constructor(x, y, col) {
    this.x = x;
    this.y = y;

    this.vx = random(-1.1, 1.1);

    this.vy = random(-1.1, 1.1);

    this.life = random(28, 38);

    this.size = random(2, 4.5);

    this.col = col;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;

    this.vx *= 0.97;
    this.vy *= 0.97;

    this.life--;

    this.size *= 0.98;
  }

  display() {
    fill(this.col[0], this.col[1], this.col[2], this.life * 5);

    circle(this.x, this.y, this.size);

    fill(255, 255, 255, this.life * 2);

    circle(this.x, this.y, this.size * 0.35);
  }
}

// ===============================================
// TOUCH
// ===============================================

function touchMoved() {
  if (touches.length === 0) {
    return false;
  }

  let x = touches[0].x;

  let y = touches[0].y;

  trail.push({
    x: x,
    y: y,

    alpha: 120,

    size: random(18, 32),

    phase: random(TWO_PI),
  });

  for (let s of spores) {
    if (s.dissolving) {
      continue;
    }

    let d = dist(x, y, s.x, s.y);

    if (d < s.r + 28) {
      s.startDissolve();
    }
  }

  return false;
}

// ===============================================
// RESIZE
// ===============================================

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
