// Logic for rendering, filtering, searching and exporting tables as images

document.addEventListener('DOMContentLoaded', () => {
  renderAllTables();
  initEventListeners();
});

function renderAllTables() {
  const container = document.getElementById('tables-container');
  if (!container) return;

  const searchQuery = (document.getElementById('searchInput')?.value || '').toLowerCase().trim();
  const selectedGroup = document.getElementById('groupFilter')?.value || 'all';
  const selectedFeature = document.getElementById('featureFilter')?.value || 'all';

  container.innerHTML = '';
  let totalVisibleItems = 0;

  RESEARCH_DATA.forEach(group => {
    // Check group filter
    if (selectedGroup !== 'all' && group.info.id !== selectedGroup) {
      return;
    }

    // Filter items
    const filteredItems = group.items.filter(item => {
      // Search text
      const matchSearch = !searchQuery || 
        item.title.toLowerCase().includes(searchQuery) ||
        item.source.toLowerCase().includes(searchQuery) ||
        item.what.toLowerCase().includes(searchQuery) ||
        item.value.toLowerCase().includes(searchQuery) ||
        item.note.toLowerCase().includes(searchQuery);

      // Feature filter
      let matchFeature = true;
      if (selectedFeature === 'detect') matchFeature = item.features.detect;
      else if (selectedFeature === 'dist') matchFeature = item.features.dist;
      else if (selectedFeature === 'col') matchFeature = item.features.col;
      else if (selectedFeature === 'alert') matchFeature = item.features.alert;
      else if (selectedFeature === 'full') matchFeature = item.score === 4;

      return matchSearch && matchFeature;
    });

    if (filteredItems.length === 0) return;
    totalVisibleItems += filteredItems.length;

    // Render section
    const section = document.createElement('section');
    section.className = 'table-section';
    section.id = group.info.id;

    section.innerHTML = `
      <div class="section-header">
        <div class="section-title-wrap">
          <div class="section-icon-badge ${group.info.badge_class}">
            ${group.info.icon}
          </div>
          <div class="section-title-text">
            <h2>${group.info.title}</h2>
            <p>${group.info.subtitle} • <strong>${filteredItems.length} công trình</strong></p>
          </div>
        </div>
        <div class="section-actions">
          <button class="btn btn-outline export-btn" onclick="exportTableAsImage('${group.info.id}', '${group.info.file_name}')">
            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path></svg>
            Tải ảnh Bảng (PNG)
          </button>
        </div>
      </div>
      <div class="table-responsive">
        <table class="modern-table">
          <thead>
            <tr>
              <th class="col-stt">STT</th>
              <th class="col-paper">Nghiên cứu & Nguồn</th>
              <th class="col-content">Nội dung thực hiện & Giá trị chính</th>
              <th class="col-features">Chức năng hỗ trợ (4 Tiêu chí)</th>
              <th class="col-note">Đánh giá & Ghi chú</th>
            </tr>
          </thead>
          <tbody>
            ${filteredItems.map(item => renderTableRow(item)).join('')}
          </tbody>
        </table>
      </div>
    `;

    container.appendChild(section);
  });

  const countBadge = document.getElementById('result-count');
  if (countBadge) {
    countBadge.textContent = `${totalVisibleItems} nghiên cứu hiển thị`;
  }
}

function renderTableRow(item) {
  // Parse journal and DOI from source
  let journal = item.source;
  let doi = '';
  const doiMatch = item.source.match(/DOI:\s*([^\s]+)/i);
  if (doiMatch) {
    doi = doiMatch[1];
  }

  const f = item.features;

  return `
    <tr id="row-${item.stt}">
      <td class="col-stt">
        <div class="stt-badge">${item.stt}</div>
      </td>
      <td class="col-paper">
        <div class="paper-title">${item.title}</div>
        <div class="paper-meta">
          ${item.year ? `<span class="tag-year">${item.year}</span>` : ''}
          <span class="tag-journal">${cleanSource(item.source)}</span>
        </div>
        ${doi ? `<div style="margin-top: 6px;"><a href="https://doi.org/${doi}" target="_blank" class="tag-doi" title="Mở liên kết DOI">🔗 DOI: ${doi}</a></div>` : ''}
      </td>
      <td class="col-content">
        <div class="content-block">
          <div class="content-block-header">
            <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
            Nghiên cứu làm được gì
          </div>
          <div class="content-body">${item.what}</div>
        </div>
        <div class="value-highlight">
          <strong>💡 Giá trị chính:</strong> ${item.value}
        </div>
      </td>
      <td class="col-features">
        <div class="feature-pills">
          <div class="feature-pill ${f.detect ? 'active' : 'inactive'}">
            <span class="feature-pill-name">👁️ 1. Nhận diện</span>
            <span>${f.detect ? '✓' : '—'}</span>
          </div>
          <div class="feature-pill ${f.dist ? 'active' : 'inactive'}">
            <span class="feature-pill-name">📏 2. Khoảng cách / vị trí</span>
            <span>${f.dist ? '✓' : '—'}</span>
          </div>
          <div class="feature-pill ${f.col ? 'active' : 'inactive'}">
            <span class="feature-pill-name">⚠️ 3. Va chạm / rủi ro</span>
            <span>${f.col ? '✓' : '—'}</span>
          </div>
          <div class="feature-pill ${f.alert ? 'active' : 'inactive'}">
            <span class="feature-pill-name">🔔 4. Cảnh báo (âm/rung)</span>
            <span>${f.alert ? '✓' : '—'}</span>
          </div>
        </div>
        <div class="feature-score-badge score-${item.score}">
          ⭐ Đạt: ${item.score}/4 chức năng
        </div>
      </td>
      <td class="col-note">
        <div class="note-box">
          ${item.note || 'Không có ghi chú thêm.'}
        </div>
      </td>
    </tr>
  `;
}

function cleanSource(str) {
  // Return concise journal name
  return str.split('. DOI:')[0].split(', DOI')[0].trim();
}

function initEventListeners() {
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', () => renderAllTables());
  }

  const groupFilter = document.getElementById('groupFilter');
  if (groupFilter) {
    groupFilter.addEventListener('change', () => renderAllTables());
  }

  const featureFilter = document.getElementById('featureFilter');
  if (featureFilter) {
    featureFilter.addEventListener('change', () => renderAllTables());
  }

  const themeBtn = document.getElementById('themeToggleBtn');
  if (themeBtn) {
    themeBtn.addEventListener('click', toggleTheme);
  }
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  showToast(`Đã chuyển sang giao diện ${newTheme === 'dark' ? 'tối' : 'sáng'}`);
}

// Export single table as image
async function exportTableAsImage(sectionId, filename) {
  const element = document.getElementById(sectionId);
  if (!element) return;

  showToast('Đang tạo ảnh chất lượng cao...');

  try {
    // Hide action buttons temporarily during screenshot
    const actions = element.querySelector('.section-actions');
    if (actions) actions.style.display = 'none';

    // Capture using html2canvas with retina 2x scale
    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      backgroundColor: '#ffffff',
      logging: false,
      windowWidth: 1440
    });

    if (actions) actions.style.display = 'flex';

    // Download
    const link = document.createElement('a');
    link.download = `${filename}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();

    showToast(`Đã tải ảnh ${filename}.png thành công!`);
  } catch (err) {
    console.error('Export error:', err);
    showToast('Lỗi khi xuất ảnh: ' + err.message);
  }
}

// Export all tables or whole dashboard as image
async function exportAllTablesImage() {
  showToast('Đang kết xuất toàn bộ bảng thành ảnh tổng hợp...');
  const element = document.getElementById('exportable-full-content');
  if (!element) return;

  try {
    // Hide buttons during capture
    const buttons = element.querySelectorAll('.export-btn');
    buttons.forEach(b => b.style.display = 'none');

    const canvas = await html2canvas(element, {
      scale: 1.8,
      useCORS: true,
      backgroundColor: '#f8fafc',
      logging: false,
      windowWidth: 1440
    });

    buttons.forEach(b => b.style.display = 'inline-flex');

    const link = document.createElement('a');
    link.download = 'tong_hop_toan_bo_cac_nghien_cuu.png';
    link.href = canvas.toDataURL('image/png');
    link.click();

    showToast('Đã tải ảnh tổng hợp toàn bộ thành công!');
  } catch (err) {
    console.error('Export error:', err);
    showToast('Lỗi khi xuất ảnh: ' + err.message);
  }
}

function showToast(message) {
  let toast = document.getElementById('toastNotice');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toastNotice';
    toast.className = 'toast-notice';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `
    <svg width="18" height="18" fill="none" stroke="#34d399" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
    <span>${message}</span>
  `;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 3500);
}
