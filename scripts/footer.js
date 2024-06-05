// Footer menu
const footerMenu = document.getElementById('footerMenu');
const levelOneItems = footerMenu.getElementsByClassName('item--levelOne');
for (let levelOneItem of levelOneItems) {
    levelOneItem.addEventListener('click', () => {
        levelOneItem.classList.toggle('item--expanded');
    })
}