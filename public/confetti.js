(function() {
  const script = document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/npm/canvas-confetti@1.4.0/dist/confetti.browser.min.js';
  script.onload = () => {
    window.confetti = confetti;
    confetti.create(document.getElementById('confetti-canvas'), {
      resize: true,
      useWorker: true
    })({
      particleCount: 200,
      spread: 120,
      origin: { y: 0.6 }
    });
  };
  document.head.appendChild(script);
})();