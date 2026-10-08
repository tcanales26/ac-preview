const toggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(open));
  });
}
document.querySelectorAll('[data-year]').forEach(el => { el.textContent = new Date().getFullYear(); });

// Single-choice button groups (filters, time slots)
document.querySelectorAll('[data-choice]').forEach(group => {
  group.addEventListener('click', e => {
    const btn = e.target.closest('button');
    if (!btn) return;
    group.querySelectorAll('button').forEach(b => b.setAttribute('aria-pressed', String(b === btn)));
  });
});

document.querySelectorAll('form[data-demo]').forEach(form => {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    if (btn) btn.firstChild.textContent = 'Request sent — we will call you shortly ';
  });
});
