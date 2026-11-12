/* ===================================================================
   Mazen Maalaoui — personal site
   Vanilla JS. Sections: data · utils · theme/nav · hero · timeline ·
   impact race · skills · projects · 3D print · palette · terminal
   =================================================================== */
(() => {
'use strict';

/* ---------------------------------------------------------------
   DATA (all sourced from the résumé)
---------------------------------------------------------------- */
const PRESENT = '2026-11';

const ROLES = [
  {
    id: 'shift', lane: 0, kind: 'work',
    company: 'Shift', location: 'Tunisia',
    title: 'Full Stack Developer',
    start: '2017-03', end: '2020-10',
    short: 'Full Stack Developer', tiny: 'Full Stack Dev',
    summary: 'Delivered a wide range of client projects: web platforms, mobile and hybrid apps, web-based and Facebook games, and Windows kiosk-mode applications.',
    bullets: [
      'Built the FMI match-sheet platform (web and mobile) for the Tunisian Football Federation, officially approved by FIFA: league/season/club/player management, match calendars, player stats and transfers, referee workflows, licensing via third-party APIs, and a push/email/SMS notification center.',
      'Delivered a multilanguage e-commerce platform for CSM-GIAS with X3 ERP synchronization, an advanced discounting engine, back-office, web/mobile analytics, and a card/VIP-tier-aware search engine.',
      'Built a custom CRUD generator on Laravel 5.1 that accelerated delivery across numerous smaller projects.',
      'Created custom Facebook Live-themed apps that fetched live user comments to power real-time polls and statistics.',
      'Developed cross-platform mobile/hybrid apps with React Native, Ionic, Framework7 and Cordova; integrated a local SMS gateway and Firebase/FCM push notifications.',
      'Handled DevOps and system administration: manual VPS configuration, Nginx/Apache, cPanel and SSH; wrote Windows batch scripts to lock down kiosk machines.',
    ],
    skills: ['Laravel','PHP','Vue.js','jQuery','Bootstrap','MySQL','Firebase','React Native','Ionic','Framework7','Cordova','Nginx','Apache','JavaScript','HTML5','REST APIs'],
  },
  {
    id: 'bsamply-be', lane: 0, kind: 'work',
    company: 'Bsamply', location: 'Tunisia',
    title: 'Backend Developer',
    project: 'B2B Fashion E-commerce Platform',
    start: '2020-11', end: '2022-07',
    short: 'Backend Developer', tiny: 'Backend Dev',
    summary: 'Helped bootstrap a microservices architecture using Lumen behind a Laravel 8 API Gateway.',
    bullets: [
      'Owned the Products domain and the admin back-office while contributing across every platform feature.',
      'Built dedicated per-event-group queues, a custom email-sender service, and a Node.js PDF-generation service.',
      'Developed a web-crawling/cards tool with Laravel Zero.',
      'Worked with MariaDB, MongoDB, Redis caching and Elasticsearch.',
    ],
    skills: ['Laravel','Lumen','Laravel Zero','PHP','Microservices','API Gateway','Queues','MariaDB','MongoDB','Redis','Elasticsearch','Web Scraping & Crawling','REST APIs'],
  },
  {
    id: 'bsamply-lead', lane: 0, kind: 'work',
    company: 'Bsamply · a Dedagroup company', location: 'Tunisia',
    title: 'Backend Team Lead',
    start: '2022-08', end: '2023-05',
    short: 'Backend Team Lead', tiny: 'Lead',
    summary: 'Led four backend developers delivering custom business-logic features on Laravel / PHP 9.',
    bullets: [
      'Organized and dispatched work, owned code reviews and merge requests, and mentored junior developers.',
      'Worked across MariaDB and MongoDB, queues, model observers and Elasticsearch, collaborating closely with design and frontend teams.',
      'Maintained CI/CD deployments across development, demo and production environments.',
    ],
    skills: ['Laravel','PHP','MariaDB','MongoDB','Queues','Elasticsearch','CI/CD','Code Review','Mentoring','Team Leadership'],
  },
  {
    id: 'techlead', lane: 0, kind: 'work',
    company: 'Bsamply · a Dedagroup company', location: 'Tunisia',
    title: 'Tech Lead — Laravel / Vue.js',
    project: 'B/community',
    start: '2023-07', end: null,
    short: 'Tech Lead · B/community', tiny: 'Tech Lead',
    summary: 'Lead a team of up to seven engineers rebuilding B/community as a more secure, higher-performance version of the original platform.',
    bullets: [
      'Consolidated two applications into one and decoupled web API logic from mobile API logic for cleaner, independently evolvable services.',
      'Delivered AI-powered product features, including a proprietary LLM trained on Llama 3.1 8B, alongside enhanced search capabilities and a redesigned UX built with the product designer.',
      'Architected on Laravel 11→12 (PHP 8.3→8.4) with Vue.js and Inertia.js, MariaDB and MongoDB, Redis, Elasticsearch, and queues, events and broadcasting via Laravel Reverb.',
      'Drove the upgrade from Laravel 11 / PHP 8.3 to Laravel 12 / PHP 8.4, remediating known PHP 8.3 security vulnerabilities.',
      'Boosted performance with Laravel Octane and FrankenPHP, containerized with Docker, and deployed on Kubernetes over GCP.',
      'Cut worst-case API response time from 30+ seconds to under 500 ms, and typical endpoint latency from ~300 ms to 50–100 ms, through query optimization, caching and high-performance PHP.',
      'Enforced engineering quality through PHPStan, Rector, PHP CS Fixer, PHPUnit, Pest, SonarQube and CI/CD; set technical strategy and mentored the team as primary technical decision-maker.',
    ],
    skills: ['Laravel','PHP','Vue.js','Inertia.js','Laravel Octane','FrankenPHP','Laravel Reverb','MariaDB','MongoDB','Redis','Elasticsearch','Queues','WebSockets','Docker','Kubernetes','GCP','CI/CD','PHPStan','Rector','PHP CS Fixer','PHPUnit','Pest','SonarQube','Sentry','LLM training & fine-tuning','AI feature integration','NLP','Technical Leadership','Team Leadership','System Design','Performance Optimization','Mentoring','Code Review','OWASP Top 10','Tailwind CSS','Vite','TypeScript'],
  },
  {
    id: 'coord', lane: 1, kind: 'concurrent',
    company: 'Dedagroup holding', location: 'Tunisia',
    title: 'Engineering Program Coordinator',
    start: '2025-01', end: null,
    short: 'Engineering Program Coordinator', tiny: 'Coordinator',
    summary: 'Formal, on-demand engineering coordinator across the Dedagroup holding, engaged when team leads or product owners have specific needs regarding a developer.',
    bullets: [
      'Coordinate and support a cross-stream group of four (three developers and a UX/UI designer) embedded in different teams.',
      'Run monthly 1:1s to track growth, well-being and performance, surfacing and resolving blockers and organizational friction.',
    ],
    skills: ['Technical Leadership','Team Leadership','Mentoring','Agile & Scrum'],
  },
  {
    id: 'java', lane: 2, kind: 'concurrent',
    company: 'Bsamply · a Dedagroup company', location: 'Tunisia',
    title: 'Full Stack Developer — Java / Spring Boot / React',
    start: '2026-01', end: null,
    short: 'Java / Spring Boot / React', tiny: 'Java',
    summary: 'Develop full, end-to-end features across Java/Spring Boot backends and React frontends built on the company\'s internal component libraries.',
    bullets: [
      'Design and secure REST APIs with fine-grained, role- and permission-based access control using Spring Security.',
      'Build event-driven services with Apache Kafka and persist data in PostgreSQL.',
      'Manage Maven and Gradle builds, author automated tests with JUnit, and maintain Jenkins CI/CD deployment pipelines.',
      'Accelerate delivery and code quality using Claude Code as an AI development assistant.',
    ],
    skills: ['Java','Spring Boot','Spring Security','React','Apache Kafka','PostgreSQL','Maven','Gradle','JUnit','Jenkins','CI/CD','REST APIs','AI-assisted development','TypeScript'],
  },
];

const EDU = [
  { id: 'master', lane: 3, kind: 'edu', title: "Master's — Web & Multimedia", company: 'ISIK', start: '2015-10', end: '2018-06', short: "M.Sc. Web & Multimedia", summary: "Master's Degree, Web & Multimedia · ISIK · Tunisia", bullets: [], skills: [] },
  { id: 'bachelor', lane: 3, kind: 'edu', title: "Bachelor's — Applied Multimedia & Web", company: 'ISIK', start: '2012-01', end: '2015-06', short: 'B.Sc. Applied Multimedia & Web', summary: "Bachelor's Degree (License), Applied Multimedia and Web · ISIK · Tunisia", bullets: [], skills: [] },
];

const MILESTONES = [
  { date: '2022-07', label: 'Acquired by Dedagroup' },
];

const SKILL_GROUPS = [
  { name: 'Languages', color: '#7c5cff', items: ['PHP','Java','JavaScript','TypeScript','SQL'] },
  { name: 'Backend', color: '#f472b6', items: ['Laravel','Lumen','Laravel Zero','Spring Boot','Spring Security','REST APIs','Microservices','API Gateway','Inertia.js','Laravel Octane','FrankenPHP','Laravel Reverb','Web Scraping & Crawling','OOP','SOLID','Design Patterns'] },
  { name: 'Frontend & Mobile', color: '#22d3ee', items: ['Vue.js','React','Tailwind CSS','Bootstrap','jQuery','HTML5','Vite','React Native','Ionic','Framework7','Cordova'] },
  { name: 'AI Engineering', color: '#fbbf24', items: ['LLM training & fine-tuning','Llama 3.1 8B','AI feature integration','NLP','AI-assisted development','Claude Code','GitHub Copilot'] },
  { name: 'Databases & Search', color: '#34d399', items: ['MariaDB','MySQL','PostgreSQL','MongoDB','Redis','Elasticsearch'] },
  { name: 'Messaging & Events', color: '#fb923c', items: ['Apache Kafka','Queues','Events & Broadcasting','WebSockets'] },
  { name: 'DevOps & Infrastructure', color: '#60a5fa', items: ['Docker','Kubernetes','GCP','Jenkins','CI/CD','Maven','Gradle','Nginx','Apache'] },
  { name: 'Quality & Testing', color: '#a3e635', items: ['PHPUnit','Pest','JUnit','PHPStan','Rector','PHP CS Fixer','SonarQube','Sentry','Strict typing','PHPDoc'] },
  { name: 'Security', color: '#fb7185', items: ['Secure coding','OWASP Top 10','Vulnerability assessment','Penetration testing (foundational)'] },
  { name: 'Leadership & Practices', color: '#c084fc', items: ['Technical Leadership','Team Leadership','Agile & Scrum','Code Review','Mentoring','System Design','Performance Optimization','Clean Code'] },
];

const PROJECTS = [
  { kind: 'Platform rebuild · Tech Lead', year: '2023 → now', title: 'B/community', featured: true,
    desc: 'A more secure, higher-performance rebuild of a mission-critical community platform. Two applications consolidated into one, web and mobile APIs decoupled, and AI features shipped on top, including a proprietary LLM trained on Llama 3.1 8B and enhanced search.',
    badges: ['Laravel 12','PHP 8.4','Vue.js','Inertia.js','Octane + FrankenPHP','Kubernetes · GCP','Elasticsearch','Reverb'], hl: ['30 s → <500 ms','Team of 7'] },
  { kind: 'Microservices · Backend', year: '2020 – 2022', title: 'B2B Fashion E-commerce',
    desc: 'Bootstrapped a microservices architecture with Lumen services behind a Laravel 8 API Gateway. Owned the Products domain and admin back-office, built per-event-group queues, an email-sender service and a Node.js PDF service.',
    badges: ['Lumen','Laravel 8 Gateway','MongoDB','Redis','Elasticsearch','Node.js'], hl: [] },
  { kind: 'Sports platform · Full Stack', year: '2017 – 2020', title: 'FMI Match-Sheet Platform',
    desc: 'Web and mobile match-sheet platform for the Tunisian Football Federation, officially approved by FIFA. Leagues, seasons, clubs, players, transfers, referee workflows, licensing via third-party APIs and a push/email/SMS notification center.',
    badges: ['Laravel','Vue.js','Mobile','Third-party APIs'], hl: ['FIFA approved'] },
  { kind: 'E-commerce · Full Stack', year: '2017 – 2020', title: 'CSM-GIAS Commerce',
    desc: 'Multilanguage e-commerce with X3 ERP synchronization, an advanced discounting engine, back-office, web/mobile analytics and a card/VIP-tier-aware search engine.',
    badges: ['Laravel','X3 ERP','Analytics','Search'], hl: [] },
  { kind: 'Developer tooling', year: '2017 – 2020', title: 'Laravel CRUD Generator',
    desc: 'A custom CRUD generator on Laravel 5.1 that accelerated delivery across numerous smaller client projects.',
    badges: ['Laravel 5.1','Code generation'], hl: [] },
  { kind: 'Real-time · Social', year: '2017 – 2020', title: 'Facebook Live Apps',
    desc: 'Custom Facebook Live-themed apps that fetched live user comments to power real-time polls and statistics during broadcasts.',
    badges: ['Facebook API','Real-time','Chart.js'], hl: [] },
];


const RECS = [
  { name: 'Andrea Fiume', photo: 'img/andrea-fiume.jpg', initials: 'AF', c1: '#7c5cff', c2: '#f472b6',
    title: 'General Manager, Dedagroup North America · Founder & former CEO, Bsamply', relation: 'Managed Mazen directly', date: 'July 2026',
    pull: 'Mazen was an absolute cornerstone of our engineering team. Any organization looking for a top-tier technical leader would be exceptionally lucky to have him.',
    text: ['I had the pleasure of working closely with Mazen during his time as Team Lead at Bsamply, the startup I founded and later transitioned to Dedagroup. Mazen was an absolute cornerstone of our engineering team.', 'His technical acumen, exceptional problem-solving skills, and steady leadership were vital, especially as we navigated the complexities of growth and acquisition. Beyond his sharp technical capabilities, what truly sets Mazen apart is his dedication and the way he empowers his team.', 'I am deeply grateful for his hard work during our journey, and I am incredibly proud of the leader he has become. Any organization looking for a top-tier technical leader would be exceptionally lucky to have him.'] },
  { name: 'Eleftheriana-Nefeli Bompoki-Kourou', photo: 'img/eleftheriana-bompoki-kourou.jpg', initials: 'EB', c1: '#22d3ee', c2: '#7c5cff',
    title: 'Project Manager at XM · formerly Product Manager, Bsamply', relation: 'Managed Mazen directly', date: 'September 2026',
    pull: 'He consistently made the right decisions, took ownership of his work, and truly gave his all to every project he was involved in.',
    text: ['I had the pleasure of having an amazing work adventure with Mazen! We first met at a startup called Bsamply, where he joined our team as a backend developer while I was working as the Product Manager.', 'From the beginning, it was clear that he had a lot of potential, a strong willingness to learn, and an incredible work ethic. He quickly climbed the ladder and became a Team Leader.', 'Our journey was a real success story, despite all the difficulties that come with working at a startup with limited budgets and a small team. We managed to shine through those challenges, and with Mazen’s expertise and dedication, we built a product that attracted the attention of Dedagroup, a large Italian company. They acquired Bsamply, and we continued our journey together there.', 'During this new chapter, Mazen continued to showcase his talent, taking on more responsibilities and working across different projects. He consistently made the right decisions, took ownership of his work, and truly gave his all to every project he was involved in.', 'I genuinely enjoyed working with him and would be very happy to have the opportunity to work with him again in the future.'] },
  { name: 'Alessio Gibin', photo: 'img/alessio-gibin.jpg', initials: 'AG', c1: '#34d399', c2: '#22d3ee',
    title: 'Senior IT Project Manager & Consultant', relation: 'Worked with Mazen on the same team', date: 'August 2026',
    pull: 'He is not only an outstanding Full Stack Laravel Developer who crafts elegant solutions to complex backend problems, but also an incredible team player.',
    text: ['Working alongside Mazen was a fantastic experience. He is not only an outstanding Full Stack Laravel Developer who crafts elegant solutions to complex backend problems, but also an incredible team player. Mazen is always ready to share knowledge, mentor peers, and step up during critical launch phases. His reliability, communication, and deep understanding of modern web standards make him a massive asset to any tech team.'] },
  { name: 'Bilel Jellouli', photo: 'img/bilel-jellouli.jpg', initials: 'BJ', c1: '#fbbf24', c2: '#fb7185',
    title: 'Full-Stack Expert · Teaching & Consulting in Laravel & Vue.js', relation: 'Managed Mazen directly, at two companies', date: 'November 2025',
    pull: 'I used to call him “the Hummer” because whenever you give him a task, he takes full ownership and gets things done.',
    text: ['I had the pleasure of working with Mazen in two different companies, and I’ve seen his evolution firsthand, from a junior developer full of potential to a confident and capable tech lead.', 'What stands out the most about him is his constant willingness to help others and his incredible sense of responsibility. I used to call him “the Hummer” because whenever you give him a task, he takes full ownership and gets things done.', 'He’s the kind of teammate every company needs: reliable, proactive, and always there to support others. Any team would be lucky to have him.'] },
];

const TYPE_WORDS = ['high-performance PHP platforms.', 'Java / Spring Boot services.', 'event-driven architectures.', 'AI-powered product features.', 'engineering teams.', 'cloud-native delivery on Kubernetes.'];

/* ---------------------------------------------------------------
   UTILS
---------------------------------------------------------------- */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
const MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
const fmt = ym => { if (!ym) return 'Present'; const [y, m] = ym.split('-').map(Number); return `${MONTHS[m - 1]} ${y}`; };
const toDec = ym => { const [y, m] = (ym || PRESENT).split('-').map(Number); return y + (m - 1) / 12; };
const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const dur = (a, b) => { const m = Math.round((toDec(b) - toDec(a)) * 12); const y = Math.floor(m / 12), r = m % 12; return [y ? `${y} yr${y > 1 ? 's' : ''}` : '', r ? `${r} mo` : ''].filter(Boolean).join(' '); };
let toastT;
const toast = msg => { const t = $('#toast'); t.textContent = msg; t.classList.add('show'); clearTimeout(toastT); toastT = setTimeout(() => t.classList.remove('show'), 2200); };
const copyText = async txt => { try { await navigator.clipboard.writeText(txt); toast('Copied to clipboard'); } catch { toast('Copy failed — select it manually'); } };

/* ---------------------------------------------------------------
   THEME · NAV · SCROLL
---------------------------------------------------------------- */
const root = document.documentElement;
const savedTheme = (() => { try { return localStorage.getItem('theme'); } catch { return null; } })();
if (savedTheme) root.dataset.theme = savedTheme;
else if (matchMedia('(prefers-color-scheme: light)').matches) root.dataset.theme = 'light';
const toggleTheme = () => {
  root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
  try { localStorage.setItem('theme', root.dataset.theme); } catch {}
  toast(`${root.dataset.theme === 'dark' ? 'Dark' : 'Light'} mode`);
};
$('#themeBtn').addEventListener('click', toggleTheme);

const nav = $('#nav'), menu = $('#mobileMenu'), menuBtn = $('#menuBtn');
menuBtn.addEventListener('click', () => { const o = menu.classList.toggle('open'); menuBtn.setAttribute('aria-expanded', o); });
menu.addEventListener('click', e => { if (e.target.tagName === 'A') menu.classList.remove('open'); });

const progress = $('#scrollProgress');
const sections = $$('main section[id]');
const navLinks = $$('.nav-links a');
const onScroll = () => {
  const y = scrollY, h = document.documentElement.scrollHeight - innerHeight;
  progress.style.width = `${h > 0 ? (y / h) * 100 : 0}%`;
  nav.classList.toggle('scrolled', y > 10);
  let cur = '';
  for (const s of sections) if (s.offsetTop - 140 <= y) cur = s.id;
  navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === `#${cur}`));
};
addEventListener('scroll', onScroll, { passive: true }); onScroll();

const glow = $('#cursorGlow');
if (!reduced) addEventListener('pointermove', e => { glow.style.setProperty('--mx', `${e.clientX}px`); glow.style.setProperty('--my', `${e.clientY}px`); }, { passive: true });

/* Reveal on scroll */
const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: .12, rootMargin: '0px 0px -40px 0px' });
const observeReveals = () => $$('.reveal:not(.in)').forEach(el => io.observe(el));
observeReveals();

/* Magnetic buttons */
if (!reduced && matchMedia('(pointer:fine)').matches) {
  $$('.magnetic').forEach(b => {
    b.addEventListener('pointermove', e => { const r = b.getBoundingClientRect(); const x = e.clientX - r.left - r.width / 2, y = e.clientY - r.top - r.height / 2; b.style.transform = `translate(${x * .18}px, ${y * .25}px)`; });
    b.addEventListener('pointerleave', () => { b.style.transform = ''; });
  });
}

$('#year').textContent = new Date().getFullYear();

/* ---------------------------------------------------------------
   HERO: typing, counters, network canvas
---------------------------------------------------------------- */
(() => {
  const el = $('#typeTarget'); let wi = 0, ci = 0, del = false;
  if (reduced) { el.textContent = TYPE_WORDS[0]; return; }
  const tick = () => {
    const w = TYPE_WORDS[wi];
    el.textContent = w.slice(0, ci);
    let delay = del ? 32 : 58;
    if (!del && ci === w.length) { del = true; delay = 1700; }
    else if (del && ci === 0) { del = false; wi = (wi + 1) % TYPE_WORDS.length; delay = 400; }
    else ci += del ? -1 : 1;
    setTimeout(tick, delay);
  };
  setTimeout(tick, 600);
})();

(() => {
  const nums = $$('.stat-num');
  const run = el => {
    const target = +el.dataset.count, suf = el.dataset.suffix || '', t0 = performance.now(), D = 1400;
    const step = now => { const p = Math.min(1, (now - t0) / D), e = 1 - Math.pow(1 - p, 3); el.textContent = Math.round(target * e) + suf; if (p < 1) requestAnimationFrame(step); };
    if (reduced) { el.textContent = target + suf; return; }
    requestAnimationFrame(step);
  };
  const o = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { run(e.target); o.unobserve(e.target); } }), { threshold: .5 });
  nums.forEach(n => o.observe(n));
})();

/* Event-driven network: nodes = services, packets travel along edges */
(() => {
  const cv = $('#netCanvas'), ctx = cv.getContext('2d');
  let W, H, nodes = [], packets = [], mouse = { x: -1e4, y: -1e4 }, raf, dpr = Math.min(2, devicePixelRatio || 1);
  const css = () => getComputedStyle(root);
  let colA, colB, colT;
  const refreshColors = () => { const c = css(); colA = c.getPropertyValue('--accent').trim(); colB = c.getPropertyValue('--accent-2').trim(); colT = c.getPropertyValue('--text').trim(); };
  const resize = () => {
    const r = cv.parentElement.getBoundingClientRect(); W = r.width; H = r.height;
    cv.width = W * dpr; cv.height = H * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const n = Math.round(Math.min(70, Math.max(28, (W * H) / 22000)));
    nodes = Array.from({ length: n }, () => ({ x: Math.random() * W, y: Math.random() * H, vx: (Math.random() - .5) * .25, vy: (Math.random() - .5) * .25, r: 1.5 + Math.random() * 2, hub: Math.random() < .12 }));
    packets = [];
  };
  const LINK = 150;
  const hexA = (hex, a) => { const h = hex.replace('#', ''); const n = parseInt(h.length === 3 ? h.split('').map(c => c + c).join('') : h, 16); return `rgba(${(n >> 16) & 255},${(n >> 8) & 255},${n & 255},${a})`; };
  const draw = () => {
    ctx.clearRect(0, 0, W, H);
    const edges = [];
    for (let i = 0; i < nodes.length; i++) {
      const a = nodes[i];
      // drift + mouse repulsion
      a.x += a.vx; a.y += a.vy;
      if (a.x < -20) a.x = W + 20; if (a.x > W + 20) a.x = -20; if (a.y < -20) a.y = H + 20; if (a.y > H + 20) a.y = -20;
      const dx = a.x - mouse.x, dy = a.y - mouse.y, d2 = dx * dx + dy * dy;
      if (d2 < 160 * 160) { const d = Math.sqrt(d2) || 1, f = (160 - d) / 160 * .9; a.x += dx / d * f; a.y += dy / d * f; }
      for (let j = i + 1; j < nodes.length; j++) {
        const b = nodes[j], ex = a.x - b.x, ey = a.y - b.y, dd = ex * ex + ey * ey;
        if (dd < LINK * LINK) { const al = (1 - Math.sqrt(dd) / LINK) * .35; edges.push([i, j, al]); ctx.strokeStyle = hexA(colA, al); ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke(); }
      }
    }
    // spawn packets
    if (edges.length && packets.length < 26 && Math.random() < .35) { const e = edges[(Math.random() * edges.length) | 0]; packets.push({ a: e[0], b: e[1], t: 0, s: .008 + Math.random() * .014, dir: Math.random() < .5 ? 1 : -1 }); }
    for (let k = packets.length - 1; k >= 0; k--) {
      const p = packets[k]; p.t += p.s; if (p.t >= 1) { packets.splice(k, 1); continue; }
      const a = nodes[p.a], b = nodes[p.b], t = p.dir > 0 ? p.t : 1 - p.t;
      const x = a.x + (b.x - a.x) * t, y = a.y + (b.y - a.y) * t;
      ctx.fillStyle = colB; ctx.shadowColor = colB; ctx.shadowBlur = 10; ctx.beginPath(); ctx.arc(x, y, 1.8, 0, Math.PI * 2); ctx.fill(); ctx.shadowBlur = 0;
    }
    for (const n of nodes) {
      ctx.fillStyle = n.hub ? colB : hexA(colT, .55); ctx.beginPath(); ctx.arc(n.x, n.y, n.hub ? n.r + 1.2 : n.r, 0, Math.PI * 2); ctx.fill();
      if (n.hub) { ctx.strokeStyle = hexA(colB, .35); ctx.beginPath(); ctx.arc(n.x, n.y, n.r + 6, 0, Math.PI * 2); ctx.stroke(); }
    }
    raf = requestAnimationFrame(draw);
  };
  refreshColors(); resize();
  new MutationObserver(refreshColors).observe(root, { attributes: true, attributeFilter: ['data-theme'] });
  addEventListener('resize', () => { resize(); });
  cv.parentElement.addEventListener('pointermove', e => { const r = cv.getBoundingClientRect(); mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top; });
  cv.parentElement.addEventListener('pointerleave', () => { mouse.x = mouse.y = -1e4; });
  if (reduced) { draw(); cancelAnimationFrame(raf); }
  else {
    draw();
    // pause when hero offscreen
    new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { cancelAnimationFrame(raf); draw(); } else cancelAnimationFrame(raf); })).observe(cv);
  }
})();

/* ---------------------------------------------------------------
   TIMELINE (Gantt in SVG)
---------------------------------------------------------------- */
const ALL = [...ROLES, ...EDU];
const byId = Object.fromEntries(ALL.map(r => [r.id, r]));
const gantt = $('#gantt'), roleDetail = $('#roleDetail');
let activeRole = null;

function renderGantt() {
  const PAD_L = 118, PAD_R = 36, PAD_T = 34, ROW = 44, GAP = 10;
  const lanes = ['Primary role', 'Coordinator', 'Java stack', 'Education'];
  const Y0 = 2012, Y1 = 2027;
  const W = 1080, H = PAD_T + lanes.length * (ROW + GAP) + 10;
  const x = dec => PAD_L + ((dec - Y0) / (Y1 - Y0)) * (W - PAD_L - PAD_R);
  const colW = { work: 'var(--accent)', concurrent: 'var(--accent-2)', edu: 'var(--surface-2)' };
  let s = '';
  // year grid
  for (let y = Y0; y <= Y1; y++) {
    s += `<line class="grid-line" x1="${x(y)}" x2="${x(y)}" y1="${PAD_T - 10}" y2="${H - 6}"/>`;
    if (y < Y1) s += `<text class="year" x="${x(y) + 4}" y="${PAD_T - 16}">${y}</text>`;
  }
  // lane labels + background
  lanes.forEach((l, i) => { const y = PAD_T + i * (ROW + GAP); s += `<text class="lane-label" x="0" y="${y + ROW / 2 + 4}">${l}</text>`; });
  // present line
  const nowX = x(toDec(PRESENT));
  s += `<line class="grid-line now" x1="${nowX}" x2="${nowX}" y1="${PAD_T - 10}" y2="${H - 6}"/><text class="present" x="${nowX}" y="${H}" text-anchor="middle">TODAY</text>`;
  // milestones
  for (const m of MILESTONES) { const mx = x(toDec(m.date)); s += `<line class="milestone-line" x1="${mx}" x2="${mx}" y1="${PAD_T - 10}" y2="${PAD_T + 3 * (ROW + GAP) - GAP}"/><text class="milestone-text" x="${mx + 6}" y="${PAD_T + 2 * (ROW + GAP) - GAP / 2 + 3}">★ ${esc(m.label)}</text>`; }
  // bars (labels clipped to the bar; narrow bars get a label to the left when the lane has room)
  const laneBars = {}; for (const r of ALL) (laneBars[r.lane] ||= []).push(r);
  for (const r of ALL) {
    const x0 = x(toDec(r.start)), x1 = x(toDec(r.end)), y = PAD_T + r.lane * (ROW + GAP), w = Math.max(10, x1 - x0);
    const prevEnd = Math.max(PAD_L, ...laneBars[r.lane].filter(o => o !== r && toDec(o.end) <= toDec(r.start)).map(o => x(toDec(o.end))));
    const roomLeft = x0 - prevEnd > 130;
    let inside = '', outside = '';
    if (w > 170) inside = r.short;
    else if (w > 90) inside = r.tiny || r.short.split(' · ')[0];
    else if (roomLeft) outside = r.short;
    else inside = r.tiny || '';
    const dates = w > 90 ? `${fmt(r.start)} – ${fmt(r.end)}` : '';
    s += `<g class="bar ${r.kind}" data-id="${r.id}" tabindex="0" role="button" aria-label="${esc(r.title)}, ${fmt(r.start)} to ${fmt(r.end)}">
      <clipPath id="clip-${r.id}"><rect x="${x0}" y="${y}" width="${w}" height="${ROW}" rx="7"/></clipPath>
      <rect x="${x0}" y="${y}" width="${w}" height="${ROW}" fill="${colW[r.kind]}" ${r.kind === 'edu' ? 'stroke="var(--border-strong)"' : ''}/>
      <g clip-path="url(#clip-${r.id})">
        <text x="${x0 + 10}" y="${y + ROW / 2 + (dates ? -2 : 4)}">${esc(inside)}</text>
        <text x="${x0 + 10}" y="${y + ROW / 2 + 12}" style="font-weight:400;opacity:.8;font-size:10px">${dates}</text>
      </g>
      ${outside ? `<text class="outside" x="${x0 - 8}" y="${y + ROW / 2 + 4}" text-anchor="end">${esc(outside)} →</text>` : ''}
      <title>${esc(r.title)} · ${fmt(r.start)} – ${fmt(r.end)} (${dur(r.start, r.end)})</title>
    </g>`;
  }
  gantt.setAttribute('viewBox', `0 0 ${W} ${H + 8}`);
  gantt.innerHTML = s;
  $$('.bar', gantt).forEach(b => {
    b.addEventListener('click', () => showRole(b.dataset.id, true));
    b.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); showRole(b.dataset.id, true); } });
  });
}

function showRole(id, scroll) {
  const r = byId[id]; if (!r) return;
  activeRole = id;
  $$('.bar', gantt).forEach(b => b.classList.toggle('is-active', b.dataset.id === id));
  roleDetail.innerHTML = `<div class="rd-inner">
    <div><h3>${esc(r.title)}${r.project ? ` <span class="dim">· ${esc(r.project)}</span>` : ''}</h3><p class="rd-company">${esc(r.company)}${r.location ? ` · ${esc(r.location)}` : ''}</p></div>
    <div class="rd-dates">${fmt(r.start)} – ${fmt(r.end)} · ${dur(r.start, r.end)}</div>
    <ul><li>${esc(r.summary)}</li>${r.bullets.map(b => `<li>${esc(b)}</li>`).join('')}</ul>
    ${r.skills.length ? `<div class="rd-stack">${r.skills.slice(0, 18).map(sk => `<span class="pill">${esc(sk)}</span>`).join('')}</div>` : ''}
  </div>`;
  roleDetail.classList.add('flash'); setTimeout(() => roleDetail.classList.remove('flash'), 600);
  if (scroll) { const top = roleDetail.getBoundingClientRect().top + scrollY - 90; if (top > scrollY + innerHeight - 200 || top < scrollY) scrollTo({ top, behavior: reduced ? 'auto' : 'smooth' }); }
}

function renderExpList() {
  const list = $('#expList');
  const groups = [
    { head: 'Bsamply — a Dedagroup company · Nov 2020 – Present · Tunisia', note: 'Acquired by Dedagroup in July 2022. Progressed from Backend Developer to Tech Lead over 5+ years; currently hold three concurrent roles within the holding.', ids: ['java', 'coord', 'techlead', 'bsamply-lead', 'bsamply-be'] },
    { head: 'Shift · Mar 2017 – Oct 2020 · Tunisia', note: '', ids: ['shift'] },
  ];
  list.innerHTML = groups.map(g => `<div class="exp-group reveal">${esc(g.head)}${g.note ? `<small>${esc(g.note)}</small>` : ''}</div>` + g.ids.map(id => { const r = byId[id]; return `<details class="exp-item reveal" data-id="${id}">
    <summary><h3>${esc(r.title)}${r.project ? ` <span class="dim">· ${esc(r.project)}</span>` : ''}</h3><span class="dates">${fmt(r.start)} – ${fmt(r.end)}</span><svg class="chev" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg><span class="co">${esc(r.company)}${r.kind === 'concurrent' ? ' · concurrent role' : ''}</span></summary>
    <div class="exp-body"><ul><li>${esc(r.summary)}</li>${r.bullets.map(b => `<li>${esc(b)}</li>`).join('')}</ul></div>
  </details>`; }).join('')).join('');
  observeReveals();
}
renderGantt(); renderExpList(); showRole('techlead', false);
// start the timeline scrolled to today on narrow screens
{ const sc = $('.timeline-scroll'); requestAnimationFrame(() => { sc.scrollLeft = sc.scrollWidth; }); }

/* ---------------------------------------------------------------
   IMPACT: latency race
---------------------------------------------------------------- */
(() => {
  const SC = {
    worst: { before: 30000, after: 500, beforeNote: 'Unoptimized queries, no caching, PHP-FPM', afterNote: 'Query optimization · Redis caching · Laravel Octane + FrankenPHP', scale: 3200 },
    typical: { before: 300, after: 75, beforeNote: 'Typical endpoint before the rebuild', afterNote: 'Same endpoint on the rebuilt platform (50–100 ms)', scale: 1800 },
  };
  let scenario = 'worst', running = false;
  const bF = $('#beforeFill'), aF = $('#afterFill'), bM = $('#beforeMs'), aM = $('#afterMs'), bP = $('#beforePacket'), aP = $('#afterPacket'), res = $('#raceResult');
  const fmtMs = ms => ms >= 1000 ? `${(ms / 1000).toFixed(ms >= 10000 ? 0 : 1)} s` : `${Math.round(ms)} ms`;
  const setScenario = s => { scenario = s; $$('.seg-btn').forEach(b => { const on = b.dataset.scenario === s; b.classList.toggle('is-active', on); b.setAttribute('aria-selected', on); }); $('#beforeNote').textContent = SC[s].beforeNote; $('#afterNote').textContent = SC[s].afterNote; reset(); };
  const reset = () => { bF.style.width = aF.style.width = '0%'; bM.textContent = aM.textContent = '0 ms'; bP.style.opacity = aP.style.opacity = 0; res.textContent = ''; };
  const run = () => {
    if (running) return; running = true; reset();
    const c = SC[scenario], T = reduced ? 10 : c.scale, t0 = performance.now();
    const animate = now => {
      const p = Math.min(1, (now - t0) / T);
      const pb = p, pa = Math.min(1, p * (c.before / c.after));
      bF.style.width = `${pb * 100}%`; aF.style.width = `${pa * 100}%`;
      bP.style.left = `${pb * 100}%`; aP.style.left = `${pa * 100}%`; bP.style.opacity = pb < 1 ? 1 : 0; aP.style.opacity = pa < 1 ? 1 : 0;
      bM.textContent = fmtMs(c.before * pb); aM.textContent = fmtMs(c.after * pa);
      if (pa >= 1 && !res.textContent) res.innerHTML = `✓ Rebuilt endpoint responded in <em>${fmtMs(c.after)}</em>… still waiting for the old one.`;
      if (p < 1) requestAnimationFrame(animate);
      else { running = false; const x = Math.round(c.before / c.after); res.innerHTML = `Done. <em>${fmtMs(c.after)}</em> vs <em>${fmtMs(c.before)}</em> — roughly <em>${x}×</em> faster.`; }
    };
    requestAnimationFrame(animate);
  };
  $$('.seg-btn').forEach(b => b.addEventListener('click', () => setScenario(b.dataset.scenario)));
  $('#raceRun').addEventListener('click', run);
  // auto-run once when visible
  new IntersectionObserver((es, o) => es.forEach(e => { if (e.isIntersecting) { setTimeout(run, 500); o.disconnect(); } }), { threshold: .5 }).observe($('.race'));
})();

/* ---------------------------------------------------------------
   SKILLS explorer
---------------------------------------------------------------- */
(() => {
  const cats = $('#skillCats'), grid = $('#skillsGrid'), usage = $('#skillUsage'), search = $('#skillSearch');
  let activeCat = 'All', activeSkill = null, q = '';
  cats.innerHTML = ['All', ...SKILL_GROUPS.map(g => g.name)].map(n => `<button class="chip ${n === 'All' ? 'is-active' : ''}" data-cat="${esc(n)}">${esc(n)}</button>`).join('');
  grid.innerHTML = SKILL_GROUPS.map(g => `<div class="skill-group reveal" data-cat="${esc(g.name)}" style="--c:${g.color}"><h3><i></i>${esc(g.name)}</h3><div class="skill-tags">${g.items.map(i => `<button class="skill" data-skill="${esc(i)}">${esc(i)}</button>`).join('')}</div></div>`).join('');
  observeReveals();
  const norm = s => s.toLowerCase();
  const usedIn = skill => ROLES.filter(r => r.skills.some(s => norm(s) === norm(skill) || norm(s).includes(norm(skill)) || norm(skill).includes(norm(s))));
  const apply = () => {
    $$('.skill-group', grid).forEach(g => {
      const catOk = activeCat === 'All' || g.dataset.cat === activeCat;
      let any = false;
      $$('.skill', g).forEach(b => {
        const name = b.dataset.skill, hit = !q || norm(name).includes(q);
        b.classList.toggle('dimmed', !!q && !hit); if (hit) any = true;
        b.innerHTML = q && hit ? esc(name).replace(new RegExp(`(${q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'i'), '<mark>$1</mark>') : esc(name);
        b.classList.toggle('is-active', name === activeSkill);
      });
      g.classList.toggle('hidden', !catOk || (!!q && !any));
    });
  };
  cats.addEventListener('click', e => { const b = e.target.closest('.chip'); if (!b) return; activeCat = b.dataset.cat; $$('.chip', cats).forEach(c => c.classList.toggle('is-active', c === b)); apply(); });
  search.addEventListener('input', () => { q = norm(search.value.trim()); apply(); });
  grid.addEventListener('click', e => {
    const b = e.target.closest('.skill'); if (!b) return;
    const name = b.dataset.skill;
    if (activeSkill === name) { clearSkill(); return; }
    activeSkill = name; apply();
    const roles = usedIn(name);
    gantt.classList.add('filtering'); $$('.bar', gantt).forEach(bar => bar.classList.toggle('match', roles.some(r => r.id === bar.dataset.id)));
    usage.hidden = false;
    usage.innerHTML = roles.length
      ? `<span>Used <strong>${esc(name)}</strong> in:</span><div class="usage-links">${roles.map(r => `<button data-role="${r.id}">${esc(r.short)} <span class="dim">· ${fmt(r.start).slice(-4)}–${r.end ? fmt(r.end).slice(-4) : 'now'}</span></button>`).join('')}</div><button class="close-usage" aria-label="Clear">✕</button>`
      : `<span><strong>${esc(name)}</strong> — part of my toolbox, used across projects and day-to-day engineering practice.</span><button class="close-usage" aria-label="Clear">✕</button>`;
  });
  const clearSkill = () => { activeSkill = null; usage.hidden = true; usage.innerHTML = ''; gantt.classList.remove('filtering'); apply(); };
  usage.addEventListener('click', e => {
    if (e.target.closest('.close-usage')) { clearSkill(); return; }
    const b = e.target.closest('[data-role]'); if (b) { location.hash = '#experience'; showRole(b.dataset.role, true); }
  });
})();

/* ---------------------------------------------------------------
   PROJECTS with tilt
---------------------------------------------------------------- */
(() => {
  const wrap = $('#projects');
  wrap.innerHTML = PROJECTS.map(p => `<article class="project reveal ${p.featured ? 'featured' : ''}">
    <div class="project-top"><span class="project-kind">${esc(p.kind)}</span><span class="project-year">${esc(p.year)}</span></div>
    <h3>${esc(p.title)}</h3><p>${esc(p.desc)}</p>
    <div class="badges">${p.hl.map(h => `<span class="badge hl">${esc(h)}</span>`).join('')}${p.badges.map(b => `<span class="badge">${esc(b)}</span>`).join('')}</div>
  </article>`).join('');
  observeReveals();
  if (reduced || !matchMedia('(pointer:fine)').matches) return;
  $$('.project', wrap).forEach(card => {
    card.addEventListener('pointermove', e => {
      const r = card.getBoundingClientRect(), px = (e.clientX - r.left) / r.width, py = (e.clientY - r.top) / r.height;
      card.style.setProperty('--px', `${px * 100}%`); card.style.setProperty('--py', `${py * 100}%`);
      card.style.transform = `perspective(900px) rotateX(${(py - .5) * -6}deg) rotateY(${(px - .5) * 8}deg) translateY(-3px)`;
    });
    card.addEventListener('pointerleave', () => { card.style.transform = ''; });
  });
})();

/* ---------------------------------------------------------------
   3D PRINT canvas (wireframe, drag to rotate, layer-by-layer print)
---------------------------------------------------------------- */
(() => {
  const cv = $('#printCanvas'), ctx = cv.getContext('2d'), range = $('#layerRange'), sel = $('#shapeSelect');
  let W, H, dpr = Math.min(2, devicePixelRatio || 1), rx = -.4, ry = .6, vx = 0, vy = .004, drag = null, layer = 100, printing = true, raf;
  const shapes = {
    ico() { const t = (1 + Math.sqrt(5)) / 2; const v = [[-1,t,0],[1,t,0],[-1,-t,0],[1,-t,0],[0,-1,t],[0,1,t],[0,-1,-t],[0,1,-t],[t,0,-1],[t,0,1],[-t,0,-1],[-t,0,1]].map(p => p.map(c => c / 1.9));
      const e = []; for (let i = 0; i < v.length; i++) for (let j = i + 1; j < v.length; j++) { const d = Math.hypot(...v[i].map((c, k) => c - v[j][k])); if (Math.abs(d - 2 / 1.9) < .01) e.push([i, j]); } return { v, e }; },
    cube() { const v = [], e = []; const s = .95; for (let i = 0; i < 8; i++) v.push([(i & 1 ? s : -s), (i & 2 ? s : -s), (i & 4 ? s : -s)]); for (let i = 0; i < 8; i++) for (let j = i + 1; j < 8; j++) { const diff = (i ^ j); if (diff === 1 || diff === 2 || diff === 4) e.push([i, j]); }
      // inner frame
      const n = v.length; const s2 = .55; for (let i = 0; i < 8; i++) v.push([(i & 1 ? s2 : -s2), (i & 2 ? s2 : -s2), (i & 4 ? s2 : -s2)]); for (let i = 0; i < 8; i++) { for (let j = i + 1; j < 8; j++) { const diff = (i ^ j); if (diff === 1 || diff === 2 || diff === 4) e.push([n + i, n + j]); } e.push([i, n + i]); } return { v, e }; },
    torus() { const v = [], e = [], R = .8, r = .32, N = 20, M = 10; for (let i = 0; i < N; i++) { const a = i / N * Math.PI * 2; for (let j = 0; j < M; j++) { const b = j / M * Math.PI * 2; v.push([(R + r * Math.cos(b)) * Math.cos(a), r * Math.sin(b), (R + r * Math.cos(b)) * Math.sin(a)]); } }
      for (let i = 0; i < N; i++) for (let j = 0; j < M; j++) { const k = i * M + j; e.push([k, i * M + (j + 1) % M]); e.push([k, ((i + 1) % N) * M + j]); } return { v, e }; },
  };
  let shape = shapes.ico();
  const resize = () => { const r = cv.getBoundingClientRect(); W = r.width; H = r.height; cv.width = W * dpr; cv.height = H * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0); };
  const rot = ([x, y, z]) => { let c = Math.cos(ry), s = Math.sin(ry); let x1 = x * c + z * s, z1 = -x * s + z * c; c = Math.cos(rx); s = Math.sin(rx); let y1 = y * c - z1 * s, z2 = y * s + z1 * c; return [x1, y1, z2]; };
  const draw = () => {
    ctx.clearRect(0, 0, W, H);
    const c = getComputedStyle(root), colA = c.getPropertyValue('--accent').trim(), colB = c.getPropertyValue('--accent-2').trim(), colT = c.getPropertyValue('--text-3').trim();
    if (!drag) { ry += vy; rx += vx; vx *= .96; }
    if (printing && !reduced) { layer = Math.min(100, layer + .35); range.value = layer; if (layer >= 100) printing = false; }
    const S = Math.min(W, H) * .33, cx = W / 2, cy = H / 2 + 10;
    const pts = shape.v.map(rot);
    const ys = shape.v.map(p => p[1]); const yMin = Math.min(...ys), yMax = Math.max(...ys);
    const cut = yMin + (yMax - yMin) * (layer / 100); // world-space Y (before rotation) — printing builds bottom-up
    const proj = ([x, y, z]) => { const f = 3.2 / (3.2 + z); return [cx + x * S * f, cy - y * S * f, f]; };
    // build plate
    ctx.strokeStyle = colT; ctx.globalAlpha = .35; ctx.lineWidth = 1;
    for (let i = -4; i <= 4; i++) { const a = proj(rot([i / 4 * 1.3, yMin, -1.3])), b = proj(rot([i / 4 * 1.3, yMin, 1.3])); ctx.beginPath(); ctx.moveTo(a[0], a[1]); ctx.lineTo(b[0], b[1]); ctx.stroke(); const c2 = proj(rot([-1.3, yMin, i / 4 * 1.3])), d = proj(rot([1.3, yMin, i / 4 * 1.3])); ctx.beginPath(); ctx.moveTo(c2[0], c2[1]); ctx.lineTo(d[0], d[1]); ctx.stroke(); }
    ctx.globalAlpha = 1;
    // edges, clipped at the print layer
    for (const [i, j] of shape.e) {
      let a = shape.v[i], b = shape.v[j];
      if (a[1] > cut && b[1] > cut) continue;
      if (a[1] > cut || b[1] > cut) { // clip segment at y=cut
        const [lo, hi] = a[1] <= cut ? [a, b] : [b, a]; const t = (cut - lo[1]) / (hi[1] - lo[1]); const m = lo.map((c, k) => c + (hi[k] - c) * t); a = lo; b = m;
      }
      const pa = proj(rot(a)), pb = proj(rot(b)); const depth = (pa[2] + pb[2]) / 2;
      ctx.strokeStyle = colA; ctx.globalAlpha = .35 + (depth - .75) * 1.2; ctx.lineWidth = 1.2 + (depth - .8) * 2; ctx.beginPath(); ctx.moveTo(pa[0], pa[1]); ctx.lineTo(pb[0], pb[1]); ctx.stroke();
    }
    ctx.globalAlpha = 1;
    // vertices below cut
    for (let k = 0; k < shape.v.length; k++) { if (shape.v[k][1] > cut) continue; const p = proj(pts[k]); ctx.fillStyle = colB; ctx.beginPath(); ctx.arc(p[0], p[1], 1.6 + p[2], 0, Math.PI * 2); ctx.fill(); }
    // nozzle / layer line
    if (layer < 100) {
      const l = proj(rot([-1.4, cut, 0])), r = proj(rot([1.4, cut, 0]));
      ctx.strokeStyle = colB; ctx.setLineDash([3, 4]); ctx.globalAlpha = .6; ctx.beginPath(); ctx.moveTo(l[0], l[1]); ctx.lineTo(r[0], r[1]); ctx.stroke(); ctx.setLineDash([]); ctx.globalAlpha = 1;
      ctx.fillStyle = colB; ctx.font = '11px JetBrains Mono, monospace'; ctx.textAlign = 'right'; ctx.fillText(`layer ${Math.round(layer)}%`, W - 12, 20);
    } else { ctx.fillStyle = colT; ctx.font = '11px JetBrains Mono, monospace'; ctx.textAlign = 'right'; ctx.fillText('print complete ✓', W - 12, 20); }
    raf = requestAnimationFrame(draw);
  };
  resize(); addEventListener('resize', resize);
  cv.addEventListener('pointerdown', e => { drag = { x: e.clientX, y: e.clientY }; cv.setPointerCapture(e.pointerId); });
  cv.addEventListener('pointermove', e => { if (!drag) return; const dx = e.clientX - drag.x, dy = e.clientY - drag.y; ry += dx * .008; rx += dy * .008; vy = dx * .0008; vx = dy * .0008; drag = { x: e.clientX, y: e.clientY }; });
  const up = () => { drag = null; if (Math.abs(vy) < .002) vy = .004; };
  cv.addEventListener('pointerup', up); cv.addEventListener('pointercancel', up);
  range.addEventListener('input', () => { printing = false; layer = +range.value; });
  $('#printBtn').addEventListener('click', () => { layer = 0; printing = true; });
  sel.addEventListener('change', () => { shape = shapes[sel.value](); layer = 0; printing = true; });
  new IntersectionObserver(es => es.forEach(e => { cancelAnimationFrame(raf); if (e.isIntersecting) draw(); })).observe(cv);
})();


/* ---------------------------------------------------------------
   TESTIMONIALS carousel
---------------------------------------------------------------- */
(() => {
  const wrap = $('#testi'), tabs = $('#testiTabs'), quote = $('#testiQuote'), full = $('#testiFull'), more = $('#testiMore'), bar = $('#testiBar');
  const DUR = 9000; let i = 0, timer = null, visible = false, paused = false, expanded = false;
  tabs.innerHTML = RECS.map((r, k) => `<button class="testi-person" role="tab" data-i="${k}" aria-selected="${k === 0}" style="--c1:${r.c1};--c2:${r.c2}"><span class="testi-avatar">${r.photo ? `<img src="${esc(r.photo)}" alt="" loading="lazy" width="44" height="44" onerror="this.remove()">` : ''}${esc(r.initials)}</span><span><strong>${esc(r.name)}</strong><small>${esc(r.title)}</small><span class="rel">${esc(r.relation)}</span></span></button>`).join('');
  const show = k => {
    i = (k + RECS.length) % RECS.length; const r = RECS[i];
    $$('.testi-person', tabs).forEach(b => { const on = +b.dataset.i === i; b.classList.toggle('is-active', on); b.setAttribute('aria-selected', on); });
    quote.innerHTML = `“${esc(r.pull)}”<footer><strong>${esc(r.name)}</strong><span>${esc(r.title)} · ${esc(r.relation)} · ${esc(r.date)}</span></footer>`;
    expanded = false; full.hidden = true; full.innerHTML = r.text.map(p => `<p>${esc(p)}</p>`).join(''); more.textContent = 'Read the full recommendation'; more.setAttribute('aria-expanded', 'false');
    restart();
  };
  const stopBar = () => { bar.classList.remove('run'); bar.style.width = '0'; void bar.offsetWidth; };
  const restart = () => {
    clearTimeout(timer); stopBar();
    if (!visible || paused || expanded || reduced) return;
    bar.style.setProperty('--dur', `${DUR}ms`); bar.classList.add('run');
    timer = setTimeout(() => show(i + 1), DUR);
  };
  tabs.addEventListener('click', e => { const b = e.target.closest('.testi-person'); if (b) show(+b.dataset.i); });
  $('#testiPrev').addEventListener('click', () => show(i - 1));
  $('#testiNext').addEventListener('click', () => show(i + 1));
  more.addEventListener('click', () => { expanded = !expanded; full.hidden = !expanded; more.textContent = expanded ? 'Show less' : 'Read the full recommendation'; more.setAttribute('aria-expanded', expanded); restart(); });
  wrap.addEventListener('pointerenter', () => { paused = true; restart(); });
  wrap.addEventListener('pointerleave', () => { paused = false; restart(); });
  wrap.addEventListener('focusin', () => { paused = true; restart(); });
  wrap.addEventListener('focusout', e => { if (!wrap.contains(e.relatedTarget)) { paused = false; restart(); } });
  wrap.addEventListener('keydown', e => { if (e.key === 'ArrowRight') show(i + 1); else if (e.key === 'ArrowLeft') show(i - 1); });
  new IntersectionObserver(es => es.forEach(e => { visible = e.isIntersecting; restart(); }), { threshold: .3 }).observe(wrap);
  show(0);
})();

/* ---------------------------------------------------------------
   CONTACT copy
---------------------------------------------------------------- */
$$('.copy').forEach(b => b.addEventListener('click', e => { e.preventDefault(); e.stopPropagation(); copyText(b.dataset.copy); }));

/* ---------------------------------------------------------------
   COMMAND PALETTE
---------------------------------------------------------------- */
const palette = $('#palette'), pInput = $('#paletteInput'), pList = $('#paletteList');
const openTerminal = () => { closePalette(); terminal.hidden = false; document.body.classList.add('no-scroll'); tInput.focus(); if (!termBooted) bootTerminal(); };
const ACTIONS = [
  { label: 'About', hint: 'Section', icon: '01', run: () => go('#about') },
  { label: 'Experience', hint: 'Section', icon: '02', run: () => go('#experience') },
  { label: 'Impact', hint: 'Section', icon: '03', run: () => go('#impact') },
  { label: 'Skills', hint: 'Section', icon: '04', run: () => go('#skills') },
  { label: 'Selected work', hint: 'Section', icon: '05', run: () => go('#projects') },
  { label: 'What colleagues say', hint: 'Section', icon: '06', run: () => go('#testimonials') },
  { label: 'Education & beyond', hint: 'Section', icon: '07', run: () => go('#beyond') },
  { label: 'Contact', hint: 'Section', icon: '08', run: () => go('#contact') },
  { label: 'Download résumé (PDF)', hint: 'Action', icon: '⤓', run: () => { const a = document.createElement('a'); a.href = 'Mazen-Maalaoui-Resume.pdf'; a.download = ''; a.click(); } },
  { label: 'Copy email address', hint: 'Action', icon: '@', run: () => copyText('mazenelmaalaoui@gmail.com') },
  { label: 'Open LinkedIn', hint: 'Action', icon: 'in', run: () => open('https://linkedin.com/in/mazen-maalaoui', '_blank', 'noopener') },
  { label: 'Toggle light / dark theme', hint: 'Action', icon: '◐', run: toggleTheme },
  { label: 'Open terminal mode', hint: 'Action', icon: '>_', run: openTerminal },
  ...ROLES.map(r => ({ label: r.title, hint: 'Role', icon: '▮', run: () => { go('#experience'); showRole(r.id, true); } })),
  ...PROJECTS.map(p => ({ label: p.title, hint: 'Project', icon: '◆', run: () => go('#projects') })),
];
let pSel = 0, pItems = [];
const go = hash => { closePalette(); $(hash)?.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth' }); history.replaceState(null, '', hash); };
const fuzzy = (q, s) => { q = q.toLowerCase(); s = s.toLowerCase(); if (!q) return { ok: true, score: 0, idx: [] }; let i = 0, idx = [], score = 0; for (let k = 0; k < s.length && i < q.length; k++) if (s[k] === q[i]) { idx.push(k); score += (k === 0 || s[k - 1] === ' ') ? 3 : 1; i++; } return { ok: i === q.length, score, idx }; };
const hl = (s, idx) => { const set = new Set(idx); return [...s].map((c, i) => set.has(i) ? `<mark>${esc(c)}</mark>` : esc(c)).join(''); };
const renderPalette = () => {
  const q = pInput.value.trim();
  pItems = ACTIONS.map(a => ({ a, m: fuzzy(q, a.label) })).filter(x => x.m.ok).sort((x, y) => y.m.score - x.m.score).slice(0, 12);
  pSel = Math.min(pSel, Math.max(0, pItems.length - 1));
  pList.innerHTML = pItems.length ? pItems.map((x, i) => `<li role="option" data-i="${i}" class="${i === pSel ? 'is-selected' : ''}" aria-selected="${i === pSel}"><span class="pi-icon">${esc(x.a.icon)}</span><span>${hl(x.a.label, x.m.idx)}</span><span class="pi-group">${esc(x.a.hint)}</span></li>`).join('') : '<li class="empty">No matches</li>';
  pList.querySelector('.is-selected')?.scrollIntoView({ block: 'nearest' });
};
const openPalette = () => { palette.hidden = false; document.body.classList.add('no-scroll'); pInput.value = ''; pSel = 0; renderPalette(); pInput.focus(); };
const closePalette = () => { palette.hidden = true; if (terminal.hidden) document.body.classList.remove('no-scroll'); };
$('#paletteBtn').addEventListener('click', openPalette);
pInput.addEventListener('input', () => { pSel = 0; renderPalette(); });
pInput.addEventListener('keydown', e => {
  if (e.key === 'ArrowDown') { e.preventDefault(); pSel = (pSel + 1) % pItems.length; renderPalette(); }
  else if (e.key === 'ArrowUp') { e.preventDefault(); pSel = (pSel - 1 + pItems.length) % pItems.length; renderPalette(); }
  else if (e.key === 'Enter') { e.preventDefault(); pItems[pSel]?.a.run(); }
});
pList.addEventListener('click', e => { const li = e.target.closest('li[data-i]'); if (li) pItems[+li.dataset.i].a.run(); });
pList.addEventListener('pointermove', e => { const li = e.target.closest('li[data-i]'); if (li && +li.dataset.i !== pSel) { pSel = +li.dataset.i; renderPalette(); } });
palette.addEventListener('click', e => { if (e.target === palette) closePalette(); });

/* ---------------------------------------------------------------
   TERMINAL
---------------------------------------------------------------- */
const terminal = $('#terminal'), tBody = $('#termBody'), tInput = $('#termInput'), tForm = $('#termForm');
let termBooted = false, history_ = [], hIdx = -1;
const closeTerminal = () => { terminal.hidden = true; if (palette.hidden) document.body.classList.remove('no-scroll'); };
$('#terminalBtn').addEventListener('click', openTerminal);
$('#termClose').addEventListener('click', closeTerminal);
terminal.addEventListener('click', e => { if (e.target === terminal) closeTerminal(); else tInput.focus(); });
const print = (html, cls = 'out') => { const d = document.createElement('div'); d.className = cls; d.innerHTML = html; tBody.appendChild(d); tBody.scrollTop = tBody.scrollHeight; };
const line = (k, v) => `<span class="acc">${k.padEnd(14)}</span>${v}`;
const bootTerminal = () => {
  termBooted = true;
  print(`<span class="mut">Last login: ${new Date().toDateString()} on ttys001</span>`);
  print(`<span class="cy">
 ███╗   ███╗███╗   ███╗
 ████╗ ████║████╗ ████║   <span class="out">Mazen Maalaoui</span>
 ██╔████╔██║██╔████╔██║   <span class="mut">Tech Lead · Full Stack Engineer</span>
 ██║╚██╔╝██║██║╚██╔╝██║   <span class="mut">Laravel / PHP · Java / Spring Boot</span>
 ██║ ╚═╝ ██║██║ ╚═╝ ██║
 ╚═╝     ╚═╝╚═╝     ╚═╝</span>`);
  print(`Welcome. Type <span class="ok">help</span> to see what you can do. <span class="mut">(Tab completes, ↑↓ for history, esc closes)</span>\n`);
};
const CMDS = {
  help: () => [
    `<span class="mut">Available commands</span>`,
    line('whoami', 'who is this guy'), line('summary', 'professional summary'), line('experience', 'career timeline'), line('role &lt;id&gt;', 'details for one role (ids: ' + ROLES.map(r => r.id).join(', ') + ')'),
    line('skills [area]', 'skills, optionally filtered by area'), line('projects', 'selected work'), line('recommendations', 'what colleagues say'), line('impact', 'performance numbers'), line('education', 'degrees'), line('languages', 'spoken languages'), line('interests', 'off-hours'),
    line('contact', 'how to reach me'), line('resume', 'download the PDF'), line('linkedin', 'open LinkedIn'), line('theme', 'toggle light/dark'), line('neofetch', 'system info, sort of'), line('ls', 'list sections'), line('cat &lt;file&gt;', 'read a file'), line('clear', 'clear the screen'), line('exit', 'close terminal'),
  ].join('\n'),
  whoami: () => `mazen — Technical Lead and Full Stack Engineer, 9+ years. Currently <span class="cy">Tech Lead</span> at Bsamply (a Dedagroup company), holding three concurrent roles within the holding.`,
  summary: () => `Technical Lead and Full Stack Engineer with 9+ years of experience building, modernizing, and scaling enterprise web platforms across the Laravel/PHP and Java/Spring Boot ecosystems. Currently lead the modernization of a mission-critical platform: consolidating applications, decoupling services, and shipping AI-powered features, including a proprietary LLM. Strong command of high-performance PHP (Laravel Octane, FrankenPHP), event-driven architecture, and cloud-native delivery on Docker, Kubernetes, and GCP, backed by a rigorous testing and static-analysis culture. Grew from Backend Developer to Tech Lead through a company acquisition, mentoring engineers and aligning architecture with business goals.`,
  experience: () => ROLES.slice().reverse().map(r => `<span class="cy">${fmt(r.start).padEnd(9)}→ ${fmt(r.end).padEnd(9)}</span> <span class="acc">${r.kind === 'concurrent' ? '┆' : '│'}</span> ${esc(r.title)} <span class="mut">@ ${esc(r.company)} [${r.id}]</span>`).join('\n') + `\n<span class="mut">★ Jul 2022 — Bsamply acquired by Dedagroup. Use</span> role &lt;id&gt; <span class="mut">for details.</span>`,
  role: (arg) => { const r = byId[arg]; if (!r) return `<span class="err">unknown role "${esc(arg || '')}". Try: ${ROLES.map(r => r.id).join(', ')}</span>`; return `<span class="cy">${esc(r.title)}</span>${r.project ? ` · ${esc(r.project)}` : ''}\n<span class="mut">${esc(r.company)} · ${fmt(r.start)} – ${fmt(r.end)} (${dur(r.start, r.end)})</span>\n\n${esc(r.summary)}\n${r.bullets.map(b => `  <span class="acc">•</span> ${esc(b)}`).join('\n')}`; },
  skills: (arg) => { const gs = arg ? SKILL_GROUPS.filter(g => g.name.toLowerCase().includes(arg.toLowerCase())) : SKILL_GROUPS; if (!gs.length) return `<span class="err">no area matches "${esc(arg)}"</span>`; return gs.map(g => `<span class="acc">${esc(g.name)}</span>\n  ${g.items.map(esc).join(' · ')}`).join('\n'); },
  projects: () => PROJECTS.map(p => `<span class="cy">${esc(p.title)}</span> <span class="mut">(${esc(p.year)})</span>\n  ${esc(p.desc)}`).join('\n\n'),
  impact: () => `B/community rebuild:\n  <span class="err">before</span>  worst-case 30 000 ms · typical ~300 ms\n  <span class="ok">after </span>  worst-case &lt;500 ms · typical 50–100 ms\n  <span class="mut">via query optimization, caching, Laravel Octane + FrankenPHP, Kubernetes on GCP</span>`,
  education: () => EDU.map(e => `<span class="cy">${fmt(e.start)} – ${fmt(e.end)}</span>  ${esc(e.summary)}`).join('\n'),
  languages: () => `Arabic   <span class="ok">native</span>\nEnglish  <span class="ok">B2</span>\nPHP, Java, JavaScript, TypeScript, SQL  <span class="mut">(also fluent)</span>`,
  interests: () => `3D modelling and printing 🧊  ·  Gaming 🎮\n<span class="mut">Scroll to “Education & beyond” to print a model in your browser.</span>`,
  recommendations: () => RECS.map(r => `<span class="cy">${esc(r.name)}</span> <span class="mut">— ${esc(r.title)} · ${esc(r.date)}</span>\n  “${esc(r.pull)}”`).join('\n\n') + `\n<span class="mut">Full text in the “What colleagues say” section, or</span> cd testimonials`,
  contact: () => `email     <a href="mailto:mazenelmaalaoui@gmail.com">mazenelmaalaoui@gmail.com</a>\nlinkedin  <a href="https://linkedin.com/in/mazen-maalaoui" target="_blank" rel="noopener">linkedin.com/in/mazen-maalaoui</a>\nphone     +216 28 798 741\nlocation  Tunisia`,
  resume: () => { const a = document.createElement('a'); a.href = 'Mazen-Maalaoui-Resume.pdf'; a.download = ''; a.click(); return `<span class="ok">↓ downloading Mazen-Maalaoui-Resume.pdf</span>`; },
  linkedin: () => { open('https://linkedin.com/in/mazen-maalaoui', '_blank', 'noopener'); return `<span class="ok">opening LinkedIn…</span>`; },
  theme: () => { toggleTheme(); return `theme → ${root.dataset.theme}`; },
  neofetch: () => `<span class="cy">mazen</span>@<span class="cy">portfolio</span>\n-----------------\n${line('OS', 'Laravel 12 / PHP 8.4 (Octane + FrankenPHP)')}\n${line('Kernel', 'Spring Boot · Spring Security')}\n${line('Uptime', '9+ years')}\n${line('Shell', 'zsh · Claude Code')}\n${line('Packages', 'Vue · React · Inertia · Tailwind')}\n${line('Containers', 'Docker · Kubernetes · GCP')}\n${line('Queue', 'Kafka · Reverb · Redis')}\n${line('GPU', 'Llama 3.1 8B (fine-tuned)')}\n${line('Team', 'up to 7 engineers')}`,
  ls: () => `about/  experience/  impact/  skills/  projects/  testimonials/  beyond/  contact/  <span class="cy">about.md  resume.pdf</span>`,
  cat: (arg) => { if (/about/.test(arg || '')) return CMDS.summary(); if (/resume/.test(arg || '')) return CMDS.resume(); return `<span class="err">cat: ${esc(arg || '')}: No such file</span>`; },
  cd: (arg) => { const id = (arg || '').replace(/\/$/, ''); if ($(`#${id}`)) { closeTerminal(); go(`#${id}`); return ''; } return `<span class="err">cd: no such directory: ${esc(arg || '')}</span>`; },
  pwd: () => '/Users/mazen/portfolio',
  date: () => new Date().toString(),
  echo: (arg) => esc(arg || ''),
  sudo: () => `<span class="err">mazen is not in the sudoers file. This incident will be reported.</span> <span class="mut">(to the Tech Lead. who is also mazen.)</span>`,
  vim: () => `<span class="mut">You are now trapped in vim. Press esc to close the terminal instead.</span>`,
  clear: () => { tBody.innerHTML = ''; return null; },
  exit: () => { closeTerminal(); return null; },
};
CMDS.kudos = CMDS.recommendations; CMDS.testimonials = CMDS.recommendations; CMDS.quit = CMDS.exit; CMDS.man = CMDS.help; CMDS['?'] = CMDS.help; CMDS.about = CMDS.summary; CMDS.work = CMDS.experience; CMDS.stack = CMDS.skills;
tForm.addEventListener('submit', e => {
  e.preventDefault();
  const raw = tInput.value.trim(); tInput.value = ''; if (!raw) return;
  history_.push(raw); hIdx = history_.length;
  print(`<span class="ok">mazen@portfolio</span> <span class="cy">~</span> $ <span class="cmd">${esc(raw)}</span>`);
  const [cmd, ...rest] = raw.split(/\s+/); const fn = CMDS[cmd.toLowerCase()];
  if (!fn) { print(`<span class="err">zsh: command not found: ${esc(cmd)}</span> <span class="mut">— try</span> help`); return; }
  const out = fn(rest.join(' ')); if (out) print(out + '\n');
});
tInput.addEventListener('keydown', e => {
  if (e.key === 'ArrowUp') { e.preventDefault(); if (hIdx > 0) tInput.value = history_[--hIdx]; }
  else if (e.key === 'ArrowDown') { e.preventDefault(); hIdx = Math.min(history_.length, hIdx + 1); tInput.value = history_[hIdx] || ''; }
  else if (e.key === 'Tab') { e.preventDefault(); const v = tInput.value.toLowerCase(); const m = Object.keys(CMDS).filter(k => k.startsWith(v)); if (m.length === 1) tInput.value = m[0] + ' '; else if (m.length > 1) print(`<span class="mut">${m.join('  ')}</span>`); }
});

/* Global keys */
addEventListener('keydown', e => {
  const typing = ['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement?.tagName);
  if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); palette.hidden ? openPalette() : closePalette(); return; }
  if (e.key === 'Escape') { closePalette(); closeTerminal(); menu.classList.remove('open'); return; }
  if (!typing && e.key === '`') { e.preventDefault(); terminal.hidden ? openTerminal() : closeTerminal(); }
});

})();
