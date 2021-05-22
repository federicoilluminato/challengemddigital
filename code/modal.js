function handler(){
    const modal = document.querySelector('.video-modal');
    const vid = document.querySelector('.vid')
    modal.classList.toggle('active');
    vid.pause();
    vid.currentTime = 0;
}