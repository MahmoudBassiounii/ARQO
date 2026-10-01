document.addEventListener('DOMContentLoaded', () => {
  const quoteForm = document.querySelector('[data-quote-form]');
  if (!quoteForm) return;

  quoteForm.addEventListener('submit', (event) => {
    event.preventDefault();
    window.APP_UTILS.showToast('Your request has been received successfully.');
    quoteForm.reset();
  });
});
