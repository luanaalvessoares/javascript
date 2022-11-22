document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll('.square');

    squares.forEach(element => {
        element.addEventListener('click', handleClick);
    })
})

function handleClick(event) {
    if(handleMove(event.target.id)) {
        setTimeout(() => {
            alert(`The game end. The win is ${player()}`)
        }, 50);
    };
    updateSquare(event.target.id);
}

function updateSquare(position) {
    let square = document.getElementById(position.toString());
    let piece = board[position];
    square.innerHTML = `<div class="${piece}"></div>`;
}

