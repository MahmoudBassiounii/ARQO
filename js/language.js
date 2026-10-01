document.addEventListener('DOMContentLoaded', () => {
  const currentLang = localStorage.getItem('aurelia-language') || 'en';
  const applyLanguage = (lang) => {
    document.body.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', lang);
    document.body.setAttribute('data-lang', lang);

    const nodes = document.querySelectorAll('[data-i18n]');
    nodes.forEach((node) => {
      const key = node.dataset.i18n;
      const text = window.APP_TRANSLATIONS[lang][key];
      if (text) node.textContent = text;
    });

    const titleNodes = document.querySelectorAll('[data-i18n-title]');
    titleNodes.forEach((node) => {
      const key = node.dataset.i18nTitle;
      const text = window.APP_TRANSLATIONS[lang][key];
      if (text) node.textContent = text;
    });

    const placeholderNodes = document.querySelectorAll('[data-i18n-placeholder]');
    placeholderNodes.forEach((node) => {
      const key = node.dataset.i18nPlaceholder;
      const text = window.APP_TRANSLATIONS[lang][key];
      if (text) node.placeholder = text;
    });

    const languageButtons = document.querySelectorAll('[data-language-toggle]');
    languageButtons.forEach((button) => {
      button.textContent = lang === 'ar' ? 'EN' : 'AR';
      button.setAttribute('aria-label', lang === 'ar' ? 'Switch to English' : 'التبديل إلى العربية');
    });
  };

  applyLanguage(currentLang);

  document.querySelectorAll('[data-language-toggle]').forEach((button) => {
    button.addEventListener('click', () => {
      const nextLang = document.body.getAttribute('data-lang') === 'ar' ? 'en' : 'ar';
      localStorage.setItem('aurelia-language', nextLang);
      applyLanguage(nextLang);
      document.dispatchEvent(new CustomEvent('languagechange', { detail: { lang: nextLang } }));
    });
  });
});
