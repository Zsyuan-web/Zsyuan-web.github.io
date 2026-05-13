// Bilingual toggle
(function(){
  var current = localStorage.getItem('pns-lang') || 'zh';
  function setLang(lang) {
    current = lang;
    localStorage.setItem('pns-lang', lang);
    // Skip <html> — only toggle content elements
    document.querySelectorAll('[lang]:not(html)').forEach(function(el) {
      el.classList.toggle('active', el.getAttribute('lang') === lang);
    });
    // Update toggle button labels
    document.querySelectorAll('.lang-switch').forEach(function(btn) {
      btn.textContent = lang === 'zh' ? 'EN' : '中';
    });
    // Update HTML lang attribute
    document.documentElement.lang = lang;
    if (lang === 'en') {
      document.documentElement.classList.add('en-mode');
      document.documentElement.classList.remove('zh-mode');
    } else {
      document.documentElement.classList.add('zh-mode');
      document.documentElement.classList.remove('en-mode');
    }
  }
  document.addEventListener('DOMContentLoaded', function() {
    setLang(current);
    document.querySelectorAll('.lang-switch').forEach(function(btn) {
      btn.addEventListener('click', function() {
        setLang(current === 'zh' ? 'en' : 'zh');
      });
    });
  });
})();
