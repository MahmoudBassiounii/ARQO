document.addEventListener('DOMContentLoaded', () => {
  const galleryGrid = document.querySelector('[data-gallery-grid]');
  if (!galleryGrid) return;

  const renderGallery = () => {
    galleryGrid.innerHTML = window.APP_DATA.galleryItems.map((item, index) => {
      const category = window.APP_UTILS.resolveText(item.category, item.categoryAr);
      const title = window.APP_UTILS.resolveText(item.title, item.titleAr);
      const photoNumber = item.imageIndex + 1;
      const caption = `${title} - ${photoNumber} / ${item.imageCount}`;
      return `
        <article class="gallery-item ${item.width === 'large' ? 'large' : ''} reveal reveal-delay-${(index % 3) + 1}">
          <div class="gallery-image">
            <img
              src="${item.image}"
              alt="${caption}"
              class="lightbox-trigger"
              data-image="${item.image}"
              data-caption="${caption}"
              data-project-id="${item.projectId}"
              data-image-index="${item.imageIndex}"
            />
          </div>
          <div class="gallery-body">
            <div class="gallery-meta">
              <span>${category}</span>
              <span>${photoNumber} / ${item.imageCount}</span>
            </div>
            <h3>${title}</h3>
          </div>
        </article>
      `;
    }).join('');
  };

  renderGallery();
  document.addEventListener('languagechange', renderGallery);
});
