// Footer menu
const footerMenu = document.getElementById('footerMenu');
const levelOneLists = footerMenu.getElementsByClassName('list--levelOne');
for (let levelOneList of levelOneLists) {
    levelOneList.addEventListener('click', () => {
        if (window.innerWidth < 768) {
            levelOneList.classList.toggle('item--expanded');
        }
    })
}