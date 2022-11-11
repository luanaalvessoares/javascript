let container = document.getElementById('container');
let video = document.getElementById('video');

document.getElementById('close').onclick = function closed() {
    container.style.display = 'none';
    video.muted = true;
}

document.getElementById('rewind').onclick = function rewind() {
    video.currentTime -= 10;
}

document.getElementById('play').onclick = function play() {
    video.play();
}

document.getElementById('pause').onclick = function pause() {
    video.pause();
}

document.getElementById('fast-forward').onclick = function fastForward() {
    video.currentTime += 10;
}

document.getElementById('volume-down').onclick = function volumeDown() {
    video.volume -= 0.2;
}

document.getElementById('volume-up').onclick = function volumeUp() {
    video.volume += 0.2;
}

let contClick = 0;
document.getElementById('mute').onclick = function volumeMute() {  
    if(contClick == 0) { 
        video.muted = true;
        contClick += 1;
    } else {
        video.muted = false;
        contClick = 0;
    }
}

document.getElementById('rewind-time').onclick = function rewindTime() {
    video.playbackRate -= 0.1;
}

document.getElementById('fast-forward-time').onclick = function fastForwardTime() {
    video.playbackRate += 0.1;
}