import gsap from 'gsap';
import Splitting from "splitting";

export default () => {
  const splittingTitle = [...document.querySelectorAll('.anim-splitting-title')];
  const splittingText = [...document.querySelectorAll('.anim-splitting-text')];
  const tlTitle = gsap.timeline();
  const tlText = gsap.timeline();

  [...splittingTitle, ...splittingText].forEach(letters => {
    Splitting({ target: letters, by: 'chars' });
  });

  gsap.set('.anim-splitting-title', {perspective: 400});
  gsap.defaults({
    ease: 'back'
  });

  tlTitle.from('.anim-splitting-title .char', {
    duration: 0.8,
    opacity: 0,
    scale: 0,
    y: 80,
    stagger: 0.01
  }, '+=0');

  tlText.from('.anim-splitting-text .char', {
    duration: 0.8,
    opacity: 0,
    y: '30%',
    stagger: 0.01
  }, '+=0');
}
