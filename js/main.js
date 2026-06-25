/* ════════════════════════════════════════
   DIEGO CHINNI PORTFOLIO — main.js
   ════════════════════════════════════════ */
'use strict';

/* ── CUSTOM CURSOR ── */
const cursor = document.createElement('div');
cursor.className = 'cursor';
document.body.appendChild(cursor);

let mouseX = 0, mouseY = 0, curX = 0, curY = 0;

document.addEventListener('mousemove', e => { mouseX = e.clientX; mouseY = e.clientY; });

(function animateCursor() {
  curX += (mouseX - curX) * 0.18;
  curY += (mouseY - curY) * 0.18;
  cursor.style.left = curX + 'px';
  cursor.style.top  = curY + 'px';
  requestAnimationFrame(animateCursor);
})();

document.querySelectorAll('a, button').forEach(el => {
  el.addEventListener('mouseenter', () => cursor.classList.add('is-link'));
  el.addEventListener('mouseleave', () => cursor.classList.remove('is-link'));
});
document.querySelectorAll('.project-item').forEach(el => {
  el.addEventListener('mouseenter', () => cursor.classList.add('is-hovering'));
  el.addEventListener('mouseleave', () => cursor.classList.remove('is-hovering'));
});

/* ── HERO LETTER ANIMATION ── */
function initHero() {
  const nameFirst = document.getElementById('nameFirst');
  const nameLast  = document.getElementById('nameLast');
  const eyebrow   = document.getElementById('heroEyebrow');
  const sub       = document.getElementById('heroSub');
  if (!nameFirst || !nameLast) return;

  function wrapChars(el, word) {
    el.innerHTML = [...word].map((ch, i) =>
      `<span class="name-char" style="transition-delay:${0.04 + i * 0.06}s">${ch}</span>`
    ).join('');
  }
  wrapChars(nameFirst, 'Diego');
  wrapChars(nameLast,  'Chinni');

  setTimeout(() => eyebrow?.classList.add('visible'), 200);
  setTimeout(() => document.querySelectorAll('.name-char').forEach(c => c.classList.add('visible')), 450);
  setTimeout(() => sub?.classList.add('visible'), 900);
}
document.addEventListener('DOMContentLoaded', initHero);

/* ── PROGRESS BAR ── */
const bar = document.createElement('div');
bar.className = 'page-progress';
document.body.appendChild(bar);
window.addEventListener('scroll', () => {
  const p = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
  bar.style.transform = `scaleX(${Math.min(1, p)})`;
}, { passive: true });

/* ── SCROLL REVEAL ── */
document.addEventListener('DOMContentLoaded', () => {
  const els = document.querySelectorAll('.sr, .project-item, .gallery-photo, .viaggio-item');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (!e.isIntersecting) return;
      const delay = +e.target.dataset.delay || i * 60;
      setTimeout(() => e.target.classList.add('visible', 'reveal'), delay);
      obs.unobserve(e.target);
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });
  els.forEach((el, i) => { el.dataset.delay = el.dataset.delay || i * 80; obs.observe(el); });
});

/* ── NAV BLEND ── */
window.addEventListener('scroll', () => {
  const nav = document.getElementById('nav');
  if (nav) nav.style.mixBlendMode = window.scrollY > 80 ? 'normal' : 'difference';
}, { passive: true });
