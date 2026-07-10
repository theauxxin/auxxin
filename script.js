/* ==========================================================================
   script.js — composition root for JavaScript.
   index.html only ever includes this one script tag. This file loads every
   module in /js, in dependency order, then hands off to main.js.

   (No bundler in this project on purpose — it's a static site. If Auxxin
   grows a build step later, this file becomes the single place to swap
   plain <script> loading for real ES module imports.)
   ========================================================================== */

(function loadAuxxinScripts(){
  const modules = [
    'js/navbar.js',
    'js/animations.js',
    'js/particles.js',
    'js/cards.js',
    'js/paths.js',
    'js/main.js' // must load last — it calls init*() for everything above
  ];

  function loadNext(i){
    if (i >= modules.length) return;
    const script = document.createElement('script');
    script.src = modules[i];
    script.onload = () => loadNext(i + 1);
    document.body.appendChild(script);
  }

  loadNext(0);
})();