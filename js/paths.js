/* ==========================================================================
   paths.js — Learning Path node interactions: animates each progress bar
   to its target width once the node scrolls into view.
   Target width is read from data-progress on .progress-fill.
   ========================================================================== */

function initPaths(){
  const bars = document.querySelectorAll('.progress-fill');
  if (!bars.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        const target = entry.target.dataset.progress || '0';
        entry.target.style.width = target + '%';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.6 });

  bars.forEach(bar => observer.observe(bar));
}