// Burger open/close buttons
const burgerWrapper = document.getElementById('burgerWrapper');
const burgerOpen = document.getElementById('burgerOpen');
const burgerClose = document.getElementById('burgerClose');
burgerOpen.addEventListener('click', () => {
    burgerWrapper.style.left = '0';
})
burgerClose.addEventListener('click', () => {
    burgerWrapper.style.left = '-101vw';
})

// Burger menu PC
const burgerMenuPC = document.getElementById('burgerMenuPC');
const levelOneitemsPC = burgerMenuPC.getElementsByClassName('item--levelOne');
const levelTwolistsPC = burgerMenuPC.getElementsByClassName('list--levelTwo');
for (let i = 0; i < levelOneitemsPC.length; i++) {
    levelOneitemsPC[i].addEventListener('click', () => {
        for (let levelOneitemPC of levelOneitemsPC) {
            levelOneitemPC.classList.remove('item--selected');
        }

        for (let levelTwolistPC of levelTwolistsPC) {
            levelTwolistPC.classList.add('d-none');
        }

        levelOneitemsPC[i].classList.add('item--selected');
        levelTwolistsPC[i].classList.remove('d-none');
    })
}

// Burger horizontal scroll by default
let lists = burgerMenuPC.getElementsByClassName('list--levelTwo');
for (let list of lists) {
    list.addEventListener('wheel', (e) => {
        e.preventDefault();
        list.scrollLeft += e.deltaY;
    })
}