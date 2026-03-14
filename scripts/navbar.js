// Navbar hide/show on scroll direction
const navbar = document.getElementById("navbar");
let lastScrollY = 0;
window.addEventListener("scroll", () => {
  const currentScrollY = window.scrollY;
  navbar.classList.toggle(
    "hidden",
    currentScrollY > lastScrollY && currentScrollY > 72,
  );
  lastScrollY = currentScrollY;
});

// Hamburger menu
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  navLinks.classList.toggle("open");
});
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("open");
    navLinks.classList.remove("open");
  });
});
