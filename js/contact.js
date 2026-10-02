document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.querySelector('[data-contact-form]');
  if (!contactForm) return;

  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    window.APP_UTILS.showToast(
      window.APP_UTILS.translateText(
        'contactSuccess',
        'Thank you. We will contact you within 24 hours.'
      )
    );
    contactForm.reset();
  });
});
