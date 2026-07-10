/* ==========================================================================
   main.js — the only file index.html should ever grow another <script> tag
   next to. Waits for DOM, then starts every module in a sensible order.
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initParticles();
  initCards();
  initPaths();
  initAnimations();
});