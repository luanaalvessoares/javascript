let board = ['', '', '', '', '', '', '', '', ''];
let player = Math.floor(2* Math.random());
let pieces = ['o', 'x'];
let gameOver = false;

function handleMove(position) {
    if(gameOver) { return; }

    if(board[position] == '') {
        board[position] = pieces[player];

        gameOver = isWin();

        if(!gameOver) { player = (player == 0) ? 1 : 0} 
    }

    return gameOver;
}

function isWin() {
    let winStates = [ [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6] ];

    for(let states in winStates) {
        let sequence = winStates[states];

        let position1 = sequence[0];
        let position2 = sequence[1];
        let position3 = sequence[2];

        if( board[position1] == board[position2] && board[position1] == board[position3] && board[position1] != '' ) {
            return true;
        }
    }

    return false;
}

function resetGame() {
    board = ['', '', '', '', '', '', '', '', ''];
    pieces = ['o', 'x'];
    gameOver = false;
    restart();
}

const modal = document.querySelector('.modal');

const showModal = document.querySelector('.showModal');
showModal.addEventListener('click', function gameStatus() {
    for(let content of board) {
        if(content == '') {
            modal.style.display = 'block';
            const firstPlayer = document.querySelector('.firstPlayer');
            firstPlayer.innerHTML = `Who starts the game is the player ${player}`;   
        } else {
            let start = document.getElementById('start');
            start.value = 'Start';
            modal.style.display = 'none';
            resetGame();            
        }
    }
});

const closeModal = document.querySelector('.closeModal');
closeModal.addEventListener('click', () => modal.style.display = 'none');
