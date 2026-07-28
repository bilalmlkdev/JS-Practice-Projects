const modal = document.getElementById("modal");
document
  .getElementById("openBtn")
  .addEventListener("click", () => (modal.style.display = "flex"));
document
  .getElementById("closeBtn")
  .addEventListener("click", () => (modal.style.display = "none"));
window.addEventListener("click", (e) => {
  if (e.target === modal) modal.style.display = "none";
});
