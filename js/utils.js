// 防抖
function debounce(fn, delay) {
  var timer = null;
  return function() {
    var ctx = this;
    var args = arguments;
    if (timer) clearTimeout(timer);
    timer = setTimeout(function() { fn.apply(ctx, args); }, delay);
  };
}

// 获取当前 tab（从 hash 或默认 985）
function getCurrentTab() {
  var hash = window.location.hash;
  if (hash === '#tab=211') return '211';
  return '985';
}

// 获取当前活跃的数据集
function getActiveData() {
  return getCurrentTab() === '211' ? window.DATA_211 : window.DATA_985;
}

// 获取某一分类的 label（根据当前 tab 切换 985/211 标签）
function getCategoryLabel(catKey) {
  if (getCurrentTab() === '211') {
    return MAJOR_CATEGORY_211[catKey] ? MAJOR_CATEGORY_211[catKey].label : catKey;
  }
  return MAJOR_CATEGORY[catKey] ? MAJOR_CATEGORY[catKey].label : catKey;
}

// 获取当前 tab 对应的专业分类配置
function getActiveCategoryConfig() {
  return getCurrentTab() === '211' ? MAJOR_CATEGORY_211 : MAJOR_CATEGORY;
}

// 获取某高校在给定年份的最低/最高分数
function getUniScoreRange(uni, year) {
  var min = Infinity;
  var max = -Infinity;
  uni.majors.forEach(function(m) {
    var adm = m.admission[year];
    if (adm) {
      if (adm.score < min) min = adm.score;
      if (adm.score > max) max = adm.score;
    }
  });
  return { min: min === Infinity ? null : min, max: max === -Infinity ? null : max };
}

// 通过 id 查找高校
function findUniById(list, id) {
  for (var i = 0; i < list.length; i++) {
    if (list[i].id === id) return list[i];
  }
  return null;
}
