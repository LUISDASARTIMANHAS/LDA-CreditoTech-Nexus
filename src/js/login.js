/**
 * Inicializa partículas futuristas no canvas
 * @returns {void}
 */
function initParticles() {
  const canvas = document.getElementById("particles-canvas");
  const ctx = canvas.getContext("2d");

  let particles = [];
  const maxParticles = 60;

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  function createParticles() {
    particles = Array.from({ length: maxParticles }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 2 + 1,
      vx: Math.random() - 0.5,
      vy: Math.random() - 0.5
    }));
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(157, 255, 0, 0.6)";
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

/**
 * Manipula envio do formulário de login
 * Preparado para integração com API Node.js
 * @param {SubmitEvent} event
 * @returns {void}
 */
function handleLogin(event) {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  console.log("Login LDA:", { email, password });

  // FUTURO:
  // fetch("/api/login", { method: "POST", body: JSON.stringify({ email, password }) })
}

document
  .getElementById("loginForm")
  .addEventListener("submit", handleLogin);

initParticles();
