let stage = ['', '', '', '', '', '', '', '', '', '',];
let player = 0;
let pieces = ['o', 'x'];
let gameOver = false;

function handleMove(position) {
    if(gameOver) { return; }

    if(stage[position] == '') {
        stage[position] = pieces[player];

        gameOver = isWin();

        if(!gameOver) { player = (player == 0) ? 1 : 0 }
    }

    return gameOver();
}

function isWin() {
    let winStates = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9],
        [1, 5, 9],
        [3, 5, 7],
    ];

    for(let states in winStates) {
        let sequence = winStates[states];

        let position1 = sequence[0];
        let position2 = sequence[1];
        let position3 = sequence[2];

        if( stage[position1] == stage[position2] && stage[position1] == stage[position3] && stage[position1] != '' ) { 
                return true 
        }
    }

    return false;
}