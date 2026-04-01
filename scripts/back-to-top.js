const backToTop = document.getElementById("backToTop");
let backToTopTicking = false;

window.addEventListener("scroll", () => {
  if (backToTopTicking) return;
  requestAnimationFrame(() => {
    backToTop.classList.toggle("visible", window.scrollY > 300);
    backToTopTicking = false;
  });
  backToTopTicking = true;
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
