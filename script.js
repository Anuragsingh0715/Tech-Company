document.getElementById("year").textContent = new Date().getFullYear();

// Live breakpoint panel
const vpWidth = document.getElementById("vpWidth");
const bpName = document.getElementById("bpName");
const bpCols = document.getElementById("bpCols");
const bpNote = document.getElementById("bpNote");
function updateBreakpoint() {
  const w = window.innerWidth;
  let name = "xs", cols = 1;
  if (w >= 1400) { name = "xxl"; cols = 3; }
  else if (w >= 1200) { name = "xl"; cols = 3; }
  else if (w >= 992) { name = "lg"; cols = 3; }
  else if (w >= 768) { name = "md"; cols = 2; }
  else if (w >= 576) { name = "sm"; cols = 1; }
  vpWidth.textContent = w + " px";
  bpName.textContent = name;
  bpCols.className = "bp-cols " + (cols === 3 ? "three" : cols === 2 ? "two" : "");
  bpNote.textContent = "Service cards: " + cols + " per row";
}
window.addEventListener("resize", updateBreakpoint);
updateBreakpoint();

// Form validation
const form = document.getElementById("contactForm");
const feedback = document.getElementById("formFeedback");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  feedback.className = "mt-3";
  feedback.textContent = "";
  if (!form.checkValidity()) {
    form.querySelectorAll(".form-control").forEach(function (el) {
      el.classList.toggle("is-invalid", !el.checkValidity());
    });
    form.reportValidity();
    return;
  }
  form.querySelectorAll(".form-control").forEach(function (el) { el.classList.remove("is-invalid"); });
  feedback.className = "mt-3 alert alert-success";
  feedback.textContent = "Form validated. A backend is needed to send or store this message.";
  form.reset();
});
form.addEventListener("input", function (e) {
  if (e.target.classList.contains("is-invalid") && e.target.checkValidity()) e.target.classList.remove("is-invalid");
});
