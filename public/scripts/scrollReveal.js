import { animate } from 'motion';

const elements = document.querySelectorAll('[data-scroll-reveal]');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animate(entry.target, { opacity: 1, y: 0 }, { duration: 0.6 });
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 },
);

elements.forEach((el) => {
  // Ensure it's initially hidden
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  observer.observe(el);
});
