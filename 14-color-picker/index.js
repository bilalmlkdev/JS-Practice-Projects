const picker = document.getElementById("colorPicker");
const box = document.getElementById("colorBox");
const text = document.getElementById("colorText");
picker.addEventListener("input", (e) => {
  const color = e.target.value;
  box.style.backgroundColor = color;
  text.textContent = `HEX: ${color}`;
});
