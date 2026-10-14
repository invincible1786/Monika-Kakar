const form = document.querySelector('[data-contact-form]');
if (form) {
  const status = form.querySelector('[data-status]');
  const btn = form.querySelector('[data-submit]');
  const label = btn.querySelector('.submit-label');

  function validate(field) {
    const err = field.querySelector('[data-error]');
    if (!err) return true;
    const controls = [...field.querySelectorAll('input, select, textarea')].filter((c) => c.type !== 'hidden');
    const bad = controls.find((c) => !c.validity.valid);
    if (bad) {
      const v = bad.validity;
      err.textContent = v.valueMissing ? field.dataset.required
        : (v.patternMismatch || v.typeMismatch) ? field.dataset.invalid : bad.validationMessage;
      err.hidden = false;
      controls.forEach((c) => c.setAttribute('aria-invalid', 'true'));
      return false;
    }
    err.hidden = true;
    controls.forEach((c) => c.removeAttribute('aria-invalid'));
    return true;
  }

  const fields = [...form.querySelectorAll('[data-field]')];
  // Validate on blur, and re-check as the person fixes a field
  fields.forEach((f) => {
    f.addEventListener('focusout', () => validate(f));
    f.addEventListener('input', () => { if (f.querySelector('[aria-invalid="true"]')) validate(f); });
    f.addEventListener('change', () => { if (f.querySelector('[aria-invalid="true"]')) validate(f); });
  });

  const setLoading = (on) => {
    btn.setAttribute('aria-busy', String(on));
    btn.disabled = on;
    label.textContent = on ? 'Sending' : 'Send enquiry';
  };

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    status.textContent = '';
    const results = fields.map(validate);
    if (results.includes(false)) {
      fields[results.indexOf(false)].querySelector('input, select, textarea').focus();
      status.textContent = 'Please check the fields marked above.';
      return;
    }
    setLoading(true);
    try {
      const res = await fetch(form.action, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } });
      const data = await res.json();
      if (!res.ok || !data.success) throw new Error(data.message || 'Request failed');
      window.plausible?.('Form Submit');
      location.assign('/thank-you/');
    } catch {
      setLoading(false);
      window.turnstile?.reset();
      const phone = form.dataset.phone || '+91 98725 24445';
      status.innerHTML = `Your enquiry could not be sent. Please try again, or call Monika directly at <a class="underline" href="tel:${phone}">${phone}</a>.`;
    }
  });
}
