const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const hasIO = 'IntersectionObserver' in window;

/* 1. Scroll reveal: [data-reveal] and children of [data-reveal-group] */
function initReveal() {
  const targets = document.querySelectorAll('[data-reveal], [data-reveal-group] > *');
  if (reduce || !hasIO) { targets.forEach((el) => el.classList.add('is-visible')); return; }
  const io = new IntersectionObserver((entries) => {
    for (const e of entries) {
      if (!e.isIntersecting) continue;
      e.target.classList.add('is-visible');
      io.unobserve(e.target);
    }
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.1 });
  targets.forEach((el) => io.observe(el));
}

/* 2. Count-up: final value is already in the HTML, so no-JS and reduced motion show it */
function initCounters() {
  const els = document.querySelectorAll('[data-count]');
  if (!els.length || reduce || !hasIO) return;
  const ease = (t) => 1 - Math.pow(1 - t, 3);
  const run = (el) => {
    const end = Number(el.dataset.count);
    const t0 = performance.now();
    const tick = (now) => {
      const p = Math.min(1, (now - t0) / 1200);
      el.textContent = Math.round(end * ease(p));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };
  const io = new IntersectionObserver((entries) => {
    for (const e of entries) {
      if (!e.isIntersecting) continue;
      io.unobserve(e.target);
      run(e.target);
    }
  }, { threshold: 0.6 });
  els.forEach((el) => io.observe(el));
}

/* 3. Timeline line: native scroll-driven animation if available, else IO-gated rAF scroll */
function initTimelines() {
  document.querySelectorAll('[data-timeline]').forEach((tl) => {
    const fill = tl.querySelector('[data-timeline-fill]');
    if (!fill) return;
    if (reduce) { fill.style.transform = 'scaleY(1)'; return; }
    if (window.CSS && CSS.supports('animation-timeline: view()')) { tl.classList.add('tl-native'); return; }
    if (!hasIO) { fill.style.transform = 'scaleY(1)'; return; }

    let ticking = false;
    const update = () => {
      const r = tl.getBoundingClientRect();
      const p = Math.min(1, Math.max(0, (innerHeight * 0.6 - r.top) / r.height));
      fill.style.transform = `scaleY(${p})`;
      ticking = false;
    };
    const onScroll = () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } };
    new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { addEventListener('scroll', onScroll, { passive: true }); update(); }
      else removeEventListener('scroll', onScroll);
    }).observe(tl);
  });
}

initReveal();
initCounters();
initTimelines();
window.__ready = true;
