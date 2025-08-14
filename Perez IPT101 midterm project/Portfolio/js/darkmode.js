document.addEventListener('DOMContentLoaded', () => {
  const DARK_KEY = 'portfolio_dark_mode';
  const toggleBtn = document.getElementById('darkToggle');

  // initialize
  const saved = localStorage.getItem(DARK_KEY);
  if (saved === '1') document.body.classList.add('dark');

  toggleBtn.addEventListener('click', () => {
    const isDark = document.body.classList.toggle('dark');
    localStorage.setItem(DARK_KEY, isDark ? '1' : '0');
    // update icon
    toggleBtn.textContent = isDark ? '☀️' : '🌙';
  });

  // set initial icon
  toggleBtn.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});