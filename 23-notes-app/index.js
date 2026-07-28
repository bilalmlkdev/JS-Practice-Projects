let notes = JSON.parse(localStorage.getItem("notes")) || [];
const container = document.getElementById("notesContainer");
function render() {
  container.innerHTML = "";
  notes.forEach((note, idx) => {
    const div = document.createElement("div");
    div.className = "note-item";
    div.innerHTML = `<span>${note}</span><button class="del-btn" data-idx="${idx}">Delete</button>`;
    container.appendChild(div);
  });
  document.querySelectorAll(".del-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      notes.splice(parseInt(btn.dataset.idx), 1);
      save();
      render();
    });
  });
}
function save() {
  localStorage.setItem("notes", JSON.stringify(notes));
}
document.getElementById("addBtn").addEventListener("click", () => {
  const input = document.getElementById("noteInput");
  if (input.value.trim() !== "") {
    notes.push(input.value.trim());
    input.value = "";
    save();
    render();
  }
});
render();
