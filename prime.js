function checkPrime() {
    let number = document.getElementById("numberInput").value;
    let isPrime = true;

    if (number <= 1) {
        isPrime = false;
    } else {
        for (let i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) {
                isPrime = false;
                break;
            }
        }
    }

    let resultDiv = document.getElementById("display");
    if (isPrime) {
        resultDiv.innerText = number + " is a prime number.";
        resultDiv.style.color = "green";
    } else {
        resultDiv.innerText = number + " is not a prime number.";
        resultDiv.style.color = "red";
    }
}