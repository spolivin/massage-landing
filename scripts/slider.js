// Services slider
const track = document.getElementById("servicesTrack");
const prevBtn = document.getElementById("slidePrev");
const nextBtn = document.getElementById("slideNext");
const counter = document.getElementById("sliderCounter");
const slides = track.querySelectorAll(".service-slide");
const total = slides.length;
let current = 0;

function goTo(index) {
  current = index;
  track.scrollTo({
    left: track.offsetWidth * current,
    behavior: "smooth",
  });
  counter.textContent = `${current + 1} / ${total}`;
  prevBtn.disabled = current === 0;
  nextBtn.disabled = current === total - 1;
}

prevBtn.addEventListener("click", () => goTo(current - 1));
nextBtn.addEventListener("click", () => goTo(current + 1));

goTo(0);
