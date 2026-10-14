const root = document.querySelector('[data-tabs]');
if (root) {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const tabs = [...root.querySelectorAll('[role="tab"]')];
  const panels = [...root.querySelectorAll('[data-panel]')];

  // Add tab semantics only when JS is running (no-JS shows plain stacked sections)
  panels.forEach((p) => {
    const t = tabs.find((x) => x.getAttribute('aria-controls') === p.id);
    p.setAttribute('role', 'tabpanel');
    p.setAttribute('aria-labelledby', t ? t.id : `tab-${p.id}`);
    p.tabIndex = 0;
  });

  function activate(slug, { focus = false, updateHash = true, scroll = false } = {}) {
    tabs.forEach((t) => {
      const on = t.dataset.tab === slug;
      t.setAttribute('aria-selected', String(on));
      t.tabIndex = on ? 0 : -1;
      if (on && focus) t.focus();
      if (on) t.scrollIntoView({ inline: 'nearest', block: 'nearest' });
    });
    panels.forEach((p) => {
      const on = p.id === slug;
      p.classList.toggle('is-active', on);
      p.classList.remove('is-entering');
      if (on) { void p.offsetWidth; p.classList.add('is-entering'); }
    });
    if (updateHash) history.replaceState(null, '', `#${slug}`);
    if (scroll) root.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
  }

  tabs.forEach((t, i) => {
    t.addEventListener('click', () => activate(t.dataset.tab));
    t.addEventListener('keydown', (e) => {
      const last = tabs.length - 1;
      const next = { ArrowRight: i === last ? 0 : i + 1, ArrowLeft: i === 0 ? last : i - 1, Home: 0, End: last }[e.key];
      if (next === undefined) return;
      e.preventDefault();
      activate(tabs[next].dataset.tab, { focus: true });
    });
  });

  // Deep links: /#english, /#psychology, /#political-science, /#sociology
  const fromHash = () => {
    const slug = location.hash.slice(1);
    if (tabs.some((t) => t.dataset.tab === slug)) activate(slug, { updateHash: false, scroll: true });
  };
  addEventListener('hashchange', fromHash);
  fromHash();
}
