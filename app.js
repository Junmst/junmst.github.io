const projects = [
  {
    source: 'GitHub',
    name: 'junmst.github.io',
    language: 'HTML / CSS',
    description: '个人主页与网页实验空间。',
    url: 'https://github.com/Junmst/junmst.github.io'
  },
  {
    source: 'GitHub',
    name: 'UsageTracker',
    language: 'C#',
    description: 'Windows 桌面空闲监测工具。',
    url: 'https://github.com/Junmst/UsageTracker'
  },
  {
    source: 'GitHub',
    name: 'ai-vision-web',
    language: 'Python',
    description: 'AI Vision 的 FastAPI 后端。',
    url: 'https://github.com/Junmst/ai-vision-web'
  },
  {
    source: 'GitHub',
    name: 'boss-resume-auto-delivery',
    language: 'Python',
    description: '简历投递自动化工具。',
    url: 'https://github.com/Junmst/boss-resume-auto-delivery'
  },
  {
    source: 'Gitee',
    name: 'springboot-openai-chatgpt',
    language: 'Java',
    description: 'SpringCloud AI 对话与绘图机器人。',
    url: 'https://gitee.com/jtjtjt/springboot-openai-chatgpt'
  },
  {
    source: 'Gitee',
    name: 'manage',
    language: 'PHP',
    description: '早期管理系统项目。',
    url: 'https://gitee.com/1213141516/manage'
  },
  {
    source: 'Gitee',
    name: 'geektime-electron',
    language: 'JavaScript',
    description: 'Electron 开发实践。',
    url: 'https://gitee.com/jtjtjt/geektime-electron'
  },
  {
    source: 'Gitee',
    name: 'electron-umijs-react-antdesign',
    language: 'JavaScript',
    description: 'Electron + UmiJS + React + Ant Design。',
    url: 'https://gitee.com/jtjtjt/electron-umijs-react-antdesign'
  },
  {
    source: 'Gitee',
    name: 'webapps',
    language: 'Web',
    description: '早期 Web 应用集合。',
    url: 'https://gitee.com/jtjtjt/webapps'
  }
];

const projectGrid = document.querySelector('#project-grid');
if (projectGrid) {
  projectGrid.innerHTML = projects.map((project, index) => `
    <a class="project-card reveal" href="${project.url}" target="_blank" rel="noreferrer">
      <div>
        <h3>${String(index + 1).padStart(2, '0')} / ${project.name}</h3>
        <p>${project.description}</p>
        <div class="project-meta">
          <span class="project-source">${project.source}</span>
          <span>${project.language}</span>
        </div>
      </div>
      <span class="project-arrow" aria-hidden="true">↗</span>
    </a>
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
