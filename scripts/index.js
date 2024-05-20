// Burger menu open/close buttons
const burgerMenu = document.getElementById('burgerMenu');
const openBurgerButton = document.getElementById('item--burgerMenu');
const closeBurgerButton = document.getElementById('burgerMenu__closeButton');

openBurgerButton.addEventListener('click', () => {
    burgerMenu.style.left = '0';
})

closeBurgerButton.addEventListener('click', () => {
    burgerMenu.style.left = '-101vw';
})

// Burger menu list script
const levelOne_items = document.getElementsByClassName('itemsContainer__item');
const levelTwo_items = document.getElementsByClassName('list--levelTwo');

for (let i = 0; i < levelOne_items.length; i++) {
    levelOne_items[i].addEventListener('click', () => {
        for (let levelOne_item of levelOne_items) {
            levelOne_item.classList.remove('item--selected')
        }

        for (let levelTwo_item of levelTwo_items) {
            levelTwo_item.classList.add('d-none');
        }

        levelOne_items[i].classList.add('item--selected');
        levelTwo_items[i].classList.remove('d-none');
    })
    console.log(levelOne_items[i])
}

// Burger menu horizontal scroll by default
let elems = document.getElementsByClassName('list--levelTwo');

for (let elem of elems) {
    elem.addEventListener('wheel', (e) => {
        e.preventDefault();
        elem.scrollLeft += e.deltaY;
    })
}

// Header scroll animation
const logoText = document.getElementById('header__logoText');
const burgerMenuText = document.getElementById('item--burgerMenuText');

window.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop > 40) {
        burgerMenuText.style.display = 'none';
    } else {
        burgerMenuText.style.display = '';
    }
})