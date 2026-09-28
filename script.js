const data = window.portfolioData || {};

const skillGrid = document.querySelector("#skillGrid");
const projectGrid = document.querySelector("#projectGrid");
const timeline = document.querySelector("#timeline");

function renderSkills() {
  skillGrid.innerHTML = (data.skills || []).map(skill => `
    <article class="skill-card">
      <span class="mini-label">${skill.category}</span>
      <h3>${skill.category}</h3>
      <div class="skill-items">
        ${skill.items.map(item => `<span>${item}</span>`).join("")}
      </div>
    </article>
  `).join("");
}

function renderProjects() {
  projectGrid.innerHTML = (data.projects || []).map((project, i) => `
    <article class="project-card">
      <span class="project-number">0${i + 1} · ${project.status || "Project"}</span>
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <div class="project-tags">${(project.tags || []).map(tag => `<span>${tag}</span>`).join("")}</div>
      ${project.link ? `<a class="project-link" href="${project.link}" target="_blank" rel="noopener">View project ↗</a>` : ""}
    </article>
  `).join("");
}

function renderTimeline() {
  timeline.innerHTML = (data.timeline || []).map(item => `
    <article class="timeline-item">
      <span class="time">${item.time}</span>
      <h3>${item.title}</h3>
      <p>${item.description}</p>
    </article>
  `).join("");
}

renderSkills();
renderProjects();
renderTimeline();

document.querySelector("#year").textContent = new Date().getFullYear();

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
menuToggle?.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", open);
});
document.querySelectorAll(".nav a").forEach(link => link.addEventListener("click", () => nav.classList.remove("open")));

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: .12 });

document.querySelectorAll(".reveal, section").forEach(el => observer.observe(el));

/* Lightweight ambient particle network: no library required. */
const canvas = document.getElementById("particleCanvas");
const ctx = canvas.getContext("2d");
let particles = [];
let width, height;

function resizeCanvas() {
  width = canvas.width = window.innerWidth * devicePixelRatio;
  height = canvas.height = window.innerHeight * devicePixelRatio;
  ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
}
function makeParticles() {
  const count = Math.min(55, Math.max(22, Math.floor(window.innerWidth / 24)));
  particles = Array.from({ length: count }, () => ({
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    vx: (Math.random() - .5) * .18,
    vy: (Math.random() - .5) * .18,
    r: Math.random() * 1.5 + .4
  }));
}
function draw() {
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
  for (const p of particles) {
    p.x += p.vx; p.y += p.vy;
    if (p.x < -10 || p.x > window.innerWidth + 10) p.vx *= -1;
    if (p.y < -10 || p.y > window.innerHeight + 10) p.vy *= -1;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(98,231,255,.45)";
    ctx.fill();
  }
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const a = particles[i], b = particles[j];
      const dx = a.x - b.x, dy = a.y - b.y;
      const d = Math.hypot(dx, dy);
      if (d < 125) {
        ctx.beginPath();
        ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y);
        ctx.strokeStyle = `rgba(98,231,255,${(1 - d / 125) * .08})`;
        ctx.stroke();
      }
    }
  }
  requestAnimationFrame(draw);
}
resizeCanvas(); makeParticles(); draw();
window.addEventListener("resize", () => { resizeCanvas(); makeParticles(); });
