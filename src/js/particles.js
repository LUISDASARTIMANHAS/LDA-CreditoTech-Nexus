/**
 * Inicializa animações de entrada ao scroll
 * @returns {void}
 */
function initScrollReveal() {
  const elements = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    },
    { threshold: 0.2 }
  );

  elements.forEach(el => observer.observe(el));
}

/**
 * Inicializa partículas no canvas (background futurista leve)
 * @returns {void}
 */
function initParticles() {
  const canvas = document.getElementById("particles-canvas");
  const ctx = canvas.getContext("2d");

  let particles = [];
  const particleCount = 80;

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  /**
   * Cria partículas
   * @returns {void}
   */
  function createParticles() {
    particles = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        speedX: Math.random() - 0.5,
        speedY: Math.random() - 0.5
      });
    }
  }

  /**
   * Atualiza e desenha partículas
   * @returns {void}
   */
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
      p.x += p.speedX;
      p.y += p.speedY;

      if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
      if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(34, 197, 238, 0.7)";
      ctx.fill();
    });

    requestAnimationFrame(animate);
  }

  window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    createParticles();
  });

  createParticles();
  animate();
}

/* Init */
initScrollReveal();
initParticles();
