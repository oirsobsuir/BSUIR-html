const accordionSlider = document.getElementById("accordionSlider");
const slides = accordionSlider.getElementsByClassName("accordionSlider__slide");

document.addEventListener('click', (e) => {
    if (e.target == accordionSlider || accordionSlider.contains(e.target)) {
        for (let slide of slides) {
            if (e.target == slide || slide.contains(e.target)) {
                slide.classList.add('slide--selected');
            } else {
                slide.classList.remove('slide--selected');
            }
        }
    } else {
        for (let slide of slides) {
            slide.classList.remove('slide--selected');
        }
        slides[0].classList.add('slide--selected');
    }
})