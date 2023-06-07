const pollForm = document.getElementById('pollForm');
const resultContainer = document.getElementById('resultContainer');
const resultText = document.getElementById('resultText');

pollForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  const selectedColor = document.querySelector('input[name="color"]:checked');
  
  if (selectedColor) {
    const color = selectedColor.value;
    resultText.textContent = `Your favorite color is: ${color}`;
    resultContainer.style.display = 'block';
  }
});

