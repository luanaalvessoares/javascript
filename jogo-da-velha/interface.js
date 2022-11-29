document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll('.square');

    squares.forEach(element => {
        element.addEventListener('click', handleClick);
    })
})

function handleClick(event) {
    if(handleMove(event.target.id)) {
        setTimeout(() => {
            alert(`The game end. The win is player ${player}`)
            resetGame();
        }, 50);
    };
    updateSquare(event.target.id);
}

function updateSquare(position) {
    if(gameStatus == true) {
        let start = document.getElementById('start');
        start.value = 'Restart'; 
        let square = document.getElementById(position.toString());
        let piece = board[position];
        square.innerHTML = `<div class="${piece}"></div>`;      
    }
}

function restart() {
    let squares = document.querySelectorAll('.square');

    squares.forEach((element) => {
        let position = element.id;
        let symbol = "";

        element.innerHTML = `<div class='${symbol}'></div>`
    });
}
