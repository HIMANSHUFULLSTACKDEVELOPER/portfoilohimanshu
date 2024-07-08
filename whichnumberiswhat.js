function checkPositivity() {
    // Retrieve the entered number
    let number = parseInt(document.getElementById('number1').value);
    // Get the results div element
    let resultsDiv = document.getElementById('results');
    // Clear previous results
    resultsDiv.innerHTML = '';

    // Check if the entered value is a number
    if (!isNaN(number)) {
        // If number is greater than 0, it's positive
        if (number > 0) {
            resultsDiv.innerHTML = 'The number is positive.';
        }
        // If number is less than 0, it's negative
        else if (number < 0) {
            resultsDiv.innerHTML = 'The number is negative.';
        }
        // If number is 0, it's neither positive nor negative
        else {
            resultsDiv.innerHTML = 'The number is zero, which is neither positive nor negative.';
        }
    }
}