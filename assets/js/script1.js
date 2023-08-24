let searchButton = document.querySelector(".search-button");
let searchBar = document.querySelector("search-bar");
let apiKey = '776397213a7853bd2cde47a8d5d0d109';
let apiUrl = 'https://gnews.io/api/v4/search?q=stocks&category=business&lang=en&apikey=' + apiKey;

/*function fetchGnewsSearch() {
    fetch(apiUrl)
        .then(function (response) {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(function (data) {
            console.log(data)
            displayOtherNews(data)
        })
        .catch(function (error) {
            console.error('Fetch error:', error);
        });
}*/

//searchButton.addEventListener("click", fetchGnewsSearch);

function displayOtherNews(data) {
    let results = document.querySelector(".search-results");
    for (let i = 0; i < data.articles.length; i++) {
        let resultEl = document.createElement("div");
        resultEl.className = "news-item";
        let titleEl = document.createElement("h4");
        titleEl.className = "titleEl";
        let descEl = document.createElement("p");
        descEl.className = "descEl";

        resultEl.appendChild(titleEl);
        resultEl.appendChild(descEl);
        results.appendChild(resultEl);

        titleEl.textContent = data.articles[i].title;
        descEl.textContent = data.articles[i].description;

        resultEl.style.backgroundImage = `url(${data.articles[i].image})`;
        resultEl.style.backgroundSize = "cover 100%";
    }
}

searchButton.addEventListener("click", function (event) {
    event.preventDefault();
  
    let searchInput = document.querySelector(".search-bar").value.trim();
  
    if (searchInput !== "") {

      const apiKey = "776397213a7853bd2cde47a8d5d0d109";
      const apiUrl = 'https://gnews.io/api/v4/search?q=' + searchInput + '&category=business&lang=en&apikey=' + apiKey;

        fetch(apiUrl)
            .then(function (response) {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(function (data) {
                console.log(data)
                displayOtherNews(data);
            })
            .catch(function (error) {
                console.error('Fetch error:', error);
            });

    } else {
      alert("Please enter a valid search term.");
    }
  });
