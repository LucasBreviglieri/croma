export function initScroll() {
  const header = document.getElementById('site-header');
  const navLinks = [...document.querySelectorAll('.nav-link')];
  // Pega as sections dinâmicas que foram injetadas
  const sections = [...document.querySelectorAll('main section[id]')];
  
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
}