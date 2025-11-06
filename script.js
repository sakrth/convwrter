document.getElementById('convertBtn').addEventListener('click', () => {
  const km = parseFloat(document.getElementById('kilometers').value);
  const resultElement = document.getElementById('result');

  if (isNaN(km) || km < 0) {
    resultElement.textContent = "⚠️ Please enter a valid positive number.";
    resultElement.style.color = "red";
    return;
  }

  const miles = km * 0.621371;
  resultElement.textContent = `${km} kilometers = ${miles.toFixed(2)} miles.`;
  resultElement.style.color = "green";
});

document.getElementById('clearBtn').addEventListener('click', () => {
  document.getElementById('kilometers').value = "";
  document.getElementById('result').textContent = "";
});
    