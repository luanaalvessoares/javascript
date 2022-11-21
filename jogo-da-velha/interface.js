document.addEventListener('DOMContentLoaded', () => {
    let squares = document.querySelectorAll('.square');

    squares.forEach(square => {
        square.addEventListener('click', handleClick);
    })
})

function handleClick(event) {
    let square = event.target;
    let position = square.id;

    if(handleMove(position)) {
        setTimeout(() => {
            alert(`The game end. The win is ${player}`)
        }, 50);
    };
    updateSquare(position);
}

function updateSquare(position) {
    let square = document.getElementById(position.toString());
    let piece = board[position];
    square.innerHTML = `<div class="${piece}"></div>`;
}

