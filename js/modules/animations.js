export function initAnimations() {
  const root = document.documentElement;
  const motionButton = document.querySelector('.motion-toggle');
  const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
  let motionPaused = motionPreference.matches;
  let userChangedMotion = false;

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

  // Intersection Observer (Animações de rolagem)
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
}