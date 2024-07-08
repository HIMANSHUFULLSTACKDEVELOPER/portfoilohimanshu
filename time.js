    /* Function to display appropriate greeting based on time input */
    function displayGreeting() {
        let timeInput = document.getElementById("numberInput").value;
        let greetingMsg = "";
        if (timeInput >= 1 && timeInput < 12) {
            greetingMsg = "Good morning";
        } else if (timeInput >= 12 && timeInput < 15) {
            greetingMsg = "Good afternoon";
        } else if (timeInput >= 15 && timeInput < 18) {
            greetingMsg = "Good evening";
        } else {
            greetingMsg = "Good night";
        }
        document.getElementById("greeting").textContent = greetingMsg;
    }