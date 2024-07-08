// Wait for the DOM to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {
  // Get references to DOM elements
  const ageInput = document.getElementById('age');
  const calculateBtn = document.getElementById('calculateBtn');
  const ticketPrice = document.getElementById('ticketPrice');

  // Add click event listener to the calculate button
  calculateBtn.addEventListener('click', calculateTicketPrice);

  // Add keypress event listener to the age input for Enter key
  ageInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
          calculateTicketPrice();
      }
  });

  // Function to calculate and display ticket price
  function calculateTicketPrice() {
      const age = parseInt(ageInput.value);

      // Validate age input
      if (isNaN(age) || age < 1) {
          showError("Please enter a valid age.");
          return;
      }

      // Calculate price based on age
      let price;
      if (age < 12) {
          price = 5;
      } else if (age < 18) {
          price = 10;
      } else if (age < 60) {
          price = 15;
      } else {
          price = 7.5;
      }

      // Display the result
      showResult(`Your ticket price is ${price.toFixed(2)}`);
  }

  // Function to display error messages
  function showError(message) {
      ticketPrice.textContent = message;
      ticketPrice.style.color = '#ff0000';
      ticketPrice.classList.remove('hidden');
  }

  // Function to display the calculated price
  function showResult(message) {
      ticketPrice.textContent = message;
      ticketPrice.style.color = '#4caf50';
      ticketPrice.classList.remove('hidden');
  }
});