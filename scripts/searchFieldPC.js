const searchFieldPCActivator = document.getElementById('item--search--PC');
const searchFieldPC = document.getElementById('searchFieldPC');

document.addEventListener('click', (e) => {
    if (e.target == searchFieldPCActivator || searchFieldPCActivator.contains(e.target)) {
        searchFieldPCActivator.classList.add('d-none');
        searchFieldPC.classList.remove('d-none');
    } else {
        searchFieldPCActivator.classList.remove('d-none');
        searchFieldPC.classList.add('d-none');
    }
});