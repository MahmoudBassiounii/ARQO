document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('aurelia-theme') || 'light';
  document.body.setAttribute('data-theme', savedTheme === 'dark' ? 'dark' : 'light');

  const toggleButtons = document.querySelectorAll('[data-theme-toggle]');
  const setToggleLabel = () => {
    toggleButtons.forEach((button) => {
      const isDark = document.body.getAttribute('data-theme') === 'dark';
      button.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
      button.innerHTML = isDark ? '☀' : '☾';
    });
  };

  setToggleLabel();

  toggleButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const nextTheme = document.body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      document.body.setAttribute('data-theme', nextTheme);
      localStorage.setItem('aurelia-theme', nextTheme);
      setToggleLabel();
    });
  });
});
