// Footer menu
const footerMenu = document.getElementById('footerMenu');
const levelOneItems = footerMenu.getElementsByClassName('item--levelOne');
for (let levelOneItem of levelOneItems) {
    levelOneItem.addEventListener('click', () => {
        if (window.innerWidth < 768) {
            levelOneItem.classList.toggle('item--expanded');
        }
    })
}