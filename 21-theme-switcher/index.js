const body = document.body;
const btn = document.getElementById("toggleBtn");
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark");
  btn.textContent = "Switch to Light";
}
btn.addEventListener("click", () => {
  body.classList.toggle("dark");
  const isDark = body.classList.contains("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");
  btn.textContent = isDark ? "Switch to Light" : "Switch to Dark";
});
