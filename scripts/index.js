// Burger menu open/close buttons
const burgerMenu = document.getElementById('burger__wrapper');
const openBurgerButton = document.getElementById('item--burgerButton');
const closeBurgerButton = document.getElementById('burger__closeButton');

openBurgerButton.addEventListener('click', () => {
    burgerMenu.style.left = '0';
})

closeBurgerButton.addEventListener('click', () => {
    burgerMenu.style.left = '-101vw';
})

// Burger menu list script
const levelOne_items = document.getElementsByClassName('item--levelOne');
const levelTwo_lists = document.getElementsByClassName('list--levelTwo');

for (let i = 0; i < levelOne_items.length; i++) {
    levelOne_items[i].addEventListener('click', () => {
        for (let levelOne_item of levelOne_items) {
            levelOne_item.classList.remove('item--selected')
        }

        for (let levelTwo_list of levelTwo_lists) {
            levelTwo_list.classList.add('d-none');
        }

        levelOne_items[i].classList.add('item--selected');
        levelTwo_lists[i].classList.remove('d-none');
    })
}

// Burger menu horizontal scroll by default
let lists = document.getElementsByClassName('list--levelTwo');

for (let list of lists) {
    list.addEventListener('wheel', (e) => {
        e.preventDefault();
        list.scrollLeft += e.deltaY;
    })
}