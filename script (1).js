/* =========================================
   SAYANG.JS — Pink Love Website Scripts
   ========================================= */

// ===== FLOATING HEARTS BACKGROUND =====
(function initFloatingHearts() {
  const container = document.getElementById('hearts-bg');
  if (!container) return;

  const emojis = ['💗', '💕', '🌸', '💖', '✨', '💓', '🌷', '💞', '🎀', '🌹'];

  for (let i = 0; i < 30; i++) {
    const el = document.createElement('div');
    el.className = 'hf';
    el.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    el.style.left            = Math.random() * 100 + 'vw';
    el.style.fontSize        = (0.7 + Math.random() * 1.4) + 'rem';
    el.style.animationDuration = (8 + Math.random() * 14) + 's';
    el.style.animationDelay  = (Math.random() * 12) + 's';
    container.appendChild(el);
  }
})();


// ===== BURST HEARTS ON BUTTON CLICK =====
function launchHearts() {
  const burst  = document.getElementById('burst');
  if (!burst) return;

  const emojis = ['💖', '💗', '🌸', '✨', '💕', '💝', '🌷', '⭐', '🎀', '💞', '🌹'];

  for (let i = 0; i < 45; i++) {
    setTimeout(function () {
      const el = document.createElement('div');
      el.className   = 'burst-h';
      el.textContent = emojis[Math.floor(Math.random() * emojis.length)];
      el.style.left      = (12 + Math.random() * 76) + 'vw';
      el.style.top       = (18 + Math.random() * 55) + 'vh';
      el.style.fontSize  = (1.0 + Math.random() * 1.6) + 'rem';
      el.style.animationDelay = (Math.random() * 0.45) + 's';
      burst.appendChild(el);
      setTimeout(function () { el.remove(); }, 1700);
    }, i * 32);
  }
}


// ===== SCROLL REVEAL ANIMATION =====
(function initScrollReveal() {
  const cards = document.querySelectorAll('.photo-card');
  if (!cards.length) return;

  // Set initial hidden state
  cards.forEach(function (card, i) {
    card.style.opacity   = '0';
    card.style.transform = 'translateY(40px)';
    card.style.transition = 'opacity 0.6s ease ' + (i * 0.08) + 's, transform 0.6s ease ' + (i * 0.08) + 's';
  });

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.style.opacity   = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  cards.forEach(function (card) { observer.observe(card); });
})();
