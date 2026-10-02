document.addEventListener('DOMContentLoaded', () => {
  const lightbox = document.querySelector('[data-lightbox]');
  if (!lightbox) return;

  const image = lightbox.querySelector('img');
  const captionElement = lightbox.querySelector('.lightbox-caption');
  const content = lightbox.querySelector('.lightbox-content');
  const navigation = document.createElement('div');
  navigation.className = 'lightbox-navigation';
  navigation.innerHTML = `
    <button class="lightbox-previous" type="button" aria-label="${window.APP_UTILS.translateText('previousPhoto', 'Previous photo')}">‹</button>
    <button class="lightbox-next" type="button" aria-label="${window.APP_UTILS.translateText('nextPhoto', 'Next photo')}">›</button>
  `;
  content.append(navigation);
  const updateNavigationLabels = () => {
    navigation.querySelector('.lightbox-previous').setAttribute(
      'aria-label',
      window.APP_UTILS.translateText('previousPhoto', 'Previous photo')
    );
    navigation.querySelector('.lightbox-next').setAttribute(
      'aria-label',
      window.APP_UTILS.translateText('nextPhoto', 'Next photo')
    );
  };

  const close = () => lightbox.classList.remove('active');
  let images = [];
  let imageIndex = 0;
  let projectTitle = '';

  const showImage = (index) => {
    imageIndex = (index + images.length) % images.length;
    image.src = images[imageIndex];
    image.alt = `${projectTitle} - ${imageIndex + 1}`;
    captionElement.textContent = `${projectTitle} - ${imageIndex + 1} / ${images.length}`;
  };

  const moveImage = (step) => {
    if (images.length > 1) showImage(imageIndex + step);
  };

  document.addEventListener('click', (event) => {
    const trigger = event.target.closest('.lightbox-trigger');
    if (trigger) {
      const project = window.APP_DATA.projectCatalogue.find(
        (item) => item.id === trigger.dataset.projectId
      );
      images = project?.images || [trigger.dataset.image];
      projectTitle = project
        ? window.APP_UTILS.resolveText(project.title, project.titleAr)
        : trigger.dataset.caption || 'Project visual';
      showImage(Number(trigger.dataset.imageIndex) || 0);
      lightbox.classList.add('active');
      return;
    }

    if (event.target.closest('.lightbox-previous')) {
      moveImage(-1);
      return;
    }

    if (event.target.closest('.lightbox-next')) {
      moveImage(1);
      return;
    }

    if (event.target === lightbox || event.target.closest('[data-close-lightbox]')) {
      close();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') close();
    if (!lightbox.classList.contains('active')) return;
    if (event.key === 'ArrowLeft') moveImage(-1);
    if (event.key === 'ArrowRight') moveImage(1);
  });

  document.addEventListener('languagechange', updateNavigationLabels);
});
