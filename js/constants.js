// 高校分类
var UNI_CATEGORY = {
  C9:                  { order: 0, label: 'C9 联盟' },
  STRONG_ENGINEERING:  { order: 1, label: '强工科' },
  COMPREHENSIVE:       { order: 2, label: '综合性' }
};

// 专业分类 — 985 用（颜色 + 加粗）
// 排序: 热门工科 → 重点工科 → 传统优势理工科 → 综合类
var MAJOR_CATEGORY = {
  HOT_ENGINEERING:         { order: 0, label: '热门工科专业',       bold: true,  color: '#C0392B', bg: '#FDEDEC' },
  CORE_ENGINEERING:        { order: 1, label: '重点工科专业',       bold: true,  color: '#D35400', bg: '#FEF5E7' },
  TRADITIONAL_ENGINEERING: { order: 2, label: '传统优势理工科专业', bold: false, color: '#2471A3', bg: '#EBF5FB' },
  COMPREHENSIVE_OTHER:     { order: 3, label: '综合类专业',         bold: false, color: '#616A6B', bg: '#F8F9F9' }
};

// 专业分类 — 211 用（标签不同）
var MAJOR_CATEGORY_211 = {
  HOT_ENGINEERING:         { order: 0, label: '热门专业',           bold: true,  color: '#C0392B', bg: '#FDEDEC' },
  CORE_ENGINEERING:        { order: 1, label: '重点专业',           bold: true,  color: '#D35400', bg: '#FEF5E7' },
  TRADITIONAL_ENGINEERING: { order: 2, label: '传统优势专业',       bold: false, color: '#2471A3', bg: '#EBF5FB' },
  COMPREHENSIVE_OTHER:     { order: 3, label: '综合类',             bold: false, color: '#616A6B', bg: '#F8F9F9' }
};

// 985 高校固定排序
var UNI_985_ORDER = [
  // C9
  'tsinghua','pku','fudan','sjtu','nju','zju','ustc','hit','xjtu',
  // 强工科
  'tongji','buaa','bit','tju','hust','seu','scut','dlut','nwpu','uestc','neu','csu','hnu','cqu',
  // 综合性
  'whu','nankai','sysu','xmu','scu','sdu','jlu','lzu','ouc','nwafu','muc','ecnu','bnu','ruc','cau','nudt'
];

// 211 工科高校固定排序
var UNI_211_ORDER = [
  'bupt','xidian','nuaa','njust','hrbeu','whut','hfut','bjtu','swjtu',
  'hhu','cumt','ustb','ecust','dhu','bjut','shu'
];

// 分组标题（985 下再分组）
var UNI_985_GROUPS = [
  { key: 'C9',              label: 'C9 联盟',            ids: ['tsinghua','pku','fudan','sjtu','nju','zju','ustc','hit','xjtu'] },
  { key: 'STRONG_ENGINEERING', label: '强工科',          ids: ['tongji','buaa','bit','tju','hust','seu','scut','dlut','nwpu','uestc','neu','csu','hnu','cqu'] },
  { key: 'COMPREHENSIVE',      label: '综合性',           ids: ['whu','nankai','sysu','xmu','scu','sdu','jlu','lzu','ouc','nwafu','muc','ecnu','bnu','ruc','cau','nudt'] }
];

// 所有 985 ID 的集合（用于快速判定）
var ALL_985_IDS = UNI_985_GROUPS.reduce(function(acc, g) {
  return acc.concat(g.ids);
}, []);

// 所有 211 ID 的集合
var ALL_211_IDS = UNI_211_ORDER.slice();
