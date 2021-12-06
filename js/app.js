let mouseCursor = document.querySelector('.cursor');
window.addEventListener('mousemove', cursor);
function cursor(e) {
    mouseCursor.style.top = e.pageY + 'px';
    mouseCursor.style.left = e.pageX + "px";
}

// const audio = new Audio();
// audio.src = "audio/britney.mp3";

