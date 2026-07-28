const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let isDrawing = false;
ctx.strokeStyle = "#000";
ctx.lineWidth = 2;
canvas.addEventListener("mousedown", (e) => {
  isDrawing = true;
  ctx.beginPath();
  ctx.moveTo(e.offsetX, e.offsetY);
});
canvas.addEventListener("mousemove", (e) => {
  if (isDrawing) {
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
  }
});
canvas.addEventListener("mouseup", () => (isDrawing = false));
canvas.addEventListener("mouseout", () => (isDrawing = false));
document
  .getElementById("clearBtn")
  .addEventListener("click", () => ctx.clearRect(0, 0, 600, 400));
