let container = document.getElementById('container');
let video = document.getElementById('video');

document.getElementById('close').onclick = () => {
    container.style.display = 'none';
    video.muted = true;
}

document.getElementById('rewind').onclick = () => { video.currentTime -= 10 };

document.getElementById('play').onclick = () => { video.play() };

document.getElementById('pause').onclick = () => { video.pause() };

document.getElementById('fast-forward').onclick = () => { video.currentTime += 10 };

document.getElementById('volume-down').onclick = () => { video.volume -= 0.2 };

document.getElementById('volume-up').onclick = () => { video.volume += 0.2 };

let contClick = 0;
document.getElementById('mute').onclick = () => {  
    if(contClick == 0) { 
        video.muted = true;
        contClick += 1;
    } else {
        video.muted = false;
        contClick = 0;
    }
}

document.getElementById('rewind-time').onclick = () => { video.playbackRate -= 0.1 };

document.getElementById('fast-forward-time').onclick = () => { video.playbackRate += 0.1 };