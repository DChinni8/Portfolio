/* ════════════════════════════════════════
   PROJECT PAGE — project.js
   Sticky card: aggiorna la sezione attiva
   in base allo scroll della galleria sinistra
   ════════════════════════════════════════ */
'use strict';

document.addEventListener('DOMContentLoaded', () => {

  const gallery  = document.querySelector('.project-gallery');
  const sections = Array.from(document.querySelectorAll('.card-section'));
  if (!gallery || !sections.length) return;

  /* Primo stato attivo */
  sections[0].classList.add('active');

  function update() {
    const rect   = gallery.getBoundingClientRect();
    const height = gallery.offsetHeight - window.innerHeight;
    const prog   = height > 0 ? Math.max(0, Math.min(1, -rect.top / height)) : 0;
    const idx    = Math.min(sections.length - 1, Math.floor(prog * sections.length));

    sections.forEach((s, i) => s.classList.toggle('active', i === idx));
  }

  window.addEventListener('scroll', update, { passive: true });
  update();

  /* Gallery photo reveal */
  const photos = document.querySelectorAll('.gallery-photo');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (!e.isIntersecting) return;
      setTimeout(() => e.target.classList.add('visible'), i * 120);
      obs.unobserve(e.target);
    });
  }, { threshold: 0.12 });
  photos.forEach(p => obs.observe(p));

  /* Gallery video reveal */
  document.querySelectorAll('.gallery-video').forEach(v => {
    const vObs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); vObs.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    vObs.observe(v);
  });

  /* Project lightbox */
  const lb = document.createElement('div');
  lb.className = 'project-lb';
  lb.innerHTML = '<button class="project-lb-close" aria-label="Chiudi">×</button><img class="project-lb-img" src="" alt=""><p class="project-lb-caption"></p>';
  document.body.appendChild(lb);

  function openLb(src, alt) {
    const img = lb.querySelector('.project-lb-img');
    const cap = lb.querySelector('.project-lb-caption');
    img.src = src;
    img.alt = alt;
    cap.textContent = alt || '';
    lb.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeLb() {
    lb.classList.remove('open');
    document.body.style.overflow = '';
  }

  lb.querySelector('.project-lb-close').addEventListener('click', closeLb);
  lb.addEventListener('click', e => { if (e.target === lb) closeLb(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLb(); });

  document.querySelectorAll('.gallery-photo:not(.cover) img').forEach(img => {
    img.addEventListener('click', () => openLb(img.src, img.alt));
  });

});
