const scrollTopButton = document.getElementById('scrollTopButton');

window.addEventListener('scroll', function () {
    const currentScroll = document.documentElement.scrollTop;
    if (currentScroll > window.innerHeight) {
        scrollTopButton.style.opacity = 1;
        scrollTopButton.style.visibility = 'visible';
    } else {
        scrollTopButton.style.opacity = 0;
        scrollTopButton.style.visibility = 'hidden';
    }
});

scrollTopButton.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});