const button = document.querySelector('.menu-button');
const nav = document.querySelector('nav');
button?.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  button.setAttribute('aria-expanded', isOpen);
  button.textContent = isOpen ? 'Close' : 'Menu';
});
nav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  nav.classList.remove('open');
  button?.setAttribute('aria-expanded', 'false');
  if (button) button.textContent = 'Menu';
}));
