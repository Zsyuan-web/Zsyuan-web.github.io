// Bilingual toggle
(function(){
  let current;
  try { current = localStorage.getItem('pns-lang') || 'zh'; }
  catch { current = 'zh'; }

  function setLang(lang) {
    current = lang;
    try { localStorage.setItem('pns-lang', lang); } catch { /* non-persistent OK */ }
    document.querySelectorAll('[lang]:not(html)').forEach(function(el) {
      el.classList.toggle('active', el.getAttribute('lang') === lang);
    });
    document.querySelectorAll('.lang-switch').forEach(function(btn) {
      btn.textContent = lang === 'zh' ? 'EN' : '中';
      btn.setAttribute('aria-label', lang === 'zh' ? 'Switch to English' : '切换到中文');
    });
    document.documentElement.lang = lang;
    document.documentElement.classList.toggle('en-mode', lang === 'en');
    document.documentElement.classList.toggle('zh-mode', lang !== 'en');
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
