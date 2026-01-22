/**
 * Inicializa partículas futuristas no canvas
 * @returns {void}
 */
function initParticles() {
  const canvas = document.getElementById("particles-canvas");
  const ctx = canvas.getContext("2d");

  let particles = [];
  const maxParticles = 70;

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
      ctx.fillStyle = "rgba(139, 92, 246, 0.6)";
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
 * Manipula envio do formulário de cadastro
 * Preparado para integração com API Node.js
 * @param {SubmitEvent} event
 * @returns {void}
 */
function handleRegister(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const cpf = document.getElementById("cpf").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  if (password !== confirmPassword) {
    alert("As senhas não coincidem.");
    return;
  }

  console.log("Cadastro LDA:", {
    name,
    email,
    cpf,
    password
  });

  // FUTURO:
  // fetch("/api/register", { method: "POST", body: JSON.stringify({ name, email, cpf, password }) })
}

document
  .getElementById("registerForm")
  .addEventListener("submit", handleRegister);

initParticles();
