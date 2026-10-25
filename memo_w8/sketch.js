const keyOf = () => "ideaHabitat.v5." + mode,
  DAY = 864e5,
  N = 22,
  HUES = [175, 200, 150, 48, 28, 350];

const L = {
  en: {
    title: "MEMO · Interactive Design (2) Midterm Project",
    mMemo: "Memo",
    mDemo: "Demo",
    reset: "Reset demo",
    search_ph: "Search your memos",
    search_al: "Search",
    undo: "Undo",
    newest: "Newest first",
    oldest: "Oldest first",
    ff_off: "Fast-forward: off",
    ff_on: "Fast-forward: on",
    all: "All",
    idea: "Ideas",
    todo: "To-do",
    chore: "Small",
    arch: "Archive",
    s_idea: "Idea",
    s_todo: "To-do",
    s_chore: "Small",
    help_title: "How to play",
    help_body:
      "Pour: type in the box below, pick a type and a color, then press Pour.<br>Tap: edit the text and see the exact time.<br>Long-press: mark as important, and a glowing light bulb appears.<br>Double-tap: mark as done, and a spoon is stuck in.<br>Hand handle on the right (or press and hold a jelly for a moment, then drag): drag a jelly onto Ideas, To-do or Small to change its category, onto Archive to put it in the fridge, or into the Trash bag to throw it away.<br>Bite: press the button, then tap a jelly to take a bite. A to-do is done after 4 bites.<br>Two-finger pinch on a jelly: crush it. Tap the puddle within 25 s to restore it.<br>Drag the background to scroll. Trackpad: two-finger swipe scrolls, pinch zooms. Undo is at the top.<br>Fast-forward (demo only): days pass in seconds. To-dos melt in 3 days, small stuff in 1.",
    sort_top: "Newest on top",
    sort_bot: "Newest at bottom",
    sort_al: "Sort",
    bag: "Trash",
    no_match: "No matches",
    got_it: "Got it",
    content_al: "Content",
    type_al: "Type",
    imp_on: "Mark important (glow)",
    imp_off: "Unmark important",
    done_on: "Mark done",
    done_off: "Unmark done",
    arch_on: "Archive",
    arch_off: "Take out of fridge",
    crush: "Throw in the trash bag",
    close: "Close",
    new_ph: "Pour a thought in…",
    new_al: "New memo",
    pour: "Pour",
    bite: "Take a bite",
    biting: "Biting…",
    restore: "Tap to restore",
    color: "Color",
    created: "Created",
    last: "Last touched",
    progress: "Progress",
    used: "Used {n}×",
    done_tag: "Done",
    imp_tag: "Important",
    d1: "Mask × tree root × mutation",
    d2: "Interaction design midterm plan",
    d3: "Rethink thesis direction",
    d4: "Buy milk",
    d5: "Reply to email",
  },
  zh: {
    title: "MEMO · Interactive Design (2) Midterm Project",
    mMemo: "备忘录",
    mDemo: "演示",
    reset: "重置示例",
    search_ph: "搜索备忘录",
    search_al: "搜索",
    undo: "撤销",
    newest: "新的在上",
    oldest: "旧的在上",
    ff_off: "快进：关",
    ff_on: "快进：开",
    all: "全部",
    idea: "灵感",
    todo: "待办",
    chore: "琐碎",
    arch: "归档",
    s_idea: "灵感",
    s_todo: "待办",
    s_chore: "琐碎",
    help_title: "怎么玩",
    help_body:
      "倒进去：在下面的输入框写内容，选类型和颜色，再点“倒进去”。<br>点一下：编辑文字，看精确时间。<br>长按：标记为重要，出现一个发光的灯泡。<br>双击：标记为已办，插上一把勺子。<br>右边的小手，或者先按住果冻一小会儿再拖动：拖到“灵感 / 待办 / 琐碎”可以改分类，拖到“归档”放进冰箱，拖进“垃圾袋”就是扔掉。<br>吃一口：按下按钮后点果冻缺一口，待办吃满 4 口算做完。<br>双指捏住一块果冻：捏碎，25 秒内点那一滩可捡回。<br>拖动背景可以滚动。触控板双指滑动滚动，双指捏合缩放，顶部“撤销”可退回。<br>快进（仅演示）：几天的变化几秒看完，待办 3 天化，琐碎 1 天化。",
    sort_top: "新的在上",
    sort_bot: "新的在下",
    sort_al: "排序",
    bag: "垃圾袋",
    no_match: "没有找到",
    got_it: "知道了",
    content_al: "内容",
    type_al: "类型",
    imp_on: "设为重要（发光）",
    imp_off: "取消重要",
    done_on: "标记已办",
    done_off: "取消已办",
    arch_on: "归档",
    arch_off: "从冰箱拿出来",
    crush: "扔进垃圾袋",
    close: "收起",
    new_ph: "倒进模具，凝成果冻",
    new_al: "新内容",
    pour: "倒进去",
    bite: "吃一口",
    biting: "吃中…",
    restore: "点一下捡回来",
    color: "颜色",
    created: "记下",
    last: "上次碰",
    progress: "进度",
    used: "用过 {n} 次",
    done_tag: "已办",
    imp_tag: "重要",
    d1: "面具 × 树根 × 变异",
    d2: "交互设计期中企划",
    d3: "毕设方向再想想",
    d4: "买牛奶",
    d5: "回邮件",
  },
  ko: {
    title: "MEMO · Interactive Design (2) Midterm Project",
    mMemo: "메모",
    mDemo: "데모",
    reset: "데모 초기화",
    search_ph: "메모 검색",
    search_al: "검색",
    undo: "되돌리기",
    newest: "최신순",
    oldest: "오래된순",
    ff_off: "빨리감기: 끔",
    ff_on: "빨리감기: 켬",
    all: "전체",
    idea: "아이디어",
    todo: "할 일",
    chore: "소소한 일",
    arch: "보관",
    s_idea: "아이디어",
    s_todo: "할 일",
    s_chore: "소소한 일",
    help_title: "사용법",
    help_body:
      "붓기: 아래 입력창에 쓰고 종류와 색을 고른 뒤 붓기를 눌러요.<br>한 번 누르기: 글을 고치고 정확한 시간을 봐요.<br>길게 누르기: 중요 표시, 빛나는 전구가 나타나요.<br>두 번 누르기: 완료 표시, 숟가락이 꽂혀요.<br>오른쪽 손 모양(또는 젤리를 잠깐 꾹 눌렀다가 끌기): 아이디어/할 일/소소한 일 위로 끌면 분류가 바뀌고, 보관 위로 끌면 냉장고에 들어가고, 쓰레기봉투에 넣으면 버려져요.<br>한 입 먹기: 버튼을 누른 뒤 젤리를 눌러 한 입 베어 물어요. 할 일은 4입이면 완료예요.<br>두 손가락으로 젤리를 오므리면 으깨져요. 25초 안에 웅덩이를 누르면 되살려요.<br>배경을 끌면 스크롤돼요. 트랙패드는 두 손가락으로 스크롤, 오므려서 확대/축소해요. 위쪽 되돌리기로 취소할 수 있어요.<br>빨리감기(데모 전용): 며칠의 변화를 몇 초에 봐요. 할 일은 3일, 소소한 일은 1일이면 녹아요.",
    sort_top: "최신이 위",
    sort_bot: "최신이 아래",
    sort_al: "정렬",
    bag: "쓰레기봉투",
    no_match: "결과 없음",
    got_it: "알겠어요",
    content_al: "내용",
    type_al: "종류",
    imp_on: "중요 표시 (빛남)",
    imp_off: "중요 해제",
    done_on: "완료 표시",
    done_off: "완료 해제",
    arch_on: "보관",
    arch_off: "냉장고에서 꺼내기",
    crush: "쓰레기봉투에 넣기",
    close: "닫기",
    new_ph: "생각을 부어 넣어요…",
    new_al: "새 메모",
    pour: "붓기",
    bite: "한 입 먹기",
    biting: "먹는 중…",
    restore: "눌러서 되살리기",
    color: "색상",
    created: "기록",
    last: "마지막 터치",
    progress: "진행",
    used: "{n}번 사용",
    done_tag: "완료",
    imp_tag: "중요",
    d1: "가면 × 나무뿌리 × 돌연변이",
    d2: "인터랙티브 디자인 중간과제 기획",
    d3: "졸업작품 방향 다시 생각하기",
    d4: "우유 사기",
    d5: "이메일 답장하기",
  },
};

let lang = "en";

const tr = (k) => (L[lang] && L[lang][k]) || L.en[k] || k;

function setOrd() {
  const o = $("ord");
  o.innerHTML = "";
  o.add(new Option(tr("sort_top"), "top"));
  o.add(new Option(tr("sort_bot"), "bot"));
  o.value = newTop ? "top" : "bot";
}

function setEat() {
  $("eat").textContent = tr(eat ? "biting" : "bite");
}

function setSpd() {
  $("spd").textContent = tr(mul === 1 ? "ff_off" : "ff_on");
}

function applyLang() {
  document.documentElement.lang = lang;
  document.title = tr("title");

  document
    .querySelectorAll("[data-i18n]")
    .forEach((e) => (e.textContent = tr(e.dataset.i18n)));

  document
    .querySelectorAll("[data-i18nh]")
    .forEach((e) => (e.innerHTML = tr(e.dataset.i18nh)));

  document
    .querySelectorAll("[data-ph]")
    .forEach((e) => (e.placeholder = tr(e.dataset.ph)));

  document
    .querySelectorAll("[data-al]")
    .forEach((e) => e.setAttribute("aria-label", tr(e.dataset.al)));

  for (const id of ["sp", "psp"]) {
    const v = $(id).value;
    $(id).innerHTML = "";
    for (const k in SP) {
      $(id).add(new Option(tr("s_" + k), k));
    }
    if (v) $(id).value = v;
  }

  [...$("sw").children].forEach((b, i) =>
    b.setAttribute("aria-label", tr("color") + " " + (i + 1)),
  );

  setOrd();
  setEat();
  setSpd();

  if (open) refreshP();

  [...$("langs").children].forEach((b) =>
    b.setAttribute("aria-pressed", b.dataset.l === lang),
  );
}

function setLang(l) {
  lang = l;
  try {
    storeItem("ideaHabitat.lang", l);
  } catch (e) {}
  $("lang").classList.remove("on");
  applyLang();
}

const SP = {
  idea: { n: "Idea", e: 2.8, fs: 15, pad: 14 },
  todo: { n: "To-do", e: 4.5, fs: 15, pad: 12 },
  chore: { n: "Small", e: 3, fs: 12, pad: 8 },
};

let mode = "real",
  newTop = true,
  items = [],
  parts = [],
  ptrs = new Map(),
  mul = 1,
  open = null,
  cam = { x: 0, y: 60, z: 1 },
  filt = "all",
  eat = false,
  pin = null,
  pd0 = 0,
  selH = HUES[0],
  undo = [],
  foc = null,
  lastQ = "",
  vs = new Set();

const $ = (id) => document.getElementById(id);
const pz = (n) => String(n).padStart(2, "0");

const fmt = (ms) => {
  const d = new Date(ms);
  return (
    d.getFullYear() +
    "." +
    pz(d.getMonth() + 1) +
    "." +
    pz(d.getDate()) +
    " " +
    pz(d.getHours()) +
    ":" +
    pz(d.getMinutes()) +
    ":" +
    pz(d.getSeconds())
  );
};

const toW = (x, y) => ({
  x: (x - cam.x) / cam.z,
  y: (y - cam.y) / cam.z,
});

const adiff = (a, b) => abs(atan2(sin(a - b), cos(a - b)));

const ser = (i) => ({
  t: i.t,
  sp: i.sp,
  h: i.h,
  spoon: i.spoon,
  bulb: i.bulb,
  bites: i.bites,
  arch: i.arch,
  c: i.c,
  lt: i.lt,
  ag: i.ag,
});

function store() {
  try {
    storeItem(keyOf(), {
      sa: Date.now(),
      items: items.filter((i) => !i.dead).map(ser),
    });
  } catch (e) {}
}

function pushU() {
  undo.push(JSON.stringify(items.filter((i) => !i.dead).map(ser)));
  if (undo.length > 30) undo.shift();
}

function doUndo() {
  const s = undo.pop();
  if (!s) return;
  items = JSON.parse(s).map((o) => new J({ ...o, falling: false }));
  store();
}

class J {
  constructor(o) {
    Object.assign(
      this,
      {
        t: "",
        sp: "idea",
        h: HUES[0],
        spoon: false,
        bulb: false,
        bites: [],
        arch: false,
        c: Date.now(),
        lt: Date.now(),
        ag: 0,
        falling: true,
      },
      o,
    );

    const d = new Date(this.c);

    this.ds =
      d.getFullYear() + "." + pz(d.getMonth() + 1) + "." + pz(d.getDate());
    this.tm =
      pz(d.getHours()) + ":" + pz(d.getMinutes()) + ":" + pz(d.getSeconds());

    Object.assign(this, {
      x: 0,
      y: 0,
      tx: 0,
      ty: 0,
      vx: 0,
      vy: 0,
      sq: 0,
      sv: 0,
      pulse: 0,
      dead: 0,
      placed: false,
      tapT: 0,
      seed: random(500),
      pts: null,
    });

    this.layout();
  }

  get p() {
    return this.spoon ? 1 : min(1, this.bites.length / 4);
  }

  get m() {
    return this.sp === "idea"
      ? 0
      : this.ag / (this.sp === "chore" ? DAY : 3 * DAY);
  }

  layout() {
    const p = SP[this.sp];

    const mw =
      this.sp === "chore"
        ? 90
        : this.sp === "todo"
          ? 140
          : constrain(60 + sqrt(this.t.length) * 20, 100, 170);

    textSize(p.fs);

    let ls = [],
      cur = "";

    for (const tk of this.t.match(
      /\n|[^\s\u3000-\u9fff\uac00-\ud7af]+|\s|[\u3000-\u9fff\uac00-\ud7af]/g,
    ) || []) {
      if (tk === "\n") {
        ls.push(cur);
        cur = "";
        continue;
      }

      if (textWidth(cur + tk) > mw && cur.trim()) {
        ls.push(cur.trimEnd());
        cur = tk.trim() ? tk : "";
      } else {
        cur += tk;
      }
    }

    ls.push(cur.trimEnd());

    this.ls = ls;
    this.lh = p.fs * 1.35;

    const tw = max(...ls.map((l) => textWidth(l)), 60);
    const th = ls.length * this.lh + (this.sp === "idea" ? 44 : 22);
    const k = pow(2, 1 / p.e);

    this.hw = (tw / 2 + p.pad) * k;
    this.hh = (th / 2 + p.pad) * k;

    this.base = [];

    for (let i = 0; i < N; i++) {
      const a = (TWO_PI * i) / N;
      const c = cos(a),
        s = sin(a);

      const by = this.hh * Math.sign(s) * pow(abs(s), 2 / p.e);
      const t = (by / this.hh + 1) / 2;

      this.base.push({
        a,
        x:
          this.hw *
          Math.sign(c) *
          pow(abs(c), 2 / p.e) *
          (this.sp === "todo" ? 1 - 0.2 * t : 0.8 + 0.2 * t),
        y: by,
      });
    }

    if (!this.pts) {
      this.pts = this.base.map(() => ({
        x: 0,
        y: 0,
        vx: 0,
        vy: 0,
      }));
    }
  }

  kick(s) {
    this.pts.forEach((p) => {
      p.vx += random(-s, s);
      p.vy += random(-s, s);
    });
  }

  hop() {
    this.vy = -9;
    this.falling = true;
  }

  update(dt) {
    if (this.dead) return;

    if (!this.arch && !(this.spoon && this.sp !== "idea")) {
      this.ag += dt * mul;
    }

    if (this.hold) {
      const w = toW(this.hold.x, this.hold.y);
      this.x += (w.x - this.x) * 0.35;
      this.y += (w.y - this.y) * 0.35;
      this.vx = 0;
      this.vy = 0;
      this.falling = false;
    } else {
      this.vx += (this.tx - this.x) * 0.12;
      this.vx *= 0.78;
      this.x += this.vx;

      if (this.falling) {
        this.vy += 1.1;
        this.y += this.vy;

        if (this.y >= this.ty && this.vy > 0) {
          this.y = this.ty;

          if (this.vy < 3) {
            this.falling = false;
            this.vy = 0;
          } else {
            this.sq = min(0.45, this.vy * 0.04);
            this.sv = 0;
            this.vy *= -0.45;
          }
        }
      } else {
        this.vy += (this.ty - this.y) * 0.1;
        this.vy *= 0.82;
        this.y += this.vy;
      }
    }

    this.sv += (0 - this.sq) * 0.2;
    this.sv *= 0.78;
    this.sq += this.sv;

    const m = min(this.m, 1);
    const str = min(0.25, abs(this.vy) * 0.015);
    const sx = 1 + 0.35 * m + this.sq * 0.7 - str * 0.4;
    const sy = 1 - 0.55 * m - this.sq * 0.7 + str;

    this.base.forEach((b, i) => {
      let f = 1;

      for (const a of this.bites) {
        f *= 1 - 0.22 * exp(-pow(adiff(b.a, a) / 0.5, 2));
      }

      f = max(f, 0.55);

      const p = this.pts[i];
      const tx = this.x + b.x * f * sx;
      const ty = this.y + b.y * f * sy + this.hh * (1 - sy) * 0.55;

      p.vx += (tx - p.x) * 0.2;
      p.vy += (ty - p.y) * 0.2;

      p.vx *= 0.8;
      p.vy *= 0.8;
      p.x += p.vx;
      p.y += p.vy;
    });

    const P = this.pts;

    for (let i = 0; i < N; i++) {
      const a = P[(i + N - 1) % N];
      const b = P[(i + 1) % N];

      P[i].x += ((a.x + b.x) / 2 - P[i].x) * 0.12;
      P[i].y += ((a.y + b.y) / 2 - P[i].y) * 0.12;
    }
  }

  show(dim, match, q) {
    const P = this.pts;
    const s = this.sp;
    const p = this.p;
    const m = min(this.m, 1);

    if (this.dead) {
      const a = 1 - (Date.now() - this.dead) / 25000;

      noStroke();
      fill(this.h, 50, 95, a * 150);
      ellipse(this.x, this.y + this.hh * 0.6, this.hw * 2.4, 36);

      fill(0, 0, 100, a * 90);
      ellipse(
        this.x - this.hw * 0.3,
        this.y + this.hh * 0.55,
        this.hw * 0.6,
        10,
      );

      if (cam.z > 0.4) {
        fill(190, 60, 22, a * 230);
        textAlign(CENTER, CENTER);
        textSize(12);
        text(tr("restore"), this.x, this.y + this.hh * 0.6);
      }
      return;
    }

    let al = dim ? 55 : 255;

    if (s === "chore") {
      al *= lerp(1, 0.2, constrain((this.m - 0.6) / 0.7, 0, 1));
    }

    const sat = map(p, 0, 1, 24, 88);
    const bri = map(p, 0, 1, 100, 66);
    const aF = ((s === "todo" ? 235 : s === "idea" ? 200 : 215) * al) / 255;
    const hw = this.hw,
      hh = this.hh;

    const poly = (f) => {
      beginShape();

      for (let i = 0; i < N + 3; i++) {
        const q2 = P[i % N];
        curveVertex(this.x + (q2.x - this.x) * f, this.y + (q2.y - this.y) * f);
      }

      endShape(CLOSE);
    };

    noStroke();

    if (m > 0.08) {
      fill(this.h, sat, bri, al * 0.3);
      ellipse(this.x, this.y + hh * 0.95, hw * 2 * (1 + m * 1.2), 5 + m * 16);
    }

    if (q && match) {
      fill(this.h, 30, 100, 120);
      poly(1.2);
    }

    if (this.bulb) {
      drawingContext.shadowColor = "rgba(255,205,70,.95)";
      drawingContext.shadowBlur = 30;
    }

    fill(this.h, sat, bri, aF);
    poly(1);

    if (this.bulb) {
      noFill();
      stroke(48, 75, 100, 240);
      strokeWeight(3.5);
      poly(1);
      noStroke();
    }

    drawingContext.shadowBlur = 0;

    if (s !== "todo") {
      const tp = [];

      this.base.forEach((b, i) => {
        if (b.y < -0.6 * hh) tp.push(i);
      });

      if (tp.length > 2) {
        fill(28, 80, 52, al * 0.92);
        beginShape();

        tp.forEach((i) => vertex(P[i].x, P[i].y));

        for (let k = tp.length - 1; k >= 0; k--) {
          const i = tp[k];
          vertex(P[i].x, P[i].y + hh * (0.2 + 0.06 * sin(i * 2.1 + this.seed)));
        }

        endShape(CLOSE);
      }
    }

    fill(0, 0, 100, (95 * al) / 255);
    ellipse(this.x - hw * 0.35, this.y - hh * 0.5, hw * 0.55, hh * 0.2);

    if (s === "idea") {
      for (let k = 0; k < 3; k++) {
        const a = frameCount * 0.004 * (k + 1) + this.seed + k * 2.1;

        fill((this.h + 50 + k * 40) % 360, 60, 100, (90 * al) / 255);

        ellipse(
          this.x + cos(a) * hw * 0.5,
          this.y + sin(a * 1.3) * hh * 0.3 + hh * 0.1,
          hh * 0.28,
          hh * 0.24,
        );
      }
    }

    if (s === "todo") {
      const W = hw * 1.06,
        H = hh * 1.06;
      const x = this.x,
        y = this.y;

      noStroke();
      fill(0, 0, 100, (28 * al) / 255);
      quad(x - W, y - H, x + W, y - H, x + W * 0.8, y + H, x - W * 0.8, y + H);

      noFill();
      stroke(0, 0, 100, (200 * al) / 255);
      strokeWeight(2.5);

      line(x - W, y - H, x - W * 0.8, y + H);
      line(x + W, y - H, x + W * 0.8, y + H);
      line(x - W * 0.8, y + H, x + W * 0.8, y + H);

      strokeWeight(5);
      line(x - W * 1.04, y - H, x + W * 1.04, y - H);

      stroke(0, 0, 100, (90 * al) / 255);
      strokeWeight(1.5);

      for (let k = -1; k <= 1; k += 0.5) {
        line(x + W * k * 0.92, y - H * 0.9, x + W * k * 0.74, y + H * 0.95);
      }

      noStroke();
    }

    const fs = SP[s].fs;

    if (cam.z * fs >= 5) {
      push();

      translate(this.x, this.y + (s === "idea" ? 10 : 0) + hh * 0.55 * m * 0.3);

      noStroke();

      if (p > 0.55) {
        fill(0, 0, 100, dim ? 60 : 240);
      } else {
        fill(190, 60, 22, dim ? 60 : 240);
      }

      textAlign(CENTER, CENTER);
      textSize(fs);

      const y0 = -(this.ls.length * this.lh) / 2;

      this.ls.forEach((l, i) => {
        text(l, 0, y0 + i * this.lh + this.lh / 2);
      });

      pop();
    }

    if (cam.z > 0.35) {
      noStroke();
      fill(190, 60, 22, dim ? 60 : 230);
      textAlign(RIGHT, CENTER);
      textSize(12);

      text(this.ds, -146, this.y - 8);
      text(this.tm, -146, this.y + 8);

      fill(176, 60, 55);
      ellipse(this.x + hw + 24, this.y, 36, 36);

      textAlign(CENTER, CENTER);
      textSize(19);
      text("✋", this.x + hw + 24, this.y);
    }

    if (this.bulb) {
      const bx = this.x;
      const by = this.y - hh * 1.06 - 14;

      drawingContext.shadowColor = "rgba(255,205,70,.95)";
      drawingContext.shadowBlur = 20;

      noStroke();
      fill(48, 70, 100);
      ellipse(bx, by, 22, 22);

      drawingContext.shadowBlur = 0;

      fill(0, 0, 60);
      rect(bx - 5, by + 9, 10, 7, 2);

      fill(0, 0, 100, 160);
      ellipse(bx - 4, by - 4, 6, 6);
    }

    if (this.spoon) {
      const bx = this.x + hw * 0.35;
      const by = this.y + hh * 0.05;
      const tx = bx + 8;
      const ty = this.y - hh - 56 + sin(frameCount * 0.04 + this.seed) * 2;

      stroke(0, 0, 78);
      strokeWeight(4);
      line(bx, by, tx, ty);

      noStroke();
      fill(0, 0, 92, 225);
      ellipse(bx, by, 16, 24);

      fill(0, 0, 100, 170);
      ellipse(bx - 2, by - 4, 5, 9);

      fill(0, 0, 86);
      ellipse(tx, ty, 9, 9);
    }

    if (this.pulse > 0) {
      this.pulse -= 0.02;

      noFill();
      stroke(this.h, 50, 100, this.pulse * 220);
      strokeWeight(3);

      ellipse(
        this.x,
        this.y,
        hw * 2 * (1 + (1 - this.pulse) * 0.9),
        hh * 2 * (1 + (1 - this.pulse) * 0.9),
      );

      noStroke();
    }
  }
}

function crumbs(x, y, h, n, v) {
  for (let i = 0; i < n; i++) {
    const a = random(TWO_PI);
    const w = random(1, v);

    parts.push({
      x,
      y,
      vx: cos(a) * w,
      vy: sin(a) * w - 1,
      l: 1,
      h,
      r: random(3, 8),
    });
  }
}

function toss(c) {
  c.dead = Date.now();
  crumbs(c.x, c.y, c.h, 22, 6);
  store();
}

function setup() {
  const st = $("stage");

  const cv = createCanvas(st.clientWidth, st.clientHeight);

  cv.parent(st);

  pixelDensity(min(2, devicePixelRatio || 1));
  textFont("Jua, PingFang SC, sans-serif");

  cam.z = constrain(width / 380, 0.5, 1.2);
  cam.x = width / 2 + 40 * cam.z;

  [
    ["en", "English"],
    ["zh", "中文"],
    ["ko", "한국어"],
  ].forEach(([l, n]) => {
    for (const box of ["langs", "lb"]) {
      const b = document.createElement("button");
      b.textContent = n;
      b.dataset.l = l;
      b.onclick = () => setLang(l);
      $(box).appendChild(b);
    }
  });

  try {
    const sl = getItem("ideaHabitat.lang");

    if (sl && L[sl]) {
      lang = sl;
    } else {
      $("lang").classList.add("on");
    }
  } catch (e) {
    $("lang").classList.add("on");
  }

  applyLang();

  HUES.forEach((h, i) => {
    const b = document.createElement("button");
    b.className = "sw";
    b.style.background = "hsl(" + h + " 75% 82%)";

    b.setAttribute("aria-label", tr("color") + " " + (i + 1));

    b.setAttribute("aria-pressed", i === 0);

    b.onclick = () => {
      selH = h;

      [...$("sw").children].forEach((x) =>
        x.setAttribute("aria-pressed", x === b),
      );
    };

    $("sw").appendChild(b);
  });

  loadMode();

  document.fonts.ready.then(() => items.forEach((i) => i.layout()));

  const e = cv.elt;

  ["down", "move", "up", "cancel"].forEach((k) =>
    e.addEventListener("pointer" + k, { down, move, up, cancel: up }[k]),
  );

  e.addEventListener(
    "wheel",
    (ev) => {
      ev.preventDefault();

      if (ev.ctrlKey) {
        zoomAt(ev.offsetX, ev.offsetY, exp(-ev.deltaY * 0.01));
      } else {
        cam.x -= ev.deltaX;
        cam.y -= ev.deltaY;
      }
    },
    { passive: false },
  );

  $("add").onclick = add;

  $("in").onkeydown = (k) => {
    if (k.key === "Enter" && !k.shiftKey) {
      k.preventDefault();
      add();
    }
  };

  $("spd").onclick = () => {
    mul = mul === 1 ? 20000 : 1;
    setSpd();
  };

  $("ord").onchange = () => {
    newTop = $("ord").value === "top";
  };

  $("und").onclick = doUndo;

  if (window.visualViewport) {
    const fit = () => {
      document.body.style.height = visualViewport.height + "px";
      windowResized();
    };

    visualViewport.addEventListener("resize", fit);
  }

  $("modes").onclick = (ev) => {
    const m = ev.target.dataset.m;

    if (m && m !== mode) {
      setMode(m);
    } else if (m === "demo") {
      $("help").classList.add("on");
    }
  };

  $("hok").onclick = () => $("help").classList.remove("on");

  $("panel").onclick = (ev) => {
    if (ev.target.id === "panel") closeP();
  };

  $("help").onclick = (ev) => {
    if (ev.target.id === "help") {
      $("help").classList.remove("on");
    }
  };

  $("rst").onclick = () => {
    items = [];
    undo = [];
    seed();
    store();
  };

  $("eat").onclick = () => {
    eat = !eat;
    $("eat").setAttribute("aria-pressed", eat);
    setEat();
  };

  $("ok").onclick = closeP;

  $("del").onclick = () => {
    const c = open;
    closeP();
    pushU();
    toss(c);
  };

  $("pb").onclick = () => {
    pushU();
    open.bulb = !open.bulb;
    open.pulse = 1;
    refreshP();
  };

  $("pd").onclick = () => {
    pushU();
    open.spoon = !open.spoon;
    open.sq = 0.3;
    open.pulse = 1;
    refreshP();
  };

  $("pa").onclick = () => {
    pushU();
    open.arch = !open.arch;
    closeP();
  };

  $("chips").onclick = (ev) => {
    const bt = ev.target.closest("button");

    if (!bt) return;

    const f = bt.dataset.f;
    filt = f;

    $("chips")
      .querySelectorAll("button")
      .forEach((b) => b.setAttribute("aria-pressed", b.dataset.f === f));
  };
}

function seed() {
  const n = Date.now();

  [
    [tr("d1"), "idea", 350, 3],
    [tr("d2"), "todo", 200, 2],
    [tr("d3"), "idea", 150, 1.5],
    [tr("d4"), "chore", 28, 1],
    [tr("d5"), "chore", 48, 0.5],
  ].forEach(([t, sp, h, hr]) => {
    items.push(
      new J({
        t,
        sp,
        h,
        c: n - hr * 36e5,
      }),
    );
  });
}

function loadMode() {
  items = [];
  undo = [];

  try {
    const d = getItem(keyOf());

    if (d && d.items) {
      const off = Date.now() - (d.sa || Date.now());

      items = d.items.map((o) => {
        if (!o.arch) o.ag += off;
        return new J({ ...o, falling: false });
      });
    }
  } catch (e) {}

  if (mode === "demo" && !items.length) {
    seed();
  }
}

function setMode(m) {
  store();
  mode = m;
  mul = 1;
  setSpd();

  ["spd", "rst"].forEach((id) => ($(id).hidden = m !== "demo"));

  [...$("modes").querySelectorAll("[data-m]")].forEach((b) =>
    b.setAttribute("aria-pressed", b.dataset.m === m),
  );

  filt = "all";

  $("chips")
    .querySelectorAll("button")
    .forEach((b) => b.setAttribute("aria-pressed", b.dataset.f === "all"));

  cam.y = 60;
  loadMode();

  if (m === "demo") {
    $("help").classList.add("on");
  }
}

function windowResized() {
  const st = $("stage");

  resizeCanvas(st.clientWidth, st.clientHeight);
}

function zoomAt(mx, my, f) {
  const z = constrain(cam.z * f, 0.3, 2.5);
  const k = z / cam.z;

  cam.x = mx - (mx - cam.x) * k;
  cam.y = my - (my - cam.y) * k;
  cam.z = z;
}

function add() {
  const t = $("in").value.trim();

  if (!t) return;

  pushU();

  const c = new J({
    t,
    sp: $("sp").value,
    h: selH,
  });

  items.push(c);
  foc = c;

  $("in").value = "";
  store();
}

function hit(wx, wy) {
  for (let i = items.length - 1; i >= 0; i--) {
    const c = items[i];

    if (c.dead) {
      if (abs(wx - c.x) < c.hw * 1.1 && abs(wy - c.y - c.hh * 0.6) < 24) {
        return c;
      }
    } else if (
      vs.has(c) &&
      abs(wx - c.x) < c.hw + 6 &&
      abs(wy - c.y) < c.hh + 6
    ) {
      return c;
    }
  }

  return null;
}

function xhit(wx, wy) {
  return items.find(
    (c) => !c.dead && vs.has(c) && dist(wx, wy, c.x + c.hw + 24, c.y) < 26,
  );
}

const pos = (e) => {
  const b = e.target.getBoundingClientRect();

  return {
    x: e.clientX - b.left,
    y: e.clientY - b.top,
  };
};

function down(e) {
  if (open) return;

  foc = null;

  const p = pos(e);
  const w = toW(p.x, p.y);

  const xb = cam.z > 0.35 ? xhit(w.x, w.y) : null;

  const t = xb || hit(w.x, w.y);

  e.target.setPointerCapture(e.pointerId);

  ptrs.set(e.pointerId, {
    ...p,
    t,
    xb,
    t0: millis(),
    moved: false,
    long: false,
    sx: p.x,
    sy: p.y,
    wx: w.x,
    wy: w.y,
  });

  pin = null;

  if (ptrs.size === 2) {
    const [a, b] = [...ptrs.values()];

    if (a.t && a.t === b.t) {
      pd0 = dist(a.x, a.y, b.x, b.y);
    }
  }
}

function move(e) {
  const o = ptrs.get(e.pointerId);

  if (!o) return;

  const p = pos(e);
  const dx = p.x - o.x;
  const dy = p.y - o.y;

  o.x = p.x;
  o.y = p.y;

  if (dist(p.x, p.y, o.sx, o.sy) > (o.xb ? 4 : 12)) {
    if (
      !o.moved &&
      o.t &&
      !o.xb &&
      !o.t.dead &&
      !eat &&
      ptrs.size === 1 &&
      millis() - o.t0 > 200
    ) {
      o.xb = o.t;
    }

    o.moved = true;
  }

  const v = [...ptrs.values()];

  if (o.xb && o.moved && v.length === 1) {
    if (!o.drag) {
      o.drag = true;
      o.xb.hold = o;
    }

    document
      .querySelectorAll(".over")
      .forEach((x) => x.classList.remove("over"));

    const el = document.elementFromPoint(e.clientX, e.clientY);

    const tg = el && el.closest('#chips button:not([data-f="all"]),#bag');

    if (tg) tg.classList.add("over");
  }

  if (v.length === 1 && o.moved && !o.xb) {
    if (!o.dragging) {
      o.dragging = true;
      o.px = p.x;
      o.py = p.y;
    } else {
      cam.x += p.x - o.px;
      cam.y += p.y - o.py;
      o.px = p.x;
      o.py = p.y;
    }
  }

  if (v.length === 2) {
    const [a, b] = v;
    const d = dist(a.x, a.y, b.x, b.y);

    if (a.t && a.t === b.t && !a.t.dead && !a.xb) {
      a.t.sq = constrain((1 - d / pd0) * 0.6, -0.2, 0.6);

      if (d < pd0 * 0.4) {
        const c = a.t;
        ptrs.clear();
        pushU();
        toss(c);
      }
    } else {
      const m = {
        x: (a.x + b.x) / 2,
        y: (a.y + b.y) / 2,
      };

      if (pin) {
        zoomAt(m.x, m.y, d / pin.d);
        cam.x += m.x - pin.x;
        cam.y += m.y - pin.y;
      }

      pin = {
        d,
        x: m.x,
        y: m.y,
      };
    }
  }
}

function up(e) {
  const o = ptrs.get(e.pointerId);

  if (!o) return;

  ptrs.delete(e.pointerId);
  pin = null;

  const t = o.t;

  const tap = !o.moved && !o.long && millis() - o.t0 < 500 && ptrs.size === 0;

  if (o.drag && o.xb) {
    o.xb.hold = null;

    dropItem(o.xb, e.clientX, e.clientY);
  }

  if (t && tap) {
    if (o.xb) {
      t.hop();
    } else if (t.dead) {
      t.dead = 0;
      t.hop();
      t.kick(3);
    } else if (eat) {
      bite(t, o.wx, o.wy);
    } else if (t.tapT && millis() - t.tapT < 320) {
      clearTimeout(t.tapO);
      t.tapT = 0;
      pushU();
      t.spoon = !t.spoon;
      t.hop();
      t.pulse = 1;
    } else {
      t.tapT = millis();
      t.hop();

      t.tapO = setTimeout(() => {
        t.tapT = 0;

        if (!open && items.includes(t)) {
          openP(t);
        }
      }, 320);
    }
  }

  if (t && !t.dead) {
    t.lt = Date.now();
  }

  store();
}

function dropItem(c, cx, cy) {
  document.querySelectorAll(".over").forEach((x) => x.classList.remove("over"));

  const el = document.elementFromPoint(cx, cy);

  const tg = el && el.closest('#chips button:not([data-f="all"]),#bag');

  if (!tg) return;

  pushU();

  if (tg.id === "bag") {
    toss(c);
    return;
  }

  const f = tg.dataset.f;

  if (f === "arch") {
    c.arch = true;
    c.pulse = 1;
  } else if (SP[f]) {
    c.arch = false;
    c.sp = f;
    c.layout();
    c.pulse = 1;
    c.kick(4);
  }

  store();
}

function bite(t, wx, wy) {
  pushU();

  t.bites.push(atan2(wy - t.y, wx - t.x));

  if (t.bites.length > 12) {
    t.bites.shift();
  }

  t.kick(4);
  t.sq = 0.3;
  t.lt = Date.now();

  crumbs(wx, wy, t.h, 9, 4);

  if (t.sp === "todo" && t.bites.length >= 4) {
    t.spoon = true;
    t.pulse = 1;
  }
}

function refreshP() {
  const t = open;

  $("pb").textContent = tr(t.bulb ? "imp_off" : "imp_on");

  $("pd").textContent = tr(t.spoon ? "done_off" : "done_on");

  $("pa").textContent = tr(t.arch ? "arch_off" : "arch_on");

  $("meta").textContent =
    tr("created") +
    " " +
    fmt(t.c) +
    "\n" +
    tr("last") +
    " " +
    fmt(t.lt) +
    "\n" +
    (t.sp === "todo"
      ? tr("progress") + " " + min(4, t.bites.length) + "/4"
      : tr("used").replace("{n}", t.bites.length)) +
    (t.spoon ? " · " + tr("done_tag") : "") +
    (t.bulb ? " · " + tr("imp_tag") : "");
}

function openP(t) {
  open = t;

  $("ta").value = t.t;
  $("psp").value = t.sp;

  refreshP();

  $("panel").classList.add("on");
}

function closeP() {
  if (open) {
    open.t = $("ta").value.trim() || open.t;
    open.sp = $("psp").value;
    open.lt = Date.now();

    open.layout();
    open.kick(3);

    open = null;
    store();
  }

  $("panel").classList.remove("on");
}

function draw() {
  background(filt === "arch" ? "#eaf3ff" : "#e8f6f3");

  colorMode(HSB, 360, 100, 100, 255);

  const dt = deltaTime;

  for (const [, o] of ptrs) {
    if (
      o.t &&
      !o.xb &&
      !o.t.dead &&
      !o.moved &&
      !o.pick &&
      ptrs.size === 1 &&
      !eat &&
      millis() - o.t0 > 200
    ) {
      o.pick = true;
      o.t.sq = 0.25;
      o.t.kick(2);
    }
  }

  for (const [, o] of ptrs) {
    if (
      o.t &&
      !o.xb &&
      !o.t.dead &&
      !o.moved &&
      !o.long &&
      ptrs.size === 1 &&
      !eat &&
      millis() - o.t0 > 800
    ) {
      o.long = true;
      pushU();
      o.t.bulb = !o.t.bulb;
      o.t.kick(4);
      o.t.sq = 0.3;
      o.t.pulse = 1;
      store();
    }
  }

  items
    .filter((c) => c.sp === "chore" && c.m > 1.3)
    .forEach((c) => {
      crumbs(c.x, c.y, c.h, 14, 5);
      items = items.filter((i) => i !== c);
      store();
    });

  items = items.filter((i) => !i.dead || Date.now() - i.dead < 25000);

  const q = $("q").value.trim().normalize("NFC").toLowerCase();

  const isMatch = (i) => i.t.normalize("NFC").toLowerCase().includes(q);

  if (q !== lastQ) {
    lastQ = q;
    cam.y = 60;
    foc = null;
  }

  const vis = items.filter(
    (i) =>
      !i.dead &&
      (q
        ? isMatch(i)
        : filt === "arch"
          ? i.arch
          : !i.arch && (filt === "all" || i.sp === filt)),
  );

  vs = new Set(vis);

  vis.sort((a, b) => (newTop ? b.c - a.c : a.c - b.c));

  let cy = 0;

  vis.forEach((i) => {
    i.ty = cy + i.hh * 1.06;
    cy += i.hh * 2.12 + 30;

    if (!i.placed) {
      i.placed = true;
      i.x = i.tx;

      i.y = i.falling ? i.ty - 480 : i.ty;

      i.pts.forEach((p) => {
        p.x = i.x;
        p.y = i.y;
      });
    }
  });

  if (foc && vs.has(foc)) {
    const g = height * 0.38 - foc.ty * cam.z;

    cam.y = lerp(cam.y, g, 0.15);

    if (abs(cam.y - g) < 2) {
      foc = null;
    }
  }

  push();

  translate(cam.x, cam.y);
  scale(cam.z);

  noStroke();

  const x0 = floor(-cam.x / cam.z / 80) * 80;
  const x1 = (width - cam.x) / cam.z;
  const y0 = -cam.y / cam.z;
  const y1 = (height - cam.y) / cam.z;

  fill(filt === "arch" ? 215 : 172, 22, 88, 110);

  for (let gx = x0; gx < x1; gx += 80) {
    rect(gx, y0, 40, y1 - y0);
  }

  for (const c of items) {
    c.update(dt);
  }

  const dg = items.find((i) => i.hold);

  const sh = (c) => c.show(false, !!q, q);

  for (const c of items) {
    if (c !== dg && (c.dead || vs.has(c))) {
      sh(c);
    }
  }

  if (dg) {
    sh(dg);
  }

  noStroke();

  for (const p of parts) {
    p.x += p.vx;
    p.y += p.vy;
    p.vy += 0.15;
    p.vx *= 0.97;
    p.l -= 0.025;

    fill(p.h, 55, 100, p.l * 255);

    ellipse(p.x, p.y, p.r * p.l * 2, p.r * p.l * 2);
  }

  parts = parts.filter((p) => p.l > 0);

  pop();

  if (q && !vis.length && !items.some((i) => i.dead)) {
    noStroke();

    fill(190, 60, 22, 200);
    textAlign(CENTER, CENTER);
    textSize(18);

    text(tr("no_match"), width / 2, height * 0.35);
  }

  if (frameCount % 240 === 0) {
    store();
  }
}
