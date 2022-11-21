let stage = ['', '', '', '', '', '', '', '', '', '',];
let player = 0;
let pieces = ['o', 'x'];

function handleMove(position) {
    stage[position] = pieces[player];

    player == 0 ? player = 1 : player = 0;
}