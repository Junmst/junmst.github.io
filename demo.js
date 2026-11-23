const bars = document.querySelector('#waveform');
if (bars) {
  const heights = [28, 42, 36, 64, 52, 78, 38, 56, 86, 44, 34, 66, 47, 72, 40, 58, 31, 68, 49, 80, 37, 60, 45, 73, 35, 55, 42, 65, 29, 51, 39, 70, 46, 59, 33, 76, 43, 62, 36, 54, 48, 69];
  bars.innerHTML = heights.map((height, index) => `<span class="wave-bar${index < 13 ? ' active' : ''}" style="--height:${height}%"></span>`).join('');
}

const earWaveform = document.querySelector('#ear-waveform');
if (earWaveform) {
  const heights = [20, 35, 52, 30, 68, 44, 76, 36, 58, 82, 42, 28, 65, 50, 74, 32, 55, 86, 46, 62, 34, 72, 40, 58, 78, 27, 48, 66, 38, 80, 52, 30, 70, 45, 60, 35, 75, 50, 68, 42, 82, 36];
  earWaveform.innerHTML = heights.map((height) => `<span style="--height:${height}%"></span>`).join('');
}

document.querySelectorAll('.earloop-app-tab').forEach((tab) => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.earloop-app-tab').forEach((item) => item.classList.remove('active'));
    document.querySelectorAll('.earloop-app-panel').forEach((panel) => panel.classList.add('hidden'));
    tab.classList.add('active');
    document.querySelector(`[data-ear-panel="${tab.dataset.earTab}"]`)?.classList.remove('hidden');
  });
});

const recordButton = document.querySelector('#ear-record-button');
const recordStatus = document.querySelector('#ear-record-status');
if (recordButton && recordStatus) {
  let recording = false;
  recordButton.addEventListener('click', () => {
    recording = !recording;
    recordButton.textContent = recording ? '停止录音' : '开始录音';
    recordStatus.textContent = recording ? '正在录音 · 00:08' : '等待开始';
    document.querySelector('.earloop-status')?.classList.toggle('recording', recording);
  });
}

const playButton = document.querySelector('#play-button');
if (playButton) {
  let playing = false;
  playButton.addEventListener('click', () => {
    playing = !playing;
    playButton.textContent = playing ? 'Ⅱ' : '▶';
    playButton.setAttribute('aria-label', playing ? '暂停演示' : '播放演示');
    document.body.classList.toggle('is-playing', playing);
  });
}

document.querySelectorAll('.preset').forEach((preset) => {
  preset.addEventListener('click', () => {
    document.querySelectorAll('.preset').forEach((item) => item.classList.remove('active'));
    preset.classList.add('active');
    const label = document.querySelector('#current-preset');
    if (label) label.textContent = preset.dataset.name;
  });
});

const sampleRecords = {
  all: [
    ['08:40', '阅读与整理', '个人时间', '01h 20m'],
    ['10:15', '开发时迹', '项目工作', '02h 45m'],
    ['14:00', '户外运动', '生活记录', '01h 10m'],
    ['20:30', '书法练习', '个人时间', '01h 25m']
  ],
  work: [
    ['10:15', '开发时迹', '项目工作', '02h 45m']
  ],
  life: [
    ['14:00', '户外运动', '生活记录', '01h 10m'],
    ['20:30', '书法练习', '个人时间', '01h 25m']
  ]
};

const timeline = document.querySelector('#timeline');
const renderTimeline = (key = 'all') => {
  if (!timeline) return;
  timeline.innerHTML = sampleRecords[key].map(([time, title, meta, duration]) => `
    <article class="timeline-row">
      <time class="timeline-time">${time}</time>
      <span class="timeline-dot" aria-hidden="true"></span>
      <div><h3 class="timeline-title">${title}</h3><p class="timeline-meta">${meta}</p></div>
      <span class="timeline-duration">${duration}</span>
    </article>
  `).join('');
};
renderTimeline();
document.querySelectorAll('.filter-button').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.filter-button').forEach((item) => item.classList.remove('active'));
    button.classList.add('active');
    renderTimeline(button.dataset.filter);
  });
});

document.querySelector('#add-record')?.addEventListener('click', () => {
  const list = sampleRecords.all;
  list.push(['22:10', '记录一个新想法', '临时记录', '00h 25m']);
  renderTimeline('all');
  document.querySelector('#record-count').textContent = `${list.length} 项`;
});

const previewTitle = document.querySelector('#preview-title');
const previewCopy = document.querySelector('#preview-copy');
document.querySelectorAll('[data-preview]').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelectorAll('[data-preview]').forEach((item) => item.classList.remove('active'));
    button.classList.add('active');
    if (previewTitle) previewTitle.textContent = button.dataset.preview;
    if (previewCopy) previewCopy.textContent = button.dataset.copy;
  });
});
