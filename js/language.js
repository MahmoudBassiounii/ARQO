document.addEventListener('DOMContentLoaded', () => {
  const currentLang = localStorage.getItem('arqo-language')
    || localStorage.getItem('aurelia-language')
    || 'ar';
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

    const ariaLabelNodes = document.querySelectorAll('[data-i18n-aria-label]');
    ariaLabelNodes.forEach((node) => {
      const key = node.dataset.i18nAriaLabel;
      const text = window.APP_TRANSLATIONS[lang][key];
      if (text) node.setAttribute('aria-label', text);
    });

    const altNodes = document.querySelectorAll('[data-i18n-alt]');
    altNodes.forEach((node) => {
      const key = node.dataset.i18nAlt;
      const text = window.APP_TRANSLATIONS[lang][key];
      if (text) node.alt = text;
    });

    const contentNodes = document.querySelectorAll('[data-i18n-content]');
    contentNodes.forEach((node) => {
      const key = node.dataset.i18nContent;
      const text = window.APP_TRANSLATIONS[lang][key];
      if (text) node.setAttribute('content', text);
    });

    const languageButtons = document.querySelectorAll('[data-language-toggle]');
    languageButtons.forEach((button) => {
      button.textContent = lang === 'ar' ? 'EN' : 'AR';
      button.setAttribute('aria-label', window.APP_TRANSLATIONS[lang].switchLanguage);
    });
  };

  applyLanguage(currentLang);

  document.querySelectorAll('[data-language-toggle]').forEach((button) => {
    button.addEventListener('click', () => {
      const nextLang = document.body.getAttribute('data-lang') === 'ar' ? 'en' : 'ar';
      localStorage.setItem('arqo-language', nextLang);
      applyLanguage(nextLang);
      document.dispatchEvent(new CustomEvent('languagechange', { detail: { lang: nextLang } }));
    });
  });
});
