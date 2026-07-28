let timeLeft = 25 * 60,
  isWork = true,
  interval = null;
const display = document.getElementById("timer");
function update() {
  const m = String(Math.floor(timeLeft / 60)).padStart(2, "0");
  const s = String(timeLeft % 60).padStart(2, "0");
  display.textContent = `${m}:${s}`;
}
document.getElementById("startBtn").addEventListener("click", () => {
  if (interval) return;
  interval = setInterval(() => {
    timeLeft--;
    update();
    if (timeLeft === 0) {
      clearInterval(interval);
      interval = null;
      isWork = !isWork;
      timeLeft = isWork ? 25 * 60 : 5 * 60;
      update();
      alert(isWork ? "Break over! Back to work." : "Work done! Take a break.");
    }
  }, 1000);
});
document.getElementById("stopBtn").addEventListener("click", () => {
  clearInterval(interval);
  interval = null;
});
document.getElementById("resetBtn").addEventListener("click", () => {
  clearInterval(interval);
  interval = null;
  isWork = true;
  timeLeft = 25 * 60;
  update();
});
update();
