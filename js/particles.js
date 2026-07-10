/* ==========================================================================
   particles.js — spawns the ambient floating particles behind the whole page.
   Purely atmospheric: subtle, slow, never distracting.
   ========================================================================== */

function initParticles(count = 14){
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < count; i++){
    const p = document.createElement('div');
    p.className = 'particle';
    const size = 2 + Math.random() * 3;
    p.style.width = size + 'px';
    p.style.height = size + 'px';
    p.style.left = Math.random() * 100 + 'vw';
    p.style.top = Math.random() * 100 + 'vh';
    p.style.animationDuration = (10 + Math.random() * 10) + 's';
    p.style.animationDelay = (Math.random() * 6) + 's';
    fragment.appendChild(p);
  }

  document.body.appendChild(fragment);
}