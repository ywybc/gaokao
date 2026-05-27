// DOM 渲染模块
var Render = {};

// 渲染主内容区
Render.main = function() {
  var opts = Filter.getOptions();
  var data = getActiveData();
  var result = Filter.pipeline(data, opts);
  var container = document.getElementById('mainContent');

  if (result.length === 0) {
    container.innerHTML = '<div class="empty-state"><div class="empty-icon">&#128270;</div><p>没有匹配的高校或专业，请调整筛选条件</p></div>';
    Render.stats(result);
    return;
  }

  var html = '';
  if (opts.tab === '985') {
    html += Render.tab985(result);
  } else {
    html += Render.tab211(result);
  }
  container.innerHTML = html;
  Render.stats(result);
  Render.bindCardEvents();
};

// 统计行
Render.stats = function(result) {
  var majorCount = 0;
  result.forEach(function(u) { majorCount += u.majors.length; });
  document.getElementById('filterStats').innerHTML =
    '共 <strong>' + result.length + '</strong> 所高校，<strong>' + majorCount + '</strong> 个专业方向';
};

// 获取当前 tab 的分类配置
Render.getCatCfg = function(key) {
  var map = getActiveCategoryConfig();
  return map[key] || map.COMPREHENSIVE_OTHER || { label: key, bold: false, color: '#888', bg: '#fff' };
};

// 985 Tab 渲染（分组）
Render.tab985 = function(universities) {
  var html = '';
  UNI_985_GROUPS.forEach(function(group) {
    var groupUnis = [];
    group.ids.forEach(function(id) {
      var u = findUniById(universities, id);
      if (u) groupUnis.push(u);
    });
    if (groupUnis.length === 0) return;
    html += '<section class="uni-group">';
    html += '<div class="group-header">';
    html += '<h3 class="group-title">' + group.label + ' <span class="group-count">(' + groupUnis.length + '所)</span></h3>';
    html += '<button class="btn btn-sm btn-toggle-group" data-action="expand">全部展开</button>';
    html += '</div>';
    html += '<div class="group-cards">';
    groupUnis.forEach(function(uni, idx) {
      html += Render.universityCard(uni, idx < 3);
    });
    html += '</div></section>';
  });
  return html;
};

// 211 Tab 渲染（不分二级组）
Render.tab211 = function(universities) {
  var html = '<section class="uni-group">';
  html += '<div class="group-header">';
  html += '<h3 class="group-title">工科顶尖 211 高校 <span class="group-count">(' + universities.length + '所)</span></h3>';
  html += '<button class="btn btn-sm btn-toggle-group" data-action="expand">全部展开</button>';
  html += '</div>';
  html += '<div class="group-cards">';
  universities.forEach(function(uni, idx) {
    html += Render.universityCard(uni, idx < 3);
  });
  html += '</div></section>';
  return html;
};

// 高校卡片
Render.universityCard = function(uni, expanded) {
  var catCfg = UNI_CATEGORY[uni.category] || { label: '' };
  var expandedClass = expanded ? 'expanded' : '';
  var majorCount = uni.majors.length;
  var score2025 = getUniScoreRange(uni, 2025);
  var summary = '';
  if (score2025.min) {
    summary = '2025: ' + score2025.min + '-' + score2025.max + '分';
  }

  var html = '<div class="uni-card ' + expandedClass + '" data-uni-id="' + uni.id + '">';
  html += '<div class="uni-card-header">';
  html += '<div class="uni-info">';
  html += '<h4 class="uni-name">' + uni.name + '</h4>';
  html += '<span class="uni-location">' + uni.city + '</span>';
  html += '<span class="uni-badge">' + catCfg.label + '</span>';
  html += '</div>';
  html += '<div class="uni-summary"><span class="uni-major-count">' + majorCount + '个专业</span><span class="uni-score-range">' + summary + '</span></div>';
  html += '<button class="btn btn-sm btn-toggle-card">' + (expanded ? '收起 ▲' : '展开 ▼') + '</button>';
  html += '</div>';
  html += '<div class="uni-card-body">';
  html += Render.majorTable(uni);
  html += '</div></div>';
  return html;
};

// 专业表格
Render.majorTable = function(uni) {
  var html = '<table class="major-table">';
  html += '<thead><tr>';
  html += '<th class="col-name">专业名称</th>';
  html += '<th class="col-year">2025 分数/位次/人数</th>';
  html += '<th class="col-year">2024 分数/位次/人数</th>';
  html += '<th class="col-year">2023 分数/位次/人数</th>';
  html += '<th class="col-year">2022 分数/位次/人数</th>';
  html += '<th class="col-empl">就业方向</th>';
  html += '</tr></thead><tbody>';

  uni.majors.forEach(function(m) {
    var catCfg = Render.getCatCfg(m.category);
    var boldClass = catCfg.bold ? ' major-bold' : '';
    var rowStyle = 'style="color:' + catCfg.color + '; background-color:' + catCfg.bg + '"';
    html += '<tr class="major-row' + boldClass + '" ' + rowStyle + ' data-major-id="' + m.id + '">';
    html += '<td class="col-name"><span class="major-cat-tag" style="background:' + catCfg.color + '">' + catCfg.label + '</span>' + m.name + '</td>';
    html += Render.admissionCell(m, 2025);
    html += Render.admissionCell(m, 2024);
    html += Render.admissionCell(m, 2023);
    html += Render.admissionCell(m, 2022);
    html += '<td class="col-empl"><button class="btn btn-xs btn-empl" data-major-id="' + m.id + '">查看</button></td>';
    html += '</tr>';
  });

  html += '</tbody></table>';
  return html;
};

// 录取信息单元格 — 单行格式: 695分/58位/6人
Render.admissionCell = function(major, year) {
  var adm = major.admission[year];
  if (!adm) return '<td class="col-year">---</td>';
  return '<td class="col-year">' + adm.score + '分/' + adm.rank + '位/' + adm.enrollment + '人</td>';
};

// 绑定卡片事件
Render.bindCardEvents = function() {
  // 展开/收起单张卡片
  var cardHeaders = document.querySelectorAll('.uni-card-header');
  cardHeaders.forEach(function(header) {
    header.addEventListener('click', function(e) {
      if (e.target.classList.contains('btn-empl')) return;
      var card = header.parentElement;
      card.classList.toggle('expanded');
      var btn = header.querySelector('.btn-toggle-card');
      if (btn) btn.textContent = card.classList.contains('expanded') ? '收起 ▲' : '展开 ▼';
    });
  });

  // 全部展开/收起按钮
  var toggleBtns = document.querySelectorAll('.btn-toggle-group');
  toggleBtns.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
      e.stopPropagation();
      var group = btn.closest('.uni-group');
      var cards = group.querySelectorAll('.uni-card');
      var action = btn.getAttribute('data-action');
      if (action === 'expand') {
        cards.forEach(function(c) { c.classList.add('expanded'); });
        btn.setAttribute('data-action', 'collapse');
        btn.textContent = '全部收起';
      } else {
        cards.forEach(function(c) { c.classList.remove('expanded'); });
        btn.setAttribute('data-action', 'expand');
        btn.textContent = '全部展开';
      }
      group.querySelectorAll('.btn-toggle-card').forEach(function(b) {
        b.textContent = action === 'expand' ? '收起 ▲' : '展开 ▼';
      });
    });
  });

  // 就业弹窗按钮
  var emplBtns = document.querySelectorAll('.btn-empl');
  emplBtns.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
      e.stopPropagation();
      var majorId = btn.getAttribute('data-major-id');
      Render.showEmploymentModal(majorId);
    });
  });
};

// 显示就业弹窗
Render.showEmploymentModal = function(majorId) {
  var data = getActiveData();
  var major = null;
  var uniName = '';
  for (var i = 0; i < data.length; i++) {
    for (var j = 0; j < data[i].majors.length; j++) {
      if (data[i].majors[j].id === majorId) {
        major = data[i].majors[j];
        uniName = data[i].name;
        break;
      }
    }
    if (major) break;
  }
  if (!major) return;

  var catCfg = Render.getCatCfg(major.category);
  var emp = major.employment;

  var html = '<h3 class="modal-title">' + uniName + ' — ' + major.name + '</h3>';
  html += '<span class="major-cat-tag" style="background:' + catCfg.color + '; display:inline-block; margin-bottom:16px;">' + catCfg.label + '</span>';

  html += '<div class="empl-section"><h4>就业行业</h4><div class="empl-tags">';
  emp.industries.forEach(function(ind) { html += '<span class="empl-tag">' + ind + '</span>'; });
  html += '</div></div>';

  html += '<div class="empl-section"><h4>典型岗位</h4><div class="empl-tags">';
  emp.roles.forEach(function(r) { html += '<span class="empl-tag empl-tag-role">' + r + '</span>'; });
  html += '</div></div>';

  html += '<div class="empl-section"><h4>典型雇主</h4><div class="empl-tags">';
  emp.typicalEmployers.forEach(function(er) { html += '<span class="empl-tag empl-tag-employer">' + er + '</span>'; });
  html += '</div></div>';

  html += '<div class="empl-section"><h4>平均起薪范围</h4><p class="empl-salary">' + emp.avgStartingSalary + '</p></div>';

  document.getElementById('modalBody').innerHTML = html;
  document.getElementById('modalOverlay').classList.add('active');
};

// 隐藏就业弹窗
Render.hideModal = function() {
  document.getElementById('modalOverlay').classList.remove('active');
};
