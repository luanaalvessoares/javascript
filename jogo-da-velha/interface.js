document.addEventListener('DOMContentLoaded', () => {
    let squares = document.querySelectorAll('.square');

    squares.forEach(element => {
        element.addEventListener('click', handleClick);
    })
})

function handleClick(event) {
    let square = event.target;
    let position = square.id;

    handleMove(position);
    updateSquares();
}

function updateSquares() {
    let squares = document.querySelectorAll('.square');

    squares.forEach(element => {
        let position = element.id;
        let piece = stage[position];

        if (piece !== '') { element.innerHTML = `<div class="${piece}"></div>`; }
    })
}