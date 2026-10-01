document.addEventListener('DOMContentLoaded', () => {
  const projectGrid = document.querySelector('[data-project-grid]');
  const filterButtons = document.querySelectorAll('[data-filter]');

  if (!projectGrid) return;

  const renderProjects = (items = window.APP_DATA.projectCatalogue) => {
    projectGrid.innerHTML = items.map((project) => {
      const title = window.APP_UTILS.resolveText(project.title, project.titleAr);
      const category = window.APP_UTILS.resolveText(project.category, project.categoryAr);
      const description = window.APP_UTILS.resolveText(project.description, project.descriptionAr);
      const tags = window.APP_UTILS.resolveText(project.tags, project.tagsAr) || [];

      return `
        <a class="project-card reveal" href="project.html?project=${encodeURIComponent(project.id)}">
          <div class="project-image">
            <img src="${project.image}" alt="${title}" />
          </div>
          <div class="project-body">
            <div class="project-meta">
              <span>${category}</span>
              <span>${project.images.length} ${window.APP_UTILS.translateText('photos', 'photos')}</span>
            </div>
            <h3>${title}</h3>
            <p>${description}</p>
            <div class="project-tags">
              ${tags.map((tag) => `<span class="tag">${tag}</span>`).join('')}
            </div>
          </div>
        </a>
      `;
    }).join('');
  };

  renderProjects();

  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      filterButtons.forEach((btn) => btn.classList.remove('active'));
      button.classList.add('active');
      const filter = button.dataset.filter;
      const filteredProjects = filter === 'all'
        ? window.APP_DATA.projectCatalogue
        : window.APP_DATA.projectCatalogue.filter((project) => project.category === filter);
      renderProjects(filteredProjects);
    });
  });

  document.addEventListener('languagechange', () => {
    const activeFilter = document.querySelector('[data-filter].active')?.dataset.filter || 'all';
    const filteredProjects = activeFilter === 'all'
      ? window.APP_DATA.projectCatalogue
      : window.APP_DATA.projectCatalogue.filter((project) => project.category === activeFilter);
    renderProjects(filteredProjects);
  });
});
