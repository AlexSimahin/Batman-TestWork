const btnVideo = document.querySelector('#btn-video');
const videoOverlay = document.querySelector('.overlay');
let videoPlayer = document.querySelector('.video-player');

btnVideo.addEventListener('click', () => {
    videoOverlay.classList.toggle('active-overlay');
});

videoOverlay.addEventListener('click', () => {
    videoOverlay.classList.toggle('active-overlay');
});

videoPlayer.addEventListener('click', (e) => {
    let target = e.target;
    console.log(target);
});

console.log(videoPlayer);