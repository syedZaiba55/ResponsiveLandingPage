const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");
const form = document.getElementById("signupForm");
const emailInput = document.getElementById("email");
const msg = document.getElementById("signupMsg");

// ---------- Mobile menu ----------
// Shows/hides the navigation on small screens and updates aria-expanded for screen readers.
menuBtn.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", String(isOpen));
});

// Close the menu after a link is tapped
nav.querySelectorAll("a").forEach(link =>
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
  })
);

// Close the menu if the screen is resized to desktop width
window.addEventListener("resize", () => {
  if (window.innerWidth > 640) {
    nav.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
  }
});

// ---------- Sign-up form ----------
// isValidEmail(): simple pattern check for something@something.something
function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

// showMessage(): displays a status message; type is "ok" or "error"
function showMessage(text, type) {
  msg.textContent = text;
  msg.className = "signup-msg " + type;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = emailInput.value.trim();

  if (!isValidEmail(email)) {
    showMessage("Enter a valid email address, like you@example.com.", "error");
    emailInput.focus();
    return;
  }

  showMessage("You're on the list. We'll email you when pre-orders open.", "ok");
  form.reset();
});