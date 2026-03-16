document.querySelectorAll(".faq-question").forEach((button) => {
  button.addEventListener("click", () => {
    const answer = button.nextElementSibling;
    const isOpen = button.getAttribute("aria-expanded") === "true";

    // Close all items
    document.querySelectorAll(".faq-question").forEach((btn) => {
      btn.setAttribute("aria-expanded", "false");
      btn.nextElementSibling.style.maxHeight = null;
    });

    // Open clicked item if it was closed
    if (!isOpen) {
      button.setAttribute("aria-expanded", "true");
      answer.style.maxHeight = answer.scrollHeight + "px";
    }
  });
});
