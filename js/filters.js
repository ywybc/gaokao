// 筛选与排序逻辑
var Filter = {};

// 按分数范围筛选
Filter.byScoreRange = function(universities, minScore, maxScore) {
  if ((minScore == null || minScore === '') && (maxScore == null || maxScore === '')) return universities;
  var lo = minScore != null && minScore !== '' ? Number(minScore) : 0;
  var hi = maxScore != null && maxScore !== '' ? Number(maxScore) : 999;
  return universities.map(function(uni) {
    var filtered = uni.majors.filter(function(m) {
      for (var y = 2022; y <= 2025; y++) {
        var adm = m.admission[y];
        if (adm && adm.score >= lo && adm.score <= hi) return true;
      }
      return false;
    });
    if (filtered.length === 0) return null;
    var copy = shallowCopyUni(uni);
    copy.majors = filtered;
    return copy;
  }).filter(Boolean);
};

// 按位次范围筛选
Filter.byRankRange = function(universities, minRank, maxRank) {
  if ((minRank == null || minRank === '') && (maxRank == null || maxRank === '')) return universities;
  var lo = minRank != null && minRank !== '' ? Number(minRank) : 1;
  var hi = maxRank != null && maxRank !== '' ? Number(maxRank) : 999999;
  return universities.map(function(uni) {
    var filtered = uni.majors.filter(function(m) {
      for (var y = 2022; y <= 2025; y++) {
        var adm = m.admission[y];
        if (adm && adm.rank >= lo && adm.rank <= hi) return true;
      }
      return false;
    });
    if (filtered.length === 0) return null;
    var copy = shallowCopyUni(uni);
    copy.majors = filtered;
    return copy;
  }).filter(Boolean);
};

// 按专业类别筛选
Filter.byMajorCategories = function(universities, selectedCategories) {
  if (!selectedCategories || selectedCategories.length === 0 || selectedCategories.length === 4) return universities;
  var set = {};
  selectedCategories.forEach(function(c) { set[c] = true; });
  return universities.map(function(uni) {
    var filtered = uni.majors.filter(function(m) { return set[m.category]; });
    if (filtered.length === 0) return null;
    var copy = shallowCopyUni(uni);
    copy.majors = filtered;
    return copy;
  }).filter(Boolean);
};

// 按文本搜索筛选
Filter.byTextSearch = function(universities, query) {
  if (!query || query.trim() === '') return universities;
  var tokens = query.trim().toLowerCase().split(/\s+/);
  return universities.map(function(uni) {
    var filtered = uni.majors.filter(function(m) {
      var haystack = (uni.name + '|' + uni.city + '|' + uni.province + '|' + m.name + '|' + getCategoryLabel(m.category) + '|' + (m.employment.industries.join(' ') || '') + '|' + (m.employment.roles.join(' ') || '') + '|' + (m.employment.typicalEmployers.join(' ') || '')).toLowerCase();
      for (var i = 0; i < tokens.length; i++) {
        if (haystack.indexOf(tokens[i]) === -1) return false;
      }
      return true;
    });
    if (filtered.length === 0) return null;
    var copy = shallowCopyUni(uni);
    copy.majors = filtered;
    return copy;
  }).filter(Boolean);
};

// 对高校进行排序
Filter.sortUniversities = function(universities, tab) {
  var orderList = tab === '211' ? ALL_211_IDS : ALL_985_IDS;
  var map = {};
  orderList.forEach(function(id, idx) { map[id] = idx; });
  return universities.slice().sort(function(a, b) {
    return (map[a.id] != null ? map[a.id] : 999) - (map[b.id] != null ? map[b.id] : 999);
  });
};

// 对每个高校下的专业进行排序
Filter.sortMajors = function(universities) {
  var catMap = getActiveCategoryConfig();
  return universities.map(function(uni) {
    var copy = shallowCopyUni(uni);
    copy.majors = uni.majors.slice().sort(function(a, b) {
      var catA = catMap[a.category] ? catMap[a.category].order : 99;
      var catB = catMap[b.category] ? catMap[b.category].order : 99;
      if (catA !== catB) return catA - catB;
      var scoreA = a.admission[2025] ? a.admission[2025].score : 0;
      var scoreB = b.admission[2025] ? b.admission[2025].score : 0;
      return scoreB - scoreA;
    });
    return copy;
  });
};

// 完整筛选管道
Filter.pipeline = function(universities, opts) {
  var result = Filter.byScoreRange(universities, opts.scoreMin, opts.scoreMax);
  result = Filter.byRankRange(result, opts.rankMin, opts.rankMax);
  result = Filter.byMajorCategories(result, opts.categories);
  result = Filter.byTextSearch(result, opts.searchQuery);
  result = Filter.sortUniversities(result, opts.tab);
  result = Filter.sortMajors(result);
  return result;
};

// 浅拷贝一个高校对象（不含 majors 深拷贝）
function shallowCopyUni(uni) {
  return {
    id: uni.id,
    name: uni.name,
    category: uni.category,
    province: uni.province,
    city: uni.city,
    majors: uni.majors
  };
}

// 获取当前筛选条件
Filter.getOptions = function() {
  var tab = getCurrentTab();
  var checked = document.querySelectorAll('#categoryChips input[type=checkbox]:checked');
  var categories = [];
  checked.forEach(function(cb) { categories.push(cb.value); });
  return {
    tab: tab,
    scoreMin: document.getElementById('scoreMin').value,
    scoreMax: document.getElementById('scoreMax').value,
    rankMin: document.getElementById('rankMin').value,
    rankMax: document.getElementById('rankMax').value,
    categories: categories,
    searchQuery: document.getElementById('searchInput').value
  };
};
