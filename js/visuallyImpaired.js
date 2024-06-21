const visImpWrapper = document.getElementById("forVisuallyImpaired");
const visImpBtn_PC = document.getElementById("visuallyImpaired_PC");
const visImpBtn_Mob = document.getElementById("visuallyImpaired_Mobile");

visImpBtn_PC.addEventListener("click", () => {
    visImpBtn_PC.classList.toggle("item--open");
    visImpBtn_Mob.classList.toggle("item--open");
    visImpWrapper.classList.toggle("forVisuallyImpaired--open");
})
visImpBtn_Mob.addEventListener("click", () => {
    visImpBtn_PC.classList.toggle("item--open");
    visImpBtn_Mob.classList.toggle("item--open");
    visImpWrapper.classList.toggle("forVisuallyImpaired--open");
})