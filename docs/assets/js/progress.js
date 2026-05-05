/**
 * Prometheus Path — Progress Tracking
 * Stores lesson completion in localStorage. No backend, no cookies, no tracking.
 */

const STORAGE_KEY = 'prometheus_progress';

function getProgress() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  } catch {
    return {};
  }
}

function saveProgress(progress) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

function toggleLesson(lessonId) {
  const progress = getProgress();
  progress[lessonId] = !progress[lessonId];
  saveProgress(progress);
  return progress[lessonId];
}

function initProgressTracking() {
  const checkboxes = document.querySelectorAll('.prometheus-check');
  if (checkboxes.length === 0) return;

  const progress = getProgress();

  checkboxes.forEach((cb) => {
    const lessonId = cb.dataset.lesson;
    if (!lessonId) return;

    // Restore state
    cb.checked = !!progress[lessonId];
    updateCheckboxStyle(cb);

    cb.addEventListener('change', () => {
      toggleLesson(lessonId);
      updateCheckboxStyle(cb);
      updateModuleProgress();
    });
  });

  updateModuleProgress();
}

function updateCheckboxStyle(cb) {
  const row = cb.closest('.prometheus-lesson');
  if (!row) return;
  if (cb.checked) {
    row.classList.add('completed');
  } else {
    row.classList.remove('completed');
  }
}

function updateModuleProgress() {
  document.querySelectorAll('.prometheus-module').forEach((mod) => {
    const checks = mod.querySelectorAll('.prometheus-check');
    if (checks.length === 0) return;

    const done = Array.from(checks).filter((c) => c.checked).length;
    const total = checks.length;
    const pct = Math.round((done / total) * 100);

    const bar = mod.querySelector('.prometheus-progress-fill');
    const label = mod.querySelector('.prometheus-progress-label');

    if (bar) bar.style.width = pct + '%';
    if (label) label.textContent = done + ' / ' + total + ' (' + pct + '%)';
  });

  updateOverallProgress();
}

function updateOverallProgress() {
  const allChecks = document.querySelectorAll('.prometheus-check');
  if (allChecks.length === 0) return;

  const done = Array.from(allChecks).filter((c) => c.checked).length;
  const total = allChecks.length;
  const pct = Math.round((done / total) * 100);

  const bar = document.querySelector('.prometheus-overall-fill');
  const label = document.querySelector('.prometheus-overall-label');

  if (bar) bar.style.width = pct + '%';
  if (label) label.textContent = done + ' / ' + total + ' lessons completed (' + pct + '%)';
}

// --- Progress Export/Import ---

function exportProgress() {
  const data = localStorage.getItem(STORAGE_KEY);
  const blob = new Blob([data || '{}'], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'prometheus-progress.json';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function importProgress(file) {
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const parsed = JSON.parse(e.target.result);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(parsed));
      location.reload();
    } catch (err) {
      alert('Ungültige Datei. Bitte eine gültige JSON-Datei wählen.');
    }
  };
  reader.readAsText(file);
}

function resetProgress() {
  if (confirm('Fortschritt wirklich zurücksetzen? Das kann nicht rückgängig gemacht werden.')) {
    localStorage.removeItem(STORAGE_KEY);
    location.reload();
  }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', initProgressTracking);

// Re-initialize on MkDocs navigation (instant loading)
if (typeof document$ !== 'undefined') {
  document$.subscribe(() => initProgressTracking());
}
