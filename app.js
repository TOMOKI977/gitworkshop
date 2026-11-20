// Git y GitHub, desde cero: selector de recorrido, reveal y copiar comandos.
(function () {
  'use strict';

  var STORAGE_KEY = 'gitworkshop-track';
  var TRACKS = { terminal: 'track-terminal', agentes: 'track-agentes' };

  // Selector de recorrido (Terminal / Agentes de IA)
  var buttons = document.querySelectorAll('.track-btn');

  function setTrack(track) {
    if (!TRACKS[track]) return;
    document.body.classList.remove(TRACKS.terminal, TRACKS.agentes);
    document.body.classList.add(TRACKS[track]);
    buttons.forEach(function (btn) {
      var active = btn.getAttribute('data-track') === track;
      btn.setAttribute('aria-checked', active ? 'true' : 'false');
    });
    try { localStorage.setItem(STORAGE_KEY, track); } catch (e) { /* almacenamiento no disponible */ }
  }

  buttons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      setTrack(btn.getAttribute('data-track'));
    });
  });

  try {
    var saved = localStorage.getItem(STORAGE_KEY);
    if (saved) setTrack(saved);
  } catch (e) { /* ignorar */ }

  // Aparición progresiva de elementos .reveal al entrar en pantalla
  var reveals = document.querySelectorAll('.reveal');
  function showAll() {
    reveals.forEach(function (el) { el.classList.add('in'); });
  }
  if ('IntersectionObserver' in window) {
    // threshold 0 + margen inferior: un elemento se revela en cuanto asoma,
    // sin depender de que ocupe un porcentaje mínimo de la pantalla.
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0, rootMargin: '0px 0px -5% 0px' });
    reveals.forEach(function (el) { observer.observe(el); });
    // Imprimir o capturar la página muestra todo sin esperar scroll.
    window.addEventListener('beforeprint', showAll);
  } else {
    showAll();
  }

  // Botones de copiar: copian el texto del bloque <pre> vecino
  document.querySelectorAll('.copy').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var block = btn.closest('.block');
      var code = block && block.querySelector('pre');
      if (!code) return;
      var text = code.textContent;
      var original = btn.textContent;

      function done() {
        btn.textContent = 'Copiado';
        btn.classList.add('copied');
        setTimeout(function () {
          btn.textContent = original;
          btn.classList.remove('copied');
        }, 1500);
      }

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(done, function () { fallbackCopy(text, done); });
      } else {
        fallbackCopy(text, done);
      }
    });
  });

  function fallbackCopy(text, done) {
    var area = document.createElement('textarea');
    area.value = text;
    area.setAttribute('readonly', '');
    area.style.position = 'fixed';
    area.style.opacity = '0';
    document.body.appendChild(area);
    area.select();
    try { document.execCommand('copy'); done(); } catch (e) { /* sin permiso de portapapeles */ }
    document.body.removeChild(area);
  }

  // Navegación con flechas: salta a la siguiente o anterior diapositiva
  var slides = Array.prototype.slice.call(document.querySelectorAll('.slide'));
  document.addEventListener('keydown', function (e) {
    if (e.target && /INPUT|TEXTAREA|SELECT/.test(e.target.tagName)) return;
    if (e.key !== 'ArrowDown' && e.key !== 'ArrowRight' && e.key !== 'ArrowUp' && e.key !== 'ArrowLeft') return;

    var y = window.scrollY + 40;
    var index = slides.findIndex(function (s) { return s.offsetTop > y; });
    var current = index === -1 ? slides.length - 1 : Math.max(0, index - 1);

    var target = (e.key === 'ArrowDown' || e.key === 'ArrowRight') ? current + 1 : current - 1;
    if (target < 0 || target >= slides.length) return;
    e.preventDefault();
    slides[target].scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
})();
