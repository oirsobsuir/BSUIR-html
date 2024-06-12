// Target menu horizontal scroll by default
let tg_items = document.getElementsByClassName('targetMenu__item');
for (let tg_item of tg_items) {
    tg_item.getElementsByTagName("ul")[0].addEventListener('wheel', (e) => {
        e.preventDefault();
        tg_item.getElementsByTagName("ul")[0].scrollLeft += e.deltaY;
    })
}