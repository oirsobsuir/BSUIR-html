const rubricSelectorContainer = document.getElementById("rubrics");
const rubricSelectorArr = document.querySelectorAll(".rubrics__rubric input[type='checkbox']");
const rubricItemArr = document.querySelectorAll(".events__content .content__item");

// Объект в котором хранятся значения чекбоксов
let rubricStatusObj = {
    "science": false,
    "education": false,
    "recreation": false,
    "other": false,
}

// Функция выполняющая фильтр списка событий по рубрикам
function filterRubrics() {
    rubricItemArr.forEach(rubricItem => {
        if (rubricStatusObj[rubricItem.getAttribute('data-rubric')]) {
            rubricItem.classList.remove('d-none');
        } else {
            rubricItem.classList.add('d-none');
        }
        // Проверка что все чекбоксы не выбраны (false) для отображения всех элементов
        if (Object.values(rubricStatusObj).every(value => value === false)) {
            rubricItem.classList.remove('d-none');
        }
    })
}

// Ивент записывающий значения чекбоксов в объект с последующим вызовом фильрации списка событий по рубрикам
rubricSelectorArr.forEach(rubricSelector => {
    rubricSelector.addEventListener('change', () => {
        rubricStatusObj[rubricSelector.parentElement.getAttribute('data-check')] = rubricSelector.checked;
        filterRubrics();
    })
})