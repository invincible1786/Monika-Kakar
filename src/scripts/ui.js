const html = document.documentElement;

/* Header: toggle data-scrolled when the sentinel leaves the viewport (no scroll listener) */
const header = document.querySelector('[data-header]');
const sentinel = document.querySelector('[data-header-sentinel]');
if (header && sentinel && 'IntersectionObserver' in window) {
  new IntersectionObserver(([e]) => header.toggleAttribute('data-scrolled', !e.isIntersecting)).observe(sentinel);
}

/* Mobile menu */
const toggle = document.querySelector('[data-menu-toggle]');
const menu = document.querySelector('[data-menu]');
if (toggle && menu) {
  const setOpen = (open, { returnFocus = true } = {}) => {
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    menu.toggleAttribute('data-open', open);
    menu.toggleAttribute('inert', !open);
    html.classList.toggle('menu-open', open);
    html.style.overflow = open ? 'hidden' : '';
    if (open) menu.querySelector('a')?.focus({ preventScroll: true });
    else if (returnFocus) toggle.focus({ preventScroll: true });
  };
  toggle.addEventListener('click', () => setOpen(toggle.getAttribute('aria-expanded') !== 'true'));
  menu.addEventListener('click', (e) => { if (e.target.closest('a')) setOpen(false, { returnFocus: false }); });
  addEventListener('keydown', (e) => { if (e.key === 'Escape' && menu.hasAttribute('data-open')) setOpen(false); });
  matchMedia('(min-width: 768px)').addEventListener('change', (m) => { if (m.matches) setOpen(false, { returnFocus: false }); });
}

/* Conversion tracking: any element with data-track="Event Name" */
document.addEventListener('click', (e) => {
  const el = e.target.closest('[data-track]');
  if (el && el.dataset.track !== 'Form Submit') window.plausible?.(el.dataset.track);
});
