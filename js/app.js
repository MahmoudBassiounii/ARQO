document.addEventListener('DOMContentLoaded', () => {
  const featuredGrid = document.querySelector('[data-featured-projects]');
  const servicesGrid = document.querySelector('[data-services-grid]');
  const metricsGrid = document.querySelector('[data-metrics-grid]');

  const renderFeaturedProjects = () => {
    if (!featuredGrid) return;

    featuredGrid.innerHTML = window.APP_DATA.featuredProjects.map((project) => {
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

  const renderServices = () => {
    if (!servicesGrid) return;

    servicesGrid.innerHTML = window.APP_DATA.services.map((service, index) => {
      const title = window.APP_UTILS.resolveText(service.title, service.titleAr);
      const description = window.APP_UTILS.resolveText(service.description, service.descriptionAr);
      return `
        <article class="service-card reveal reveal-delay-${(index % 3) + 1}">
          <div class="service-icon">${service.icon}</div>
          <h3>${title}</h3>
          <p>${description}</p>
        </article>
      `;
    }).join('');
  };

  const renderMetrics = () => {
    if (!metricsGrid) return;

    const metrics = [
      { value: '100+', label: 'Projects Delivered', labelAr: 'مشروعات منجزة' },
      { value: '10+', label: 'Years of Craft', labelAr: 'سنوات من الحرفة' },
      { value: '98%', label: 'Client Satisfaction', labelAr: 'رضا العملاء' }
    ];

    metricsGrid.innerHTML = metrics.map((m) => `
      <div class="stat-card reveal">
        <strong>${m.value}</strong>
        <span>${window.APP_UTILS.resolveText(m.label, m.labelAr)}</span>
      </div>
    `).join('');
  };

  renderFeaturedProjects();
  renderServices();
  renderMetrics();

  document.addEventListener('languagechange', () => {
    renderFeaturedProjects();
    renderServices();
    renderMetrics();
  });
});
