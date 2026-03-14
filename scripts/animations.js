// ── About: left column slides in from left, right from right ──
const aboutSection = document.getElementById("about");

const aboutObserver = new IntersectionObserver(
  ([entry]) => {
    if (entry.isIntersecting) {
      aboutSection.classList.add("in-view");
      aboutObserver.disconnect();
    }
  },
  { threshold: 0.2 },
);

aboutObserver.observe(aboutSection);

// ── Benefits & Testimonials: cards fade up with stagger ───────
function animateCards(sectionId, cardSelector) {
  const section = document.getElementById(sectionId);
  const cards = section.querySelectorAll(cardSelector);

  cards.forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.15}s`;
  });

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        cards.forEach((card) => card.classList.add("in-view"));
        observer.disconnect();
      }
    },
    { threshold: 0.5 },
  );

  observer.observe(section);
}

animateCards("benefits", ".benefit-item");
animateCards("testimonials", ".testimonial-item");
