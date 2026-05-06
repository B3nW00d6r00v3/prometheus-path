/**
 * Prometheus Path — Landing Page
 * Counter animation + DE/EN language toggle
 */

/* --- Counter Animation --- */
function animateCounters() {
  const counters = document.querySelectorAll('.stat-value[data-target]');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.dataset.animated) {
        entry.target.dataset.animated = 'true';
        const target = parseInt(entry.target.dataset.target);
        const duration = 1500;
        const start = performance.now();

        function update(now) {
          const elapsed = now - start;
          const progress = Math.min(elapsed / duration, 1);
          // ease-out cubic
          const eased = 1 - Math.pow(1 - progress, 3);
          entry.target.textContent = Math.round(target * eased);
          if (progress < 1) {
            requestAnimationFrame(update);
          } else {
            entry.target.textContent = target;
          }
        }
        requestAnimationFrame(update);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(c => observer.observe(c));
}

/* --- Language Toggle --- */
const LANG_KEY = 'prometheus_lang';

function getLang() {
  return localStorage.getItem(LANG_KEY) || 'de';
}

function setLang(lang) {
  localStorage.setItem(LANG_KEY, lang);
  applyLang(lang);
}

function applyLang(lang) {
  // Update toggle buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  // Update all translatable elements
  document.querySelectorAll('[data-de][data-en]').forEach(el => {
    const text = el.getAttribute('data-' + lang);
    if (text) {
      if (el.tagName === 'A' || el.tagName === 'BUTTON') {
        el.textContent = text;
      } else {
        el.textContent = text;
      }
    }
  });
}

/* --- Init --- */
document.addEventListener('DOMContentLoaded', function() {
  animateCounters();

  // Apply saved language
  const saved = getLang();
  if (saved) {
    applyLang(saved);
  }
});

// Make setLang global for onclick handlers
window.setLang = setLang;

// Re-initialize on MkDocs navigation (instant loading)
if (typeof document$ !== 'undefined') {
  document$.subscribe(() => {
    // Reset animated flag so counters re-animate on revisit
    document.querySelectorAll('.stat-value[data-animated]').forEach(el => {
      delete el.dataset.animated;
    });
    animateCounters();
    const saved = getLang();
    if (saved) applyLang(saved);
  });
}
