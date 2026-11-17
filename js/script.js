/* =========================================================
   Debosmita Jana: Portfolio interactions (vanilla JS)
   ========================================================= */

const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

/* ---------- Project data (edit here to add/update projects) ---------- */
const GITHUB = "https://github.com/debosmitajana55-droid";
const projects = [
  {
    title: "Personal Portfolio Website",
    emoji: "🌐",
    category: "web",
    featured: true,
    desc: "This website! A responsive, interactive portfolio built from scratch with HTML, CSS and vanilla JavaScript, hosted on GitHub Pages.",
    features: [
      "Dark / light theme that remembers your choice",
      "Typing animation, scroll-reveal effects and animated skill bars",
      "Project filters and detail pop-ups generated from a JavaScript array",
      "Built-in sorting algorithm visualizer (Bubble, Selection, Insertion, Merge, Quick)",
      "Validated contact form and a mobile-friendly layout",
    ],
    learned: "Semantic HTML, CSS Flexbox/Grid and media queries, DOM events in JavaScript, and deploying a site with GitHub Pages.",
    tags: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
    code: `${GITHUB}/portfolio`, live: "#home",
  },
  {
    title: "LAN-Based Examination System",
    emoji: "🖥️",
    category: "systems",
    featured: true,
    desc: "A diploma project: an examination system that runs over a college Local Area Network, so students can take tests from lab computers connected to a central system.",
    features: [
      "Runs on a local network, no internet needed",
      "Students take the exam from their own lab computer",
      "Questions and answers managed centrally",
      "Results collected in one place for the examiner",
    ],
    learned: "How computers communicate over a LAN, client–server structure, and working on a project as a team.",
    tags: ["Networking", "LAN", "Client–Server"],
    code: null, live: null,
  },
  {
    title: "Database Administration & Website Design",
    emoji: "🗄️",
    category: "web",
    featured: false,
    desc: "A diploma project combining a database with a website: designing the tables to store data and building web pages to display and manage it.",
    features: [
      "Designed database tables and relationships",
      "Wrote SQL queries to add, update and fetch records",
      "Designed the website pages with HTML and CSS",
      "Handled basic database administration tasks",
    ],
    learned: "Database design, SQL, and how a website and a database work together.",
    tags: ["SQL", "Database", "HTML", "CSS"],
    code: null, live: null,
  },
  {
    title: "Power BI Data Dashboard",
    emoji: "📊",
    category: "data",
    featured: false,
    desc: "Interactive Power BI dashboards that turn raw data into charts and summaries that are easy to understand at a glance.",
    features: [
      "Imported and cleaned data in Power BI",
      "Built charts, cards and tables to show key numbers",
      "Added filters/slicers so viewers can explore the data",
    ],
    learned: "Data cleaning, choosing the right chart, and presenting insights clearly.",
    tags: ["Power BI", "Data Analysis", "Visualisation"],
    code: null, live: null,
  },
];

/* ---------- Render project cards ---------- */
function renderProjects() {
  const grid = $("#projectGrid");
  grid.innerHTML = projects
    .map(
      (p, i) => `
      <article class="project-card reveal" data-category="${p.category}" data-index="${i}" tabindex="0">
        ${p.featured ? '<span class="featured">★ Featured</span>' : ""}
        <div class="p-top">
          <span class="p-emoji">${p.emoji}</span>
          <div class="p-links">
            ${p.code ? `<a href="${p.code}" target="_blank" rel="noopener" onclick="event.stopPropagation()">Code</a>` : ""}
            ${p.live ? `<a href="${p.live}" onclick="event.stopPropagation()">Live</a>` : ""}
          </div>
        </div>
        <h3>${p.title}</h3>
        <p>${p.desc}</p>
        <div class="tags">${p.tags.map((t) => `<span>${t}</span>`).join("")}</div>
      </article>`
    )
    .join("");
}
renderProjects();

/* ---------- Theme toggle (remembers choice) ---------- */
const root = document.documentElement;
try {
  const saved = localStorage.getItem("theme");
  if (saved) root.dataset.theme = saved;
  else if (window.matchMedia("(prefers-color-scheme: light)").matches) root.dataset.theme = "light";
} catch (e) { /* storage blocked: keep default */ }

$("#themeToggle").addEventListener("click", () => {
  root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
  try { localStorage.setItem("theme", root.dataset.theme); } catch (e) {}
});

/* ---------- Mobile menu ---------- */
const hamburger = $("#hamburger");
const navLinks = $("#navLinks");
hamburger.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  hamburger.classList.toggle("open", open);
  hamburger.setAttribute("aria-expanded", open);
});
$$("#navLinks a").forEach((a) =>
  a.addEventListener("click", () => {
    navLinks.classList.remove("open");
    hamburger.classList.remove("open");
    hamburger.setAttribute("aria-expanded", false);
  })
);

/* ---------- Typing effect ---------- */
const roles = ["CS Student 🎓", "Web Developer 💻", "Problem Solver 🧩", "Python Programmer 🐍", "Lifelong Learner 🚀"];
const typedEl = $("#typed");
let roleIndex = 0, charIndex = 0, deleting = false;
function typeLoop() {
  const word = roles[roleIndex];
  const chars = [...word]; // handles emoji safely
  typedEl.textContent = chars.slice(0, charIndex).join("");
  if (!deleting && charIndex < chars.length) charIndex++;
  else if (deleting && charIndex > 0) charIndex--;
  else if (!deleting) { deleting = true; return setTimeout(typeLoop, 1500); }
  else { deleting = false; roleIndex = (roleIndex + 1) % roles.length; }
  setTimeout(typeLoop, deleting ? 45 : 95);
}
typeLoop();

/* ---------- Scroll: navbar, progress, back-to-top, active link ---------- */
const navbar = $("#navbar");
const progressBar = $("#progressBar");
const backToTop = $("#backToTop");
const sections = $$("main section[id]");

function onScroll() {
  const y = window.scrollY;
  const max = document.documentElement.scrollHeight - window.innerHeight;
  navbar.classList.toggle("scrolled", y > 30);
  progressBar.style.width = `${(y / max) * 100}%`;
  backToTop.classList.toggle("show", y > 600);

  let current = "home";
  sections.forEach((s) => { if (y >= s.offsetTop - 140) current = s.id; });
  $$("#navLinks a").forEach((a) => a.classList.toggle("active", a.getAttribute("href") === `#${current}`));
}
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();
backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

/* ---------- Cursor glow (desktop) ---------- */
const glow = $("#cursorGlow");
window.addEventListener("mousemove", (e) => {
  glow.style.left = `${e.clientX}px`;
  glow.style.top = `${e.clientY}px`;
});

/* ---------- Reveal on scroll + counters + skill bars ---------- */
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("visible");
      $$(".counter", entry.target).forEach(animateCounter);
      if (entry.target.classList.contains("skill-panels")) fillBars($(".skill-panel.active"));
      revealObserver.unobserve(entry.target);
    });
  },
  { threshold: 0.15 }
);
$$(".reveal").forEach((el) => revealObserver.observe(el));

function animateCounter(el) {
  const target = +el.dataset.target;
  const duration = 1600;
  const start = performance.now();
  const step = (now) => {
    const t = Math.min((now - start) / duration, 1);
    el.textContent = Math.floor(target * (1 - Math.pow(1 - t, 3)));
    if (t < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

function fillBars(panel) {
  $$(".fill", panel).forEach((f) => { f.style.width = "0"; });
  requestAnimationFrame(() =>
    requestAnimationFrame(() => $$(".fill", panel).forEach((f) => { f.style.width = `${f.dataset.level}%`; }))
  );
}

/* ---------- Skill tabs ---------- */
$$(".tab").forEach((tab) =>
  tab.addEventListener("click", () => {
    $$(".tab").forEach((t) => t.classList.remove("active"));
    $$(".skill-panel").forEach((p) => p.classList.remove("active"));
    tab.classList.add("active");
    const panel = $(`#${tab.dataset.tab}`);
    panel.classList.add("active");
    fillBars(panel);
  })
);

/* ---------- Project filter ---------- */
$$(".filter").forEach((btn) =>
  btn.addEventListener("click", () => {
    $$(".filter").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    const f = btn.dataset.filter;
    $$(".project-card").forEach((card) => {
      const show = f === "all" || card.dataset.category === f;
      card.classList.toggle("hide", !show);
      if (show) card.classList.add("visible");
    });
  })
);

/* ---------- 3D tilt on project cards ---------- */
$$(".project-card").forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const r = card.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    card.style.transform = `perspective(800px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) translateY(-4px)`;
  });
  card.addEventListener("mouseleave", () => { card.style.transform = ""; });
});

/* ---------- Project modal ---------- */
const modal = $("#modal");
function openModal(i) {
  const p = projects[i];
  $("#modalEmoji").textContent = p.emoji;
  $("#modalTitle").textContent = p.title;
  $("#modalDesc").textContent = p.desc;
  $("#modalFeatures").innerHTML = p.features.map((f) => `<li>${f}</li>`).join("");
  $("#modalLearned").textContent = p.learned;
  $("#modalTags").innerHTML = p.tags.map((t) => `<span>${t}</span>`).join("");
  $("#modalLinks").innerHTML =
    (p.code ? `<a class="btn btn-outline small" href="${p.code}" target="_blank" rel="noopener">View Code</a>` : "") +
    (p.live ? `<a class="btn btn-primary small" href="${p.live}" data-close>Live Demo</a>` : "");
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  $("#modalClose").focus();
}
function closeModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}
$("#projectGrid").addEventListener("click", (e) => {
  const card = e.target.closest(".project-card");
  if (card) openModal(card.dataset.index);
});
$("#projectGrid").addEventListener("keydown", (e) => {
  const card = e.target.closest(".project-card");
  if (card && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); openModal(card.dataset.index); }
});
$("#modalClose").addEventListener("click", closeModal);
modal.addEventListener("click", (e) => { if (e.target === modal || e.target.closest("[data-close]")) closeModal(); });
document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeModal(); });

/* ---------- Toast ---------- */
function toast(msg) {
  const t = $("#toast");
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => t.classList.remove("show"), 3000);
}

/* ---------- Contact form (validation + mailto) ---------- */
const form = $("#contactForm");
const CONTACT_EMAIL = "debosmitajana55@gmail.com";
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let ok = true;
  const setErr = (id, msg) => {
    const field = $(`#${id}`).closest(".field");
    field.classList.toggle("invalid", !!msg);
    $(".error", field).textContent = msg || "";
    if (msg) ok = false;
  };
  const name = $("#name").value.trim();
  const email = $("#email").value.trim();
  const message = $("#message").value.trim();
  setErr("name", name.length < 2 ? "Please enter your name." : "");
  setErr("email", /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? "" : "Please enter a valid email.");
  setErr("message", message.length < 10 ? "Message should be at least 10 characters." : "");
  if (!ok) return toast("⚠️ Please fix the highlighted fields");

  const subject = $("#subject").value.trim() || `Portfolio enquiry from ${name}`;
  const body = `${message}\n\n- ${name} (${email})`;
  window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  toast("✅ Opening your email app…");
  form.reset();
});

/* ---------- Sorting visualizer ---------- */
const barsEl = $("#bars");
const cmpEl = $("#cmpCount");
const swapEl = $("#swapCount");
const sortBtn = $("#sortBtn");
const shuffleBtn = $("#shuffleBtn");
const algoSel = $("#algo");
const speedEl = $("#speed");
const complexity = {
  bubble: "Time: O(n²) · Space: O(1)",
  selection: "Time: O(n²) · Space: O(1)",
  insertion: "Time: O(n²) · Space: O(1)",
  merge: "Time: O(n log n) · Space: O(n)",
  quick: "Time: O(n log n) avg · Space: O(log n)",
};
let arr = [], bars = [], running = false, cmp = 0, swaps = 0;
const N = () => (window.innerWidth < 600 ? 28 : 50);

function shuffle() {
  arr = Array.from({ length: N() }, () => Math.floor(Math.random() * 92) + 8);
  barsEl.innerHTML = arr.map((v) => `<div style="height:${v}%"></div>`).join("");
  bars = $$("div", barsEl);
  cmp = swaps = 0; updateStats();
}
const updateStats = () => { cmpEl.textContent = cmp; swapEl.textContent = swaps; };
const delay = () => new Promise((r) => setTimeout(r, 105 - speedEl.value));
const setH = (i) => { bars[i].style.height = `${arr[i]}%`; };
async function compare(i, j) {
  cmp++; updateStats();
  bars[i].classList.add("compare"); bars[j].classList.add("compare");
  await delay();
  bars[i].classList.remove("compare"); bars[j].classList.remove("compare");
  return arr[i] > arr[j];
}
async function swap(i, j) {
  swaps++; updateStats();
  [arr[i], arr[j]] = [arr[j], arr[i]];
  bars[i].classList.add("swap"); bars[j].classList.add("swap");
  setH(i); setH(j);
  await delay();
  bars[i].classList.remove("swap"); bars[j].classList.remove("swap");
}
async function write(i, v) {
  swaps++; updateStats();
  arr[i] = v; setH(i); bars[i].classList.add("swap");
  await delay();
  bars[i].classList.remove("swap");
}

const algorithms = {
  async bubble() {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) if (await compare(j, j + 1)) await swap(j, j + 1);
      bars[arr.length - i - 1].classList.add("sorted");
    }
  },
  async selection() {
    for (let i = 0; i < arr.length; i++) {
      let min = i;
      for (let j = i + 1; j < arr.length; j++) if (await compare(min, j)) min = j;
      if (min !== i) await swap(i, min);
      bars[i].classList.add("sorted");
    }
  },
  async insertion() {
    for (let i = 1; i < arr.length; i++) {
      let j = i;
      while (j > 0 && (await compare(j - 1, j))) { await swap(j - 1, j); j--; }
    }
  },
  async merge(lo = 0, hi = arr.length - 1) {
    if (lo >= hi) return;
    const mid = (lo + hi) >> 1;
    await algorithms.merge(lo, mid);
    await algorithms.merge(mid + 1, hi);
    const left = arr.slice(lo, mid + 1), right = arr.slice(mid + 1, hi + 1);
    let i = 0, j = 0, k = lo;
    while (i < left.length && j < right.length) {
      cmp++; updateStats();
      await write(k++, left[i] <= right[j] ? left[i++] : right[j++]);
    }
    while (i < left.length) await write(k++, left[i++]);
    while (j < right.length) await write(k++, right[j++]);
  },
  async quick(lo = 0, hi = arr.length - 1) {
    if (lo >= hi) return;
    let p = lo;
    for (let i = lo; i < hi; i++) if (!(await compare(i, hi))) { await swap(i, p); p++; }
    await swap(p, hi);
    await algorithms.quick(lo, p - 1);
    await algorithms.quick(p + 1, hi);
  },
};

async function finishAnimation() {
  for (const b of bars) { b.classList.add("sorted"); await new Promise((r) => setTimeout(r, 12)); }
}

sortBtn.addEventListener("click", async () => {
  if (running) return;
  running = true;
  sortBtn.disabled = shuffleBtn.disabled = algoSel.disabled = true;
  bars.forEach((b) => b.classList.remove("sorted"));
  cmp = swaps = 0; updateStats();
  await algorithms[algoSel.value]();
  await finishAnimation();
  toast(`🎉 Sorted with ${algoSel.options[algoSel.selectedIndex].text}: ${cmp} comparisons`);
  running = false;
  sortBtn.disabled = shuffleBtn.disabled = algoSel.disabled = false;
});
shuffleBtn.addEventListener("click", () => !running && shuffle());
algoSel.addEventListener("change", () => { $("#complexity").textContent = complexity[algoSel.value]; if (!running) shuffle(); });
shuffle();

/* ---------- Footer year ---------- */
$("#year").textContent = new Date().getFullYear();

/* ---------- A little hello for curious devs ---------- */
console.log("%c Hi, I'm Debosmita 👋 Thanks for checking out the source!", "color:#8b5cf6;font-size:14px;font-weight:bold");
