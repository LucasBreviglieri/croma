export function initCarousel() {
  const track = document.querySelector('.clients-grid');
  const dotsContainer = document.querySelector('.carousel-dots');
  
  if (!track || !dotsContainer) return;
  
  const cards = Array.from(track.children);
  if(cards.length === 0) return;

  cards.forEach((_, i) => {
      const dot = document.createElement('button');
      dot.classList.add('carousel-dot');
      if (i === 0) dot.classList.add('is-active');
      dot.setAttribute('aria-label', `Ir para o cliente ${i + 1}`);
      
      dot.addEventListener('click', () => {
          const cardLeft = cards[i].offsetLeft;
          track.scrollTo({ left: cardLeft, behavior: 'smooth' });
          resetAutoScroll();
      });
      dotsContainer.appendChild(dot);
  });

  const dots = Array.from(dotsContainer.children);

  track.addEventListener('scroll', () => {
      const scrollPos = track.scrollLeft;
      const cardWidth = cards[0].offsetWidth + 14; 
      const currentIndex = Math.round(scrollPos / cardWidth);
      
      dots.forEach((dot, index) => {
          dot.classList.toggle('is-active', index === currentIndex);
      });
  }, { passive: true });

  let autoScrollInterval;
  
  const startAutoScroll = () => {
      autoScrollInterval = setInterval(() => {
          const scrollPos = track.scrollLeft;
          const maxScroll = track.scrollWidth - track.clientWidth;
          const cardWidth = cards[0].offsetWidth + 14;

          if (scrollPos >= maxScroll - 10) {
              track.scrollTo({ left: 0, behavior: 'smooth' });
          } else {
              track.scrollTo({ left: scrollPos + cardWidth, behavior: 'smooth' });
          }
      }, 3000); 
  };

  const resetAutoScroll = () => {
      clearInterval(autoScrollInterval);
      startAutoScroll();
  };

  track.addEventListener('mouseenter', () => clearInterval(autoScrollInterval));
  track.addEventListener('mouseleave', startAutoScroll);
  track.addEventListener('touchstart', () => clearInterval(autoScrollInterval), {passive: true});
  track.addEventListener('touchend', startAutoScroll, {passive: true});

  startAutoScroll();
}