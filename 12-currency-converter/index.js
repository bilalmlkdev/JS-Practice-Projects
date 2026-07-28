const rates = { USD: 1, EUR: 0.85 };
document.getElementById("convertBtn").addEventListener("click", () => {
  const amt = parseFloat(document.getElementById("amount").value) || 0;
  const from = document.getElementById("from").value;
  const to = document.getElementById("to").value;
  const result = (amt / rates[from]) * rates[to];
  document.getElementById("result").textContent = `${result.toFixed(2)} ${to}`;
});
