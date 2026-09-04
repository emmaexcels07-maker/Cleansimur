const button = document.querySelector('.menu-button');
const nav = document.querySelector('#primary-navigation');

const closeNavigation = () => {
  nav?.classList.remove('open');
  button?.setAttribute('aria-expanded', 'false');
  if (button) button.querySelector('span').textContent = 'Menu';
};

button?.addEventListener('click', () => {
  const isOpen = nav?.classList.toggle('open') ?? false;
  button.setAttribute('aria-expanded', String(isOpen));
  button.querySelector('span').textContent = isOpen ? 'Close' : 'Menu';
});

nav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeNavigation));
document.addEventListener('click', (event) => {
  if (nav?.classList.contains('open') && !nav.contains(event.target) && !button?.contains(event.target)) closeNavigation();
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeNavigation();
});
