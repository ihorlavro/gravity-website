import letters from './modules/letters';
import header from './modules/header';

window.addEventListener('load', () => {
  setTimeout(() => {
    letters();
    header();
  }, 100);
});
