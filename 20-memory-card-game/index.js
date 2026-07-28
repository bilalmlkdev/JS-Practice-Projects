const emojis = ["🚀", "🌟", "🎈", "🐶", "🐱", "🐭", "🐹", "🐰"];
const cards = [...emojis, ...emojis].sort(() => Math.random() - 0.5);
let flipped = [],
  matched = 0,
  lock = false;
const grid = document.getElementById("grid");
cards.forEach((emoji, idx) => {
  const div = document.createElement("div");
  div.className = "card";
  div.dataset.index = idx;
  div.addEventListener("click", () => flipCard(div, emoji));
  grid.appendChild(div);
});
function flipCard(card, emoji) {
  if (lock || card.classList.contains("flipped") || flipped.length === 2)
    return;
  card.textContent = emoji;
  card.classList.add("flipped");
  flipped.push(card);
  if (flipped.length === 2) {
    lock = true;
    setTimeout(() => {
      if (flipped[0].textContent === flipped[1].textContent) {
        matched += 2;
        document.getElementById("msg").textContent = `Matched: ${matched}/16`;
        if (matched === 16) alert("You Win!");
      } else {
        flipped.forEach((c) => {
          c.textContent = "";
          c.classList.remove("flipped");
        });
      }
      flipped = [];
      lock = false;
    }, 500);
  }
}
