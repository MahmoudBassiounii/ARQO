document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.querySelector('[data-contact-form]');
  if (!contactForm) return;

  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    window.APP_UTILS.showToast('Thank you, we will contact you within 24 hours.');
    contactForm.reset();
  });
});
