const searchBtn = document.querySelector(".search-btn");
const searchBar = document.querySelector(".search");

searchBtn.addEventListener('click', function() {
    searchBar.classList.toggle("active");
})