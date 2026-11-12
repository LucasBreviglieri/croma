export function initCarousel() {
  const wrapper = document.querySelector('.carousel-wrapper');
  if (!wrapper) return;

  const grid = wrapper.querySelector('.clients-grid');
  const cards = wrapper.querySelectorAll('.client-card');
  const prevBtn = wrapper.querySelector('.arrow-btn.prev');
  const nextBtn = wrapper.querySelector('.arrow-btn.next');
  const counter = wrapper.querySelector('.carousel-counter');
  
  if (!grid || !cards.length) return;

  const totalCards = cards.length;

  const updateControls = () => {
    const gridWidth = grid.offsetWidth;
    const cardWidth = cards[0].offsetWidth;
    const scrollLeft = grid.scrollLeft;
    
    const visibleCards = Math.round(gridWidth / cardWidth);
    
    const currentIndex = Math.round(scrollLeft / cardWidth);
    
    const startCard = Math.min(currentIndex + 1, totalCards);
    const endCard = Math.min(currentIndex + visibleCards, totalCards);

    if (counter) {
      counter.textContent = `${startCard}-${endCard} / ${totalCards}`;
    }
  };

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      const cardWidth = cards[0].offsetWidth;
      grid.scrollBy({ left: cardWidth, behavior: 'smooth' });
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      const cardWidth = cards[0].offsetWidth;
      grid.scrollBy({ left: -cardWidth, behavior: 'smooth' });
    });
  }

  grid.addEventListener('scroll', () => {
    requestAnimationFrame(updateControls);
  });

  window.addEventListener('resize', updateControls);
  
  updateControls();
}