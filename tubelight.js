     // Function to perform the operator practice
     function practisoperator() {
        // Get the values from input fields and parse them as integers
        let x = parseInt(document.getElementById("input-one").value);
        let y = parseInt(document.getElementById("input-two").value);
        let sum = x + y;
        // Check if both values are greater than 12
        let isCorrect = x > 12 && y > 12;

        // Update the output text and color based on the check
        document.getElementById("output").innerHTML = isCorrect ? "True!" : "False!";
        document.getElementById("output").style.color = isCorrect ? "green" : "red";

        // Update the bulb image based on the check
        if (isCorrect) {
            document.getElementById("bulb").src = "http://pluspng.com/img-png/light-bulb-png-light-bulb-png-file-png-image-1200.png";
        } else {
            document.getElementById("bulb").src = "https://tse1.mm.bing.net/th?id=OIP.gOuIirQ3d7LkqZb-6gKsbgHaL0&pid=Api&P=0&h=180";
        }
    }