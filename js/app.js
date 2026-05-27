// 应用初始化与事件绑定
(function() {
  'use strict';

  var debouncedRender = debounce(Render.main, 150);

  // Tab 切换
  function switchTab(tab) {
    document.querySelectorAll('.tab-btn').forEach(function(btn) {
      btn.classList.toggle('active', btn.getAttribute('data-tab') === tab);
    });
    window.location.hash = 'tab=' + tab;
    Render.main();
  }

  // 初始化 Tab 按钮事件
  function initTabs() {
    document.querySelectorAll('.tab-btn').forEach(function(btn) {
      btn.addEventListener('click', function() {
        switchTab(this.getAttribute('data-tab'));
      });
    });
    var currentTab = getCurrentTab();
    document.querySelectorAll('.tab-btn').forEach(function(btn) {
      btn.classList.toggle('active', btn.getAttribute('data-tab') === currentTab);
    });
    if (window.location.hash === '') {
      window.location.hash = 'tab=985';
    }
  }

  // 初始化筛选事件
  function initFilters() {
    var filterInputs = document.querySelectorAll('#scoreMin, #scoreMax, #rankMin, #rankMax, #searchInput');
    filterInputs.forEach(function(input) {
      input.addEventListener('input', debouncedRender);
    });

    var categoryCheckboxes = document.querySelectorAll('#categoryChips input[type=checkbox]');
    categoryCheckboxes.forEach(function(cb) {
      cb.addEventListener('change', debouncedRender);
    });

    document.getElementById('resetBtn').addEventListener('click', function() {
      document.getElementById('scoreMin').value = '';
      document.getElementById('scoreMax').value = '';
      document.getElementById('rankMin').value = '';
      document.getElementById('rankMax').value = '';
      document.getElementById('searchInput').value = '';
      document.querySelectorAll('#categoryChips input[type=checkbox]').forEach(function(cb) {
        cb.checked = true;
      });
      Render.main();
    });
  }

  // 初始化弹窗关闭事件
  function initModal() {
    document.getElementById('modalClose').addEventListener('click', Render.hideModal);
    document.getElementById('modalOverlay').addEventListener('click', function(e) {
      if (e.target === this) Render.hideModal();
    });
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') Render.hideModal();
    });
  }

  // 监听 hash 变化（前进/后退）
  function initHashChange() {
    window.addEventListener('hashchange', function() {
      var tab = getCurrentTab();
      document.querySelectorAll('.tab-btn').forEach(function(btn) {
        btn.classList.toggle('active', btn.getAttribute('data-tab') === tab);
      });
      Render.main();
    });
  }

  // 启动
  function init() {
    initTabs();
    initFilters();
    initModal();
    initHashChange();
    Render.main();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
