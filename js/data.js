window.APP_DATA = {
  services: [
    {
      icon: '✦',
      title: 'Interior Design',
      titleAr: 'تصميم داخلي',
      description: 'Concept-driven interiors with refined materials, custom detailing, and a highly tailored experience for every room.',
      descriptionAr: 'تصاميم داخلية قائمة على الفكرة، بمفردات فاخرة، تفاصيل مخصصة، وتجربة متقنة لكل غرفة.'
    },
    {
      icon: '▣',
      title: 'Luxury Finishing',
      titleAr: 'تشطيبات فاخرة',
      description: 'Premium finishes, elevated joinery, decorative plasterwork, and polished execution for lasting visual impact.',
      descriptionAr: 'تشطيبات فاخرة، نجارة راقية، تزيينات جص، وتنفيذ أنيق يترك أثرًا بصريًا دائمًا.'
    },
    {
      icon: '◌',
      title: 'Turnkey Projects',
      titleAr: 'مشروعات متكاملة جاهزة للتسليم',
      description: 'From design consultation to full-site execution, we coordinate every detail to deliver complete, move-in-ready spaces.',
      descriptionAr: 'من الاستشارة إلى التنفيذ الكامل في الموقع، ننسق كل التفاصيل لتسليم مساحات جاهزة للسكن والعمل.'
    },
    {
      icon: '⌂',
      title: 'Renovation',
      titleAr: 'التحديث والتجديد',
      description: 'Thoughtful modernization that respects the architecture while enhancing space, light, and lifestyle.',
      descriptionAr: 'تحديث مدروس يحترم المعمار ويحسن المساحة والضوء ونمط الحياة.'
    },
    {
      icon: '◈',
      title: 'Styling & Decor',
      titleAr: 'التنسيق والديكور',
      description: 'Curated furnishings, layered textures, and art-led styling that completes a cohesive, luxury atmosphere.',
      descriptionAr: 'أثاث مختار بعناية، ملمس متعدد الطبقات، وتنسيق فني يكمّل جوًا فاخرًا متجانسًا.'
    },
    {
      icon: '✧',
      title: 'Project Management',
      titleAr: 'إدارة المشروع',
      description: 'Controlled schedules, procurement coordination, and site supervision from concept to final handover.',
      descriptionAr: 'جدول زمني متحكم به، تنسيق المشتريات، ومتابعة الموقع من الفكرة حتى التسليم النهائي.'
    }
  ],
  featuredProjects: [],
  galleryItems: [],
  projectCatalogue: []
};

const projectImageSet = (folder, filenames) => filenames.map((filename) =>
  encodeURI(`assets/images/${folder}/${filename}`)
);

window.APP_DATA.projectCatalogue = [
  {
    id: 'Project1',
    title: 'Project 1',
    titleAr: 'المشروع الأول',
    images: projectImageSet('Project1', [
      'WhatsApp Image 2026-10-01 at 10.19.06 PM.jpeg',
      'WhatsApp Image 2026-10-01 at 10.19.06 PM (1).jpeg',
      'WhatsApp Image 2026-10-01 at 10.19.06 PM (2).jpeg',
      'WhatsApp Image 2026-10-01 at 10.19.07 PM.jpeg',
      'WhatsApp Image 2026-10-01 at 10.19.07 PM (1).jpeg',
      'WhatsApp Image 2026-10-01 at 10.19.07 PM (2).jpeg',
      'WhatsApp Image 2026-10-01 at 10.19.07 PM (3).jpeg',
      'WhatsApp Image 2026-10-01 at 10.19.07 PM (4).jpeg'
    ])
  },
  {
    id: 'project2',
    title: 'Project 2',
    titleAr: 'المشروع الثاني',
    images: projectImageSet('project2', [
      'WhatsApp Image 2026-10-01 at 10.22.22 PM.jpeg',
      'WhatsApp Image 2026-10-01 at 10.22.22 PM (1).jpeg',
      'WhatsApp Image 2026-10-01 at 10.22.22 PM (2).jpeg',
      'WhatsApp Image 2026-10-01 at 10.22.22 PM (3).jpeg',
      'WhatsApp Image 2026-10-01 at 10.22.22 PM (4).jpeg',
      'WhatsApp Image 2026-10-01 at 10.22.22 PM (5).jpeg'
    ])
  },
  {
    id: 'project3',
    title: 'Project 3',
    titleAr: 'المشروع الثالث',
    images: projectImageSet('project3', [
      'WhatsApp Image 2026-10-01 at 10.26.06 PM.jpeg',
      'WhatsApp Image 2026-10-01 at 10.26.06 PM (1).jpeg',
      'WhatsApp Image 2026-10-01 at 10.26.07 PM.jpeg',
      'WhatsApp Image 2026-10-01 at 10.26.07 PM (1).jpeg'
    ])
  },
  {
    id: 'Project4',
    title: 'Project 4',
    titleAr: 'المشروع الرابع',
    images: projectImageSet('Project4', [
      'WhatsApp Image 2026-10-01 at 10.13.57 PM.jpeg',
      'WhatsApp Image 2026-10-01 at 10.13.57 PM (1).jpeg',
      'WhatsApp Image 2026-10-01 at 10.13.58 PM.jpeg',
      'WhatsApp Image 2026-10-01 at 10.13.58 PM (1).jpeg'
    ])
  },
  {
    id: 'Project5',
    title: 'Project 5',
    titleAr: 'المشروع الخامس',
    images: projectImageSet('Project5', [
      'WhatsApp Image 2026-10-01 at 10.23.21 PM.jpeg',
      'WhatsApp Image 2026-10-01 at 10.23.21 PM (1).jpeg',
      'WhatsApp Image 2026-10-01 at 10.23.21 PM (2).jpeg',
      'WhatsApp Image 2026-10-01 at 10.23.22 PM.jpeg',
      'WhatsApp Image 2026-10-01 at 10.23.22 PM (1).jpeg',
      'WhatsApp Image 2026-10-01 at 10.23.22 PM (2).jpeg',
      'WhatsApp Image 2026-10-01 at 10.23.22 PM (3).jpeg',
      'WhatsApp Image 2026-10-01 at 10.23.22 PM (4).jpeg',
      'WhatsApp Image 2026-10-01 at 10.23.22 PM (5).jpeg',
      'WhatsApp Image 2026-10-01 at 10.23.22 PM (6).jpeg',
      'WhatsApp Image 2026-10-01 at 10.23.22 PM (7).jpeg'
    ])
  },
  {
    id: 'project6',
    title: 'Project 6',
    titleAr: 'المشروع السادس',
    images: projectImageSet('project6', [
      'WhatsApp Image 2026-10-01 at 10.37.31 PM.jpeg',
      'WhatsApp Image 2026-10-01 at 10.37.31 PM (1).jpeg',
      'WhatsApp Image 2026-10-01 at 10.37.31 PM (2).jpeg',
      'WhatsApp Image 2026-10-01 at 10.37.32 PM.jpeg'
    ])
  }
].map((project) => ({
  ...project,
  image: project.images[0],
  category: 'Interior',
  categoryAr: 'تصميم داخلي',
  tags: [],
  tagsAr: [],
  description: `Explore all ${project.images.length} photos from this project.`,
  descriptionAr: `شاهد جميع صور هذا المشروع (${project.images.length} صور).`
}));

window.APP_DATA.featuredProjects = window.APP_DATA.projectCatalogue.slice(0, 3);
window.APP_DATA.galleryItems = window.APP_DATA.projectCatalogue.flatMap((project) =>
  project.images.map((image, imageIndex) => ({
    title: project.title,
    titleAr: project.titleAr,
    category: project.category,
    categoryAr: project.categoryAr,
    image,
    projectId: project.id,
    imageIndex,
    imageCount: project.images.length,
    width: 'regular'
  }))
);
