document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.setAttribute('aria-expanded', navLinks.classList.contains('active'));
  });

  
  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      if (navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
      }
    });
  });
});
