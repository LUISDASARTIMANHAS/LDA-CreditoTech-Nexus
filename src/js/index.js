/**
 * Inicializa comportamento do carrossel
 * @returns {void}
 */
function initCarousel() {
  const carousel = document.getElementById("carousel");
  const track = carousel.querySelector(".carousel-track");

  carousel.addEventListener("mouseenter", () => {
    track.style.animationPlayState = "paused";
  });

  carousel.addEventListener("mouseleave", () => {
    track.style.animationPlayState = "running";
  });
}

initCarousel();
