const dialog = document.getElementById('lightbox');
if (dialog) {
  const img = dialog.querySelector('img');
  const title = dialog.querySelector('#lightbox-title');

  document.querySelectorAll('[data-cert]').forEach((btn) => {
    btn.addEventListener('click', () => {
      img.src = btn.dataset.full;
      img.alt = `Certificate: ${btn.dataset.label}`;
      title.textContent = btn.dataset.label;
      dialog.showModal();
      document.documentElement.style.overflow = 'hidden';
    });
  });

  // Click on the backdrop (outside the dialog box) closes it
  dialog.addEventListener('click', (e) => { if (e.target === dialog) dialog.close(); });
  dialog.addEventListener('close', () => { document.documentElement.style.overflow = ''; img.removeAttribute('src'); });
}
