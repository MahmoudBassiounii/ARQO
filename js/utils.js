window.APP_UTILS = {
  select(selector, root = document) {
    return root.querySelector(selector);
  },
  selectAll(selector, root = document) {
    return [...root.querySelectorAll(selector)];
  },
  getCurrentLanguage() {
    return document.body?.getAttribute('data-lang') || localStorage.getItem('aurelia-language') || 'en';
  },
  translateText(key, fallback = '') {
    const lang = this.getCurrentLanguage();
    const value = window.APP_TRANSLATIONS?.[lang]?.[key];
    return value || fallback;
  },
  resolveText(value, arabicValue, lang = this.getCurrentLanguage()) {
    if (lang === 'ar' && arabicValue) {
      return arabicValue;
    }
    return value;
  },
  setActiveNav() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = this.selectAll('.main-nav a, .mobile-nav a');
    navLinks.forEach((link) => {
      const href = link.getAttribute('href');
      if (href === currentPage) {
        link.classList.add('active');
      }
    });
  },
  showToast(message) {
    let toast = document.querySelector('.toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.className = 'toast';
      document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(toast._timer);
    toast._timer = setTimeout(() => toast.classList.remove('show'), 2200);
  }
};
