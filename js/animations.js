/* ==========================================================================
   animations.js — fade-in / scroll reveal for trail nodes, plus the hero
   scene's explanatory motion (each animation maps to one concept).
   ========================================================================== */

function initScrollReveal(){
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.35 });

  document.querySelectorAll('.node-content, .community-copy, .community-visual')
    .forEach(el => observer.observe(el));
}

function initHeroMotion(){
  // Orbit ring around the central planet — represents the network "orbiting" around a system
  const ring = document.getElementById('ring');
  if (ring){
    ring.animate(
      [{ transform:'rotate(0deg)' }, { transform:'rotate(360deg)' }],
      { duration: 40000, iterations: Infinity, easing:'linear' }
    );
  }

  // Cloud gently floats — represents cloud infrastructure being "always on", never static
  const cloud = document.getElementById('cloud');
  if (cloud){
    cloud.animate(
      [{ transform:'translateY(0px)' }, { transform:'translateY(-10px)' }, { transform:'translateY(0px)' }],
      { duration: 6000, iterations: Infinity, easing:'ease-in-out' }
    );
  }

  // Server lights blink in sequence — represents active request handling
  ['serverLight1','serverLight2','serverLight3'].forEach((id, i) => {
    const el = document.getElementById(id);
    if (el){
      el.animate(
        [{ opacity:1 }, { opacity:0.25 }, { opacity:1 }],
        { duration: 1800, iterations: Infinity, delay: i * 400, easing:'ease-in-out' }
      );
    }
  });

  // Lock shackle breathes shut — represents a connection being secured
  const shackle = document.getElementById('lockShackle');
  if (shackle){
    shackle.animate(
      [{ transform:'translateY(0px)' }, { transform:'translateY(4px)' }, { transform:'translateY(0px)' }],
      { duration: 4500, iterations: Infinity, easing:'ease-in-out' }
    );
  }

  // Key rotates slowly — represents encryption/decryption in progress
  const key = document.getElementById('keyGroup');
  if (key){
    key.animate(
      [{ transform:'translate(240px,300px) rotate(0deg)' }, { transform:'translate(240px,300px) rotate(360deg)' }],
      { duration: 9000, iterations: Infinity, easing:'linear' }
    );
  }

  // Finale shield pulses once the visitor reaches the end of the journey
  const finaleShield = document.getElementById('finaleShield');
  if (finaleShield){
    finaleShield.animate(
      [{ transform:'translate(500px,210px) scale(1)' }, { transform:'translate(500px,210px) scale(1.08)' }, { transform:'translate(500px,210px) scale(1)' }],
      { duration: 3600, iterations: Infinity, easing:'ease-in-out' }
    );
  }
}

function initAnimations(){
  initScrollReveal();
  initHeroMotion();
}