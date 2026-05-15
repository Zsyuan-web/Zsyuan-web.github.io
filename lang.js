// GA4 Measurement ID — 替换为你的实际 ID
var GA_MEASUREMENT_ID = 'G-SH9HZC7NKX';

// Google Analytics 4
(function(){
  if (!GA_MEASUREMENT_ID || GA_MEASUREMENT_ID === 'G-XXXXXXXX') return;

  var s = document.createElement('script');
  s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_MEASUREMENT_ID;
  document.head.appendChild(s);

  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', GA_MEASUREMENT_ID);
})();

// Bilingual toggle
(function(){
  var current;
  try { current = localStorage.getItem('pns-lang') || 'zh'; }
  catch { current = 'zh'; }

  function setLang(lang) {
    current = lang;
    try { localStorage.setItem('pns-lang', lang); } catch {}
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

    // 语言切换时上报 GA4 事件
    if (window.gtag && GA_MEASUREMENT_ID && GA_MEASUREMENT_ID !== 'G-XXXXXXXX') {
      gtag('event', 'language_switch', { 'language': lang });
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
