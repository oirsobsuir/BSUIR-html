const searchFieldMobileActivator = document.getElementById('item--search--Mobile');
const searchFieldMobile = document.getElementById('searchFieldMobile');

document.addEventListener('click', (e) => {
    if (e.target == searchFieldMobileActivator || searchFieldMobileActivator.contains(e.target)) {
        searchFieldMobileActivator.classList.add('d-none');
        searchFieldMobile.classList.remove('d-none');
    } else if (e.target !== searchFieldMobile && !searchFieldMobile.contains(e.target)) {
        searchFieldMobileActivator.classList.remove('d-none');
        searchFieldMobile.classList.add('d-none');
    }
});