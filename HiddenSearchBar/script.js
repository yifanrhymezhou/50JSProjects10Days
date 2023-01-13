const searchBtn = document.querySelector('.search-btn');
const searchContainer = document.querySelector('.search');
const searchInput = document.querySelector('.input');

searchBtn.addEventListener('click', () => {
    searchContainer.classList.toggle('active');
})
searchInput.addEventListener('click', () => {
    searchInput.style.border = '1px solid';
    searchInput.focus();
})