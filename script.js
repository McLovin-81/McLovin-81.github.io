// Get references to the form and result elements
const form = document.getElementById('pollForm');
const result = document.getElementById('result');

// Create an object to store the answer counts
const answerCounts =
{
    red: 0,
    blue: 0,
    green: 0 
};

// Handle form submission
form.addEventListener('submit', function(event)
{
    event.preventDefault(); // Prevent page reload.
    
    const selectedAnswer = document.querySelector('input[name="color"]:checked').value;

    // Increment the count for the selected answer
    answerCounts[selectedAnswer]++;

    // Display the total answers and most selected answer
    result.innerHTML = `
    Total answers: ${Object.values(answerCounts).reduce((a, b) => a + b)}
    <br>
    Most selected answer: ${Object.keys(answerCounts).reduce((a, b) => answerCounts[a] > answerCounts[b] ? a : b)}`;

    // Reset the form
    form.reset();
});
