document.addEventListener("DOMContentLoaded", function() {
  const carousel = document.querySelector(".logo-carousel");
  const carouselWidth = carousel.offsetWidth;
  let totalWidth = 0;

  const logoItems = carousel.querySelectorAll(".logo-item");
  logoItems.forEach(item => {
    const clone = item.cloneNode(true);
    carousel.appendChild(clone);
    totalWidth += item.offsetWidth;
  });

  carousel.style.width = totalWidth * 2 + "px";

  if (totalWidth > carouselWidth) {
    let animationDuration = totalWidth / 100; // Adjust speed of animation

    let keyframes = `@keyframes scroll {
      0% { transform: translateX(0); }
      100% { transform: translateX(-${totalWidth}px); }
    }`;

    const style = document.createElement('style');
    style.innerHTML = keyframes;
    document.head.appendChild(style);

    carousel.style.animation = `scroll ${animationDuration}s linear infinite`;

    // Pause animation on hover
    carousel.addEventListener("mouseenter", function() {
      carousel.style.animationPlayState = "paused";
    });

    carousel.addEventListener("mouseleave", function() {
      carousel.style.animationPlayState = "running";
    });
  }
});
