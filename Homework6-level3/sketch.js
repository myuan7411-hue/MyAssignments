// ===============================================
// ENCHANTED SPORES
// LEVEL 3 — ABSORB THE SMALLER
// ===============================================

let spores = [];
let stars = [];
let particles = [];
let rings = [];

let absorber = null;
let holding = false;

const SPORE_COUNT = 26;
const STAR_COUNT = 80;
const ABSORB_RANGE = 260;

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

  // 按住时开启吸收场
  if (holding && absorber && !absorber.dead) {
    drawAbsorbField(absorber);

    findSmallSpore(absorber);
  }

  // 粒子
  for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].update();

    particles[i].display();

    if (particles[i].life <= 0) {
      particles.splice(i, 1);
    }
  }

  // 能量环
  for (let i = rings.length - 1; i >= 0; i--) {
    rings[i].update();

    rings[i].display();

    if (rings[i].life <= 0) {
      rings.splice(i, 1);
    }
  }

  // 孢子
  for (let s of spores) {
    s.update();
    s.display();
  }

  // 删除吸收完的孢子
  for (let i = spores.length - 1; i >= 0; i--) {
    if (spores[i].dead) {
      if (absorber === spores[i]) {
        absorber = null;
        holding = false;
      }

      spores.splice(i, 1);
    }
  }

  // 自动补充
  if (spores.length < SPORE_COUNT && frameCount % 35 === 0) {
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
// FIND SPORE
// ===============================================

function getSporeAt(x, y) {
  for (let i = spores.length - 1; i >= 0; i--) {
    let s = spores[i];

    if (!s.absorbing && !s.dead && dist(x, y, s.x, s.y) < s.r) {
      return s;
    }
  }

  return null;
}

// ===============================================
// MOUSE
// ===============================================

function mousePressed() {
  absorber = getSporeAt(mouseX, mouseY);

  if (absorber) {
    holding = true;

    absorber.selected = true;
  }
}

function mouseReleased() {
  if (absorber) {
    absorber.selected = false;
  }

  absorber = null;

  holding = false;
}

// ===============================================
// FIND SMALLER SPORE
// ===============================================

function findSmallSpore(big) {
  // 一次先吸一个
  let busy = spores.some((s) => s.absorbing && s.target === big);

  if (busy) {
    return;
  }

  let nearest = null;

  let nearestDistance = ABSORB_RANGE;

  for (let s of spores) {
    if (s === big) continue;

    if (s.dead) continue;

    if (s.absorbing) continue;

    // Level 3 条件：
    // 必须明显比目标小
    if (s.r >= big.r - 5) {
      continue;
    }

    let d = dist(big.x, big.y, s.x, s.y);

    if (d < nearestDistance) {
      nearest = s;
      nearestDistance = d;
    }
  }

  if (nearest) {
    nearest.startAbsorb(big);
  }
}

// ===============================================
// ABSORB FIELD
// ===============================================

function drawAbsorbField(s) {
  let pulse = sin(frameCount * 0.06) * 8;

  noFill();

  stroke(s.col[0], s.col[1], s.col[2], 18);

  strokeWeight(1);

  circle(s.x, s.y, ABSORB_RANGE * 2 + pulse);

  stroke(255, 255, 255, 24);

  circle(s.x, s.y, s.r * 3.5 + pulse);

  noStroke();
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

    this.dead = false;

    this.selected = false;

    this.absorbing = false;

    this.target = null;

    this.absorbAngle = 0;

    this.absorbRadius = 0;

    this.trail = [];

    this.flash = 0;

    let palette = [
      [180, 220, 255],
      [255, 190, 225],
      [210, 200, 255],
      [170, 255, 235],
      [225, 225, 255],
    ];

    this.col = random(palette);
  }

  // ==========================================
  // START ABSORB
  // ==========================================

  startAbsorb(target) {
    this.absorbing = true;

    this.target = target;

    this.absorbRadius = dist(this.x, this.y, target.x, target.y);

    this.absorbAngle = atan2(
      this.y - target.y,

      this.x - target.x,
    );

    this.trail = [];
  }

  // ==========================================
  // UPDATE
  // ==========================================

  update() {
    // 被吸收
    if (this.absorbing && this.target && !this.target.dead) {
      // 螺旋旋转
      this.absorbAngle += 0.17;

      // 越来越靠近
      this.absorbRadius *= 0.94;

      this.x = this.target.x + cos(this.absorbAngle) * this.absorbRadius;

      this.y = this.target.y + sin(this.absorbAngle) * this.absorbRadius;

      // 保存螺旋尾迹
      this.trail.push({
        x: this.x,
        y: this.y,
      });

      if (this.trail.length > 18) {
        this.trail.shift();
      }

      // 缩小、透明
      this.r *= 0.978;

      this.alpha *= 0.965;

      // 小星尘
      if (frameCount % 3 === 0) {
        particles.push(new Particle(this.x, this.y, this.col, false));
      }

      // 吸收完成
      if (this.absorbRadius < 8 || this.r < 3 || this.alpha < 0.08) {
        // 大孢子轻微成长
        this.target.r = min(this.target.r + 1.5, 48);

        // 强光
        this.target.flash = 1;

        // 能量环
        rings.push(new Ring(this.target.x, this.target.y, this.col));

        // 星尘爆开
        for (let i = 0; i < 14; i++) {
          particles.push(
            new Particle(this.target.x, this.target.y, this.col, true),
          );
        }

        this.dead = true;
      }

      return;
    }

    // 正常漂浮
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

    // 吸收后的闪光恢复
    if (this.flash > 0.01) {
      this.flash *= 0.92;
    } else {
      this.flash = 0;
    }
  }

  // ==========================================
  // DISPLAY
  // ==========================================

  display() {
    // 被吸收中的轨迹
    if (this.absorbing && this.target) {
      noStroke();

      for (let i = 0; i < this.trail.length; i++) {
        let p = this.trail[i];

        let a = map(i, 0, this.trail.length, 4, 70);

        fill(this.col[0], this.col[1], this.col[2], a * this.alpha);

        circle(
          p.x,
          p.y,

          map(i, 0, this.trail.length, 2, this.r * 0.7),
        );
      }

      // 能量连接线
      stroke(this.col[0], this.col[1], this.col[2], 75 * this.alpha);

      strokeWeight(5);

      line(this.x, this.y, this.target.x, this.target.y);

      stroke(255, 255, 255, 65 * this.alpha);

      strokeWeight(1);

      line(this.x, this.y, this.target.x, this.target.y);

      noStroke();
    }

    // Level 1 同款本体
    let pulse = 1 + this.flash * 0.28;

    let visualR = this.r * pulse;

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

        visualR * 2.8 * i * 0.6,
      );
    }

    // 吸收成功后的亮光
    if (this.flash > 0) {
      fill(
        this.col[0],
        this.col[1],
        this.col[2],

        45 * this.flash,
      );

      circle(
        this.x,
        this.y,

        visualR * (3 + this.flash),
      );
    }

    // 白色核心
    fill(
      255,
      255,
      255,

      245 * this.alpha,
    );

    circle(this.x, this.y, visualR * 0.78);
  }
}

// ===============================================
// PARTICLE
// ===============================================

class Particle {
  constructor(x, y, col, burst) {
    this.x = x;
    this.y = y;

    this.col = col;

    let angle = random(TWO_PI);

    let speed = burst ? random(0.6, 2.5) : random(0.1, 0.7);

    this.vx = cos(angle) * speed;

    this.vy = sin(angle) * speed;

    this.life = random(25, 42);

    this.size = random(1.5, 4);
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;

    this.vx *= 0.96;
    this.vy *= 0.96;

    this.life--;
  }

  display() {
    fill(this.col[0], this.col[1], this.col[2], this.life * 5);

    circle(this.x, this.y, this.size);

    fill(255, 255, 255, this.life * 2);

    circle(this.x, this.y, this.size * 0.35);
  }
}

// ===============================================
// ENERGY RING
// ===============================================

class Ring {
  constructor(x, y, col) {
    this.x = x;
    this.y = y;

    this.col = col;

    this.r = 20;

    this.life = 35;
  }

  update() {
    this.r += 5;
    this.life--;
  }

  display() {
    noFill();

    stroke(this.col[0], this.col[1], this.col[2], this.life * 4);

    strokeWeight(2);

    circle(this.x, this.y, this.r);

    stroke(255, 255, 255, this.life * 1.5);

    strokeWeight(1);

    circle(this.x, this.y, this.r * 0.85);

    noStroke();
  }
}

// ===============================================
// TOUCH
// ===============================================

function touchStarted() {
  if (touches.length === 0) {
    return false;
  }

  absorber = getSporeAt(touches[0].x, touches[0].y);

  if (absorber) {
    holding = true;

    absorber.selected = true;
  }

  return false;
}

function touchEnded() {
  if (absorber) {
    absorber.selected = false;
  }

  absorber = null;

  holding = false;

  return false;
}

// ===============================================
// RESIZE
// ===============================================

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
