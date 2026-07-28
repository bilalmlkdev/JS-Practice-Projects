function validate(id, errId, test, msg) {
  const input = document.getElementById(id),
    err = document.getElementById(errId);
  if (!test(input.value)) {
    input.classList.add("input-error");
    err.textContent = msg;
    return false;
  }
  input.classList.remove("input-error");
  err.textContent = "";
  return true;
}
document.getElementById("submitBtn").addEventListener("click", () => {
  const valid =
    validate(
      "username",
      "userErr",
      (v) => v.length >= 3,
      "Username must be at least 3 chars",
    ) &&
    validate(
      "email",
      "emailErr",
      (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v),
      "Invalid email",
    ) &&
    validate(
      "password",
      "passErr",
      (v) => v.length >= 6,
      "Password must be at least 6 chars",
    );
  if (valid) alert("Form submitted successfully!");
});
