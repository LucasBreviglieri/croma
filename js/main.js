/* CROMA — Progressive Enhancement & Interatividade */
(() => {
  'use strict';
  
  const root = document.documentElement;
  const header = document.getElementById('site-header');
  const menuButton = document.querySelector('.menu-toggle');
  const menu = document.getElementById('main-nav');
  const navLinks = [...document.querySelectorAll('.nav-link')];
  const motionButton = document.querySelector('.motion-toggle');
  const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
  let motionPaused = motionPreference.matches;
  let userChangedMotion = false;

  // --- Menu Mobile ---
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

  // --- Controle de Animações (Acessibilidade) ---
  const applyMotionSetting = () => {
    root.classList.toggle('motion-paused', motionPaused);
    motionButton?.setAttribute('aria-pressed', String(motionPaused));
    const label = motionButton?.querySelector('.motion-label');
    if (label) label.textContent = motionPaused ? 'Animações pausadas' : 'Pausar animações';
    if (motionPaused) document.querySelectorAll('.reveal').forEach(el => el.classList.add('is-visible'));
  };

  motionButton?.addEventListener('click', () => {
    userChangedMotion = true;
    motionPaused = !motionPaused;
    applyMotionSetting();
  });

  motionPreference.addEventListener?.('change', event => {
    if (!userChangedMotion) {
      motionPaused = event.matches;
      applyMotionSetting();
    }
  });
  
  applyMotionSetting();

  // --- Intersection Observer (Reveal on Scroll) ---
  if ('IntersectionObserver' in window && !motionPaused) {
    root.classList.add('js');
    const revealObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.06, rootMargin: '0px 0px -15px 0px' });
    
    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
  }

  // --- Scroll State (Menu Ativo e Fundo do Header) ---
  const sections = [...document.querySelectorAll('main > section[id]')];
  let scrollScheduled = false;
  let currentSection = '';
  
  const updateScrollState = () => {
    scrollScheduled = false;
    header?.classList.toggle('is-scrolled', window.scrollY > 12);
    const activationLine = (header?.offsetHeight || 86) + 150;
    let active = sections[0]?.id;
    
    sections.forEach(section => {
      if (section.getBoundingClientRect().top <= activationLine) active = section.id;
    });
    
    if (active === currentSection) return;
    currentSection = active;
    
    navLinks.forEach(link => {
      const selected = link.getAttribute('href') === `#${active}`;
      link.classList.toggle('is-active', selected);
      if (selected) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  };

  window.addEventListener('scroll', () => {
    if (!scrollScheduled) {
      scrollScheduled = true;
      window.requestAnimationFrame(updateScrollState);
    }
  }, { passive: true });
  
  updateScrollState();
})();