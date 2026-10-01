document.addEventListener('DOMContentLoaded', () => {
  const imageGrid = document.querySelector('[data-project-images]');
  if (!imageGrid) return;

  const titleElements = document.querySelectorAll('[data-project-title]');
  const countElement = document.querySelector('[data-project-count]');
  const introElement = document.querySelector('[data-project-intro]');
  const heroImage = document.querySelector('[data-project-hero]');
  const projectId = new URLSearchParams(window.location.search).get('project');
  const project = window.APP_DATA.projectCatalogue.find((item) => item.id === projectId);

  if (!project) {
    titleElements.forEach((element) => {
      element.textContent = 'Project not found';
    });
    countElement.textContent = '';
    imageGrid.innerHTML = '<p><a href="projects.html">Browse all projects</a></p>';
    return;
  }

  const renderProject = () => {
    const title = window.APP_UTILS.resolveText(project.title, project.titleAr);
    heroImage.src = project.image;
    heroImage.alt = `${title} interior`;
    introElement.textContent = window.APP_UTILS.translateText(
      'projectGalleryIntro',
      'Browse all photos from this project.'
    );
    titleElements.forEach((element) => {
      element.textContent = title;
    });
    countElement.textContent = `${project.images.length} ${window.APP_UTILS.translateText('photos', 'photos')}`;
    imageGrid.innerHTML = project.images.map((image, index) => `
      <article class="gallery-item reveal">
        <div class="gallery-image">
          <img
            src="${image}"
            alt="${title} - ${index + 1}"
            class="lightbox-trigger"
            data-image="${image}"
            data-caption="${title} - ${index + 1} / ${project.images.length}"
            data-project-id="${project.id}"
            data-image-index="${index}"
          />
        </div>
      </article>
    `).join('');
    document.title = `${title} | ARQO Design`;
  };

  renderProject();
  document.addEventListener('languagechange', renderProject);
});
