const board = ['', '', '', '', '', '', '', '', '', '',];
const player = 0;
const pieces = ['o', 'x'];
const gameOver = false;


function isWin() {
    let winStates = [ [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6] ];

    for(let states in winStates) {
        const sequence = winStates[states];

        const position1 = sequence[0];
        const position2 = sequence[1];
        const position3 = sequence[2];

        if( board[position1] == board[position2] && board[position1] == board[position3] && board[position1] != '' ) {
            return true;
        }
    }

    return false;
}

function handleMove(position) {
    if(gameOver) { return; }

    if(board[position] == '') {
        board[position] = pieces[player];

        gameOver = isWin();

        if(!gameOver) { player = (player == 0) ? 1 : 0 }
    }

    return gameOver;
}

// modal to draw the player who starts the first game

const switchModal = () => {
    const modal = document.querySelector('.modal');
    const actualStyle = modal.style.display;

    if(actualStyle == 'block') {
        modal.style.display = 'none';
    } else {
        modal.style.display = 'block';
        const content = document.querySelector('.content');
        content.innerHTML = `Who starts the game is the player ` + (1 + Math.floor(2* Math.random()));
    }
}

const btn = document.querySelector('.modalBtn');
btn.addEventListener('click', switchModal);

window.onclick = function (event) {
    const modal = document.querySelector('.modal');

    if(event.target == modal) { switchModal() }
}