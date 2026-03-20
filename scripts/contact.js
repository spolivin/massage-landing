const form = document.querySelector(".contact-form");
const btn = form.querySelector(".contact-btn");

/* ── Validation helpers ─────────────────────────────────────── */
function getError(input) {
  if (input.validity.valueMissing) return "This field is required.";
  if (input.type === "email" && input.validity.typeMismatch)
    return "Please enter a valid email address.";
  return "";
}

function setFieldState(input, error) {
  const group = input.closest(".form-group");
  const existing = group.querySelector(".field-msg");
  if (existing) existing.remove();

  if (error) {
    input.classList.add("input-error");
    input.classList.remove("input-valid");
    const msg = document.createElement("span");
    msg.className = "field-msg field-msg--error";
    msg.textContent = error;
    group.appendChild(msg);
  } else {
    input.classList.remove("input-error");
    input.classList.add("input-valid");
    const msg = document.createElement("span");
    msg.className = "field-msg field-msg--valid";
    msg.textContent = "Looks good!";
    group.appendChild(msg);
  }
}

/* ── Per-field blur validation ──────────────────────────────── */
form.querySelectorAll("input, textarea").forEach((input) => {
  input.addEventListener("blur", () => {
    const error = getError(input);
    if (input.value.trim() === "" && !input.required) return;
    setFieldState(input, error);
  });

  input.addEventListener("input", () => {
    if (input.classList.contains("input-error")) {
      const error = getError(input);
      if (!error) setFieldState(input, "");
    }
  });
});

/* ── Submit ─────────────────────────────────────────────────── */
form.addEventListener("submit", (e) => {
  e.preventDefault();

  let hasError = false;
  form.querySelectorAll("input, textarea").forEach((input) => {
    const error = getError(input);
    if (error) {
      setFieldState(input, error);
      hasError = true;
    }
  });
  if (hasError) return;

  /* Loading state */
  btn.disabled = true;
  btn.classList.add("btn--loading");
  btn.textContent = "Sending…";

  /* Simulate async send */
  setTimeout(() => {
    form.classList.add("form--success");
    form.innerHTML = `
      <div class="form-success">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="12" cy="12" r="10"/>
          <path d="M9 12l2 2 4-4"/>
        </svg>
        <h3>Message sent!</h3>
        <p>Thank you for reaching out. We'll be in touch within one business day.</p>
      </div>`;
  }, 1500);
});
