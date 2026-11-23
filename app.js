const projects = [
  {
    source: 'PROJECT',
    name: 'earloop',
    language: 'WEB / APP',
    description: '',
    url: ''
  },
  {
    source: 'PROJECT',
    name: '时迹',
    language: 'PRODUCT',
    description: '',
    url: ''
  },
  {
    source: 'PROJECT',
    name: '我的web',
    language: 'WEB',
    description: '',
    url: ''
  }
];

const projectGrid = document.querySelector('#project-grid');
if (projectGrid) {
  projectGrid.innerHTML = projects.map((project, index) => `
    ${project.url ? `<a class="project-card reveal" href="${project.url}" target="_blank" rel="noreferrer">` : '<article class="project-card reveal">'}
      <div>
        <h3>${String(index + 1).padStart(2, '0')} / ${project.name}</h3>
        ${project.description ? `<p>${project.description}</p>` : ''}
        <div class="project-meta">
          <span class="project-source">${project.source}</span>
          <span>${project.language}</span>
        </div>
      </div>
      ${project.url ? '<span class="project-arrow" aria-hidden="true">↗</span>' : ''}
    ${project.url ? '</a>' : '</article>'}
  `).join('');
}

const nav = document.querySelector('.site-nav');
const setNavState = () => nav?.classList.toggle('scrolled', window.scrollY > 12);
setNavState();
window.addEventListener('scroll', setNavState, { passive: true });

const revealItems = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      currentObserver.unobserve(entry.target);
    });
  }, { threshold: 0.14 });
  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('is-visible'));
}
