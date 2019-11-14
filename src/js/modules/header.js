import gsap from 'gsap';

export default () => {
  gsap.defaults({
    ease: 'back'
  });

  gsap.from('.anim-fade-scale-up', {
    duration: 0.8,
    opacity: 0,
    scale: 0,
    y: 80
  });

  gsap.from('.anim-fade-left', {
    duration: 0.8,
    opacity: 0,
    x: '100%'
  });
}
