let seconds = 0,
  interval = null;
const timeDisplay = document.getElementById("time");
function updateDisplay() {
  const m = String(Math.floor(seconds / 60)).padStart(2, "0");
  const s = String(seconds % 60).padStart(2, "0");
  timeDisplay.textContent = `${m}:${s}`;
}
document.getElementById("startBtn").addEventListener("click", () => {
  if (!interval)
    interval = setInterval(() => {
      seconds++;
      updateDisplay();
    }, 1000);
});
document.getElementById("stopBtn").addEventListener("click", () => {
  clearInterval(interval);
  interval = null;
});
document.getElementById("resetBtn").addEventListener("click", () => {
  clearInterval(interval);
  interval = null;
  seconds = 0;
  updateDisplay();
});
updateDisplay();
