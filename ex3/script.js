const board = document.getElementById('board');

function createCell() {
    const cell = document.createElement('div');
    cell.classList.add('game__board__cell');
    cell.addEventListener('click', () => {
        if (cell.classList.contains('active')) {
            cell.classList.remove('active');
        }
    });
    return cell;
}

function getRandomCell() {
    const cells = document.querySelectorAll('.game__board__cell');
    const randomIndex = Math.floor(Math.random() * cells.length);
    return cells[randomIndex];
}

function activateRandomCell() {
    const cell = getRandomCell();
    cell.classList.add('active');
    setTimeout(() => {
        cell.classList.remove('active');
        activateRandomCell();
    }, Math.random() * 1500 + 500);
}

for (let i = 0; i < 16; i++) {
    const cell = createCell();
    board.appendChild(cell);
}

activateRandomCell();
