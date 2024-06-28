const eventPageArr = document.getElementsByClassName('events');
const prevMontsBtnArr = document.getElementsByClassName('calendar__prevMonth');
const nextMontsBtnArr = document.getElementsByClassName('calendar__nextMonth');

for (let prevMontsBtn of prevMontsBtnArr) {
    prevMontsBtn.addEventListener('click', () => {
        for (let eventPage of eventPageArr) {
            if (+prevMontsBtn.getAttribute('data-open').slice(-2) > 0) {
                if (eventPage.getAttribute('id') == prevMontsBtn.getAttribute('data-open')) {
                    eventPage.classList.remove('d-none');
                } else {
                    eventPage.classList.add('d-none');
                }
            }
        }
    })
}

for (let nextMontsBtn of nextMontsBtnArr) {
    nextMontsBtn.addEventListener('click', () => {
        for (let eventPage of eventPageArr) {
            if (+nextMontsBtn.getAttribute('data-open').slice(-2) > 0) {
                if (eventPage.getAttribute('id') == nextMontsBtn.getAttribute('data-open')) {
                    eventPage.classList.remove('d-none');
                } else {
                    eventPage.classList.add('d-none');
                }
            }
        }
    })
}



//--calendar-scroll-script--------------------------------------------------------------------------------end-
//--calendar-dates-script-------------------------------------------------------------------------------start-



const datesNotifArr = document.getElementsByClassName('dates__date--notification');



//--calendar-dates-script---------------------------------------------------------------------------------end-
//--filter-script---------------------------------------------------------------------------------------start-



const rubricSelectorContainer = document.getElementById('rubrics');
const rubricSelectorArr = document.querySelectorAll('.rubrics__rubric input[type="checkbox"]');
const rubricItemArr = document.querySelectorAll('.events__content .content__item');

// Объект в котором хранятся значения чекбоксов
let rubricStatusObj = {
    "science": false,
    "education": false,
    "recreation": false,
    "other": false,
}

// Функция выполняющая фильтр списка событий по рубрикам
function filterRubrics() {
    for (let rubricItem of rubricItemArr) {
        if (rubricStatusObj[rubricItem.getAttribute('data-rubric')]) {
            rubricItem.classList.remove('d-none');
        } else {
            rubricItem.classList.add('d-none');
        }
        // Проверка что все чекбоксы не выбраны (false) для отображения всех элементов
        if (Object.values(rubricStatusObj).every(value => value === false)) {
            rubricItem.classList.remove('d-none');
        }
    }
}

// Ивент записывающий значения чекбоксов в объект с последующим вызовом фильрации списка событий по рубрикам
for (let rubricSelector of rubricSelectorArr) {
    rubricSelector.addEventListener('change', () => {
        rubricStatusObj[rubricSelector.parentElement.getAttribute('data-check')] = rubricSelector.checked;
        filterRubrics();
    })
}



//--filter-script-----------------------------------------------------------------------------------------end-