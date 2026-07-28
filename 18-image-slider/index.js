const images = [
  "https://picsum.photos/400/250?random=0",
  "https://picsum.photos/400/250?random=1",
  "https://picsum.photos/400/250?random=2",
];
let currentIndex = 0;
const img = document.getElementById("sliderImg");
const dotsContainer = document.getElementById("dots");
images.forEach((_, i) => {
  const dot = document.createElement("span");
  dot.className = "dot" + (i === 0 ? " active" : "");
  dot.dataset.index = i;
  dot.addEventListener("click", () => {
    currentIndex = i;
    updateSlider();
  });
  dotsContainer.appendChild(dot);
});
function updateSlider() {
  img.src = images[currentIndex];
  document
    .querySelectorAll(".dot")
    .forEach((d, i) => d.classList.toggle("active", i === currentIndex));
}
document.getElementById("prevBtn").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateSlider();
});
document.getElementById("nextBtn").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateSlider();
});
