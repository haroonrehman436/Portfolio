
// Optional animation
document.addEventListener("DOMContentLoaded", () => {
    const title = document.querySelector(".hero-title");
    title.style.opacity = 0;
    title.style.transform = "translateY(-20px)";
    setTimeout(() => {
      title.style.transition = "all 0.8s ease";
      title.style.opacity = 1;
      title.style.transform = "translateY(0)";
    }, 300);
  });
  