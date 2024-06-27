const prevMonth_btn = document.getElementById("filter__prevMonth");
const nextMonth_btn = document.getElementById("filter__nextMonth");
const container = document.getElementById("calendar__container");
const monthes = document.querySelectorAll(".calendar__item");

function getCurCalendarPosition() {
    return +container.style.transform.split("(")[1].split("%")[0];
}

prevMonth_btn.addEventListener('click', () => {
    if (getCurCalendarPosition() < 0) {
        container.style.transform = `translateX(${getCurCalendarPosition() + 100}%)`;
    }
})

nextMonth_btn.addEventListener('click', () => {
    if (getCurCalendarPosition() > -monthes.length * 100 + 100) {
        container.style.transform = `translateX(${getCurCalendarPosition() - 100}%)`;
    }
})