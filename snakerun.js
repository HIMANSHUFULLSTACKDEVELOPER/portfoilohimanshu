 // JavaScript snake start
document.addEventListener('DOMContentLoaded', () => {
    const gameArea = document.getElementById('gameArea');
    let snake = [{x: 10, y: 10}];
    let applePos = {x: 15, y: 15};
    let direction = {x: 1, y: 0};
    let gameInterval = null;

    function draw() {
        gameArea.innerHTML = ''; // Clear previous drawings
        snake.forEach(part => {
            const div = document.createElement('div');
            div.className = 'snakePart';
            div.style.left = part.x * 20 + 'px';
            div.style.top = part.y * 20 + 'px';
            gameArea.appendChild(div);
        });

        const apple = document.createElement('div');
        apple.className = 'apple';
        apple.style.left = applePos.x * 20 + 'px';
        apple.style.top = applePos.y * 20 + 'px';
        gameArea.appendChild(apple);
    }

    function update() {
        const newHead = {x: snake[0].x + direction.x, y: snake[0].y + direction.y};
        snake.unshift(newHead);

        if (newHead.x === applePos.x && newHead.y === applePos.y) {
            generateApple();
        } else {
            snake.pop();
        }

        if (newHead.x < 0 || newHead.x >= 20 || newHead.y < 0 || newHead.y >= 20 || checkCollision()) {
            clearInterval(gameInterval);
            alert('Game Over!');
        }
    }

    function checkCollision() {
        for (let i = 1; i < snake.length; i++) {
            if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) {
                return true;
            }
        }
        return false;
    }

    function generateApple() {
        applePos.x = Math.floor(Math.random() * 20);
        applePos.y = Math.floor(Math.random() * 20);
    }

    function gameLoop() {
        update();
        draw();
    }

    document.addEventListener('keydown', (event) => {
        switch (event.key) {
            case 'ArrowUp':
                if (direction.y !== 1) {
                    direction = {x: 0, y: -1};
                }
                break;
            case 'ArrowDown':
                if (direction.y !== -1) {
                    direction = {x: 0, y: 1};
                }
                break;
            case 'ArrowLeft':
                if (direction.x !== 1) {
                    direction = {x: -1, y: 0};
                }
                break;
            case 'ArrowRight':
                if (direction.x !== -1) {
                    direction = {x: 1, y: 0};
                }
                break;
        }
    });

    gameInterval = setInterval(gameLoop, 100);
});
