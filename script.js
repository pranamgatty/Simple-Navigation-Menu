const header = document.getElementById('siteHeader');
const threshold = 30;

window.addEventListener('scroll', () => {
  if (window.scrollY > threshold) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

const menuItems = document.querySelectorAll('.menu a');

menuItems.forEach((link) => {
  link.addEventListener('mouseenter', () => {
    header.style.boxShadow = '0 15px 35px rgba(56, 217, 255, 0.18)';
  });

  link.addEventListener('mouseleave', () => {
    header.style.boxShadow = window.scrollY > threshold ? '0 18px 40px rgba(0, 0, 0, 0.35)' : 'none';
  });
});
