export function initMenu() {
  const header = document.getElementById('site-header');
  const menuButton = document.querySelector('.menu-toggle');
  const menu = document.getElementById('main-nav');

  const closeMenu = (restoreFocus = false) => {
    if (!menuButton || !menu) return;
    const wasOpen = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Abrir menu');
    menu.classList.remove('is-open');
    if (restoreFocus && wasOpen) menuButton.focus();
  };

  menuButton?.addEventListener('click', () => {
    const willOpen = menuButton.getAttribute('aria-expanded') !== 'true';
    menuButton.setAttribute('aria-expanded', String(willOpen));
    menuButton.setAttribute('aria-label', willOpen ? 'Fechar menu' : 'Abrir menu');
    menu?.classList.toggle('is-open', willOpen);
  });

  menu?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => closeMenu()));
  
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') closeMenu(true);
  });
  
  document.addEventListener('click', event => {
    if (header && !header.contains(event.target)) closeMenu();
  });
  
  window.addEventListener('resize', () => {
    if (window.innerWidth > 940) closeMenu();
  }, { passive: true });
}