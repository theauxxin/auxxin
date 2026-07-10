/* ==========================================================================
   cards.js — interactive hover behavior for node-planets and stat pills.
   Kept intentionally subtle: a small lift + brighter glow, 250ms, no bounce.
   ========================================================================== */

function initCards(){
  document.querySelectorAll('.node-planet').forEach(planet => {
    const glow = planet.querySelector('.blob-glow');
    planet.addEventListener('mouseenter', () => {
      planet.style.transition = 'transform 250ms ease';
      planet.style.transform = 'translateY(-4px)';
      if (glow) glow.style.filter = 'blur(2px) brightness(1.25)';
    });
    planet.addEventListener('mouseleave', () => {
      planet.style.transform = 'translateY(0)';
      if (glow) glow.style.filter = 'blur(2px)';
    });
  });

  document.querySelectorAll('.stat-pill').forEach(pill => {
    pill.addEventListener('mouseenter', () => {
      pill.style.transition = 'border-color 250ms ease';
      pill.style.borderColor = 'rgba(255,255,255,0.24)';
    });
    pill.addEventListener('mouseleave', () => {
      pill.style.borderColor = 'rgba(255,255,255,0.08)';
    });
  });
}