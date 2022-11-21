document.addEventListener('DOMContentLoaded', () => {
    let squares = document.querySelectorAll('.square');

    squares.forEach(element => {
        element.addEventListener('click', handleClick);
    })
})

function handleClick(event) {
    let square = event.target;
    let position = square.id;

    if(handleMove(position)) {
        setTimeout(() => {
            alert('The game end.')
        }, 50)
    };
    updateSquare();
}

function updateSquare() {
    let squares = document.querySelectorAll('.square');

    squares.forEach(element => {
        let position = element.id;
        let piece = stage[position];

        if(piece !== '') element.innerHTML = `<div class="${piece}"></div>`;
    })
}