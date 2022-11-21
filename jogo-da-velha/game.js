let stage = ['', '', '', '', '', '', '', '', '', '',];
let player = 0;
let pieces = ['o', 'x'];
let gameOver = false;
let winStates = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

function handleMove(position) {
    if(gameOver) { return; }

    if(stage[position] == '') {
        stage[position] = pieces[player];

        gameOver = isWin();

        if(!gameOver) { player = (player == 0) ? 1 : 0 }
    }

    return gameOver;
}

function isWin() {
    for(let i = 0; i < winStates.length; i++) {
        let sequence = winStates[i];

        let position1 = sequence[0];
        let position2 = sequence[1];
        let position3 = sequence[2];

        if( stage[position1] == stage[position2] && stage[position1] == stage[position3] && stage[position1] != '' ) { 
            return true;
        }
    }

    return false;
}