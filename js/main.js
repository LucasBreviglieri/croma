import { loadComponents } from './modules/loader.js';
import { initMenu } from './modules/menu.js';
import { initAnimations } from './modules/animations.js';
import { initScroll } from './modules/scroll.js';
import { initCarousel } from './modules/carousel.js'; 

document.addEventListener('DOMContentLoaded', async () => {
  await loadComponents();
  
  initMenu();
  initAnimations();
  initScroll();
  initCarousel(); 
});