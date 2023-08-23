let searchButton = document.querySelector(".search-button")
let apiKey = '776397213a7853bd2cde47a8d5d0d109';
let apiUrl = 'https://gnews.io/api/v4/top-headlines?category=business&lang=en&apikey=' + apiKey;

function fetchGnewsSearch() {
fetch(apiUrl)
    .then(function (response) {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(function (data) {
        console.log(data)
    })
    .catch(function (error) {
        console.error('Fetch error:', error);
    });
}

searchButton.addEventListener("click", fetchGnewsSearch);

