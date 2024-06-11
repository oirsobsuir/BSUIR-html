const video__previewImages = document.getElementsByClassName("video__previewImage");
const video__players = document.getElementsByClassName("video__player");

for (let i = 0; i < video__previewImages.length; i++) {
    video__previewImages[i].addEventListener('click', () => {
        video__players[i].src = 'https://www.youtube.com/embed/lV0odgAiXfw?autoplay=1';
        video__previewImages[i].classList.add("d-none");
    })
}