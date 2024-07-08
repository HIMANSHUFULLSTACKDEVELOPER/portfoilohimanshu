document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('game-form');
    const displayText = document.getElementById('display-text');
    const loader = document.getElementById('loader');
    const result = document.getElementById('result');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        playGame();
    });

    function playGame() {
        const betNumber = parseInt(document.getElementById('bet-number').value);
        const coins = parseInt(document.getElementById('coins').value);

        if (isNaN(betNumber) || isNaN(coins) || betNumber < 1 || betNumber > 99 || coins < 1) {
            alert('Please enter valid numbers.');
            return;
        }

        displayText.textContent = 'Drawing numbers...';
        loader.classList.remove('hidden');
        result.classList.add('hidden');

        setTimeout(() => {
            const winningNumber = Math.floor(Math.random() * 99) + 1;
            loader.classList.add('hidden');

            if (betNumber === winningNumber) {
                result.textContent = `Congratulations! You won ${coins * 10} coins!`;
                result.style.color = '#2ecc71';
            } else {
                result.textContent = `Sorry, the winning number was ${winningNumber}. Try again!`;
                result.style.color = '#e74c3c';
            }

            result.classList.remove('hidden');
            displayText.textContent = 'Result';
        }, 2000);
    }
});