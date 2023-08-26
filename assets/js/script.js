// script.js
let stockSearchBtn = document.querySelector("#search-stock")

function showCurrentDate() {
    let currentDate = dayjs();
    let timeDisplay = document.getElementById("time-display");
    let formattedTime = currentDate.format("hh:mm A");
    let startTime = dayjs("09:30 AM", "hh:mm A");
    let endTime = dayjs("04:00 PM", "hh:mm A");
    let statusText = "";

    if (currentDate.isAfter(startTime) && currentDate.isBefore(endTime)) {
        timeDisplay.style.color = "green";
        statusText = "Open";
    } else {
        timeDisplay.style.color = "orange";
        statusText = "Closed";
    }
    timeDisplay.textContent = formattedTime + " (" + statusText + ")";
}


setInterval(showCurrentDate, 1000);

// Stock search input that takes the stock symbol and pulls its data
stockSearchBtn.addEventListener("click", function (event) {
    event.preventDefault();
  
    let stockInput = document.querySelector("#stock-input").value.trim();
    let stockDate = dayjs().format("YYYY-MM-DD");

    if (stockInput !== "") {
        let selectedDate = dayjs(stockDate);
        let dayOfWeek = selectedDate.day();
        
        //check if the current day is sunday or saturday, if yes then move back to the most recent friday
        if (dayOfWeek === 6 || dayOfWeek === 0) {
            if (dayOfWeek === 0) {
                selectedDate = selectedDate.subtract(2, 'day');
            } else {
                selectedDate = selectedDate.subtract(1, 'day'); 
            }
        }
        

        let apiKey = 'API_KEYdcR2OM8AOV2TJET1N345V7QU22QLOMD2';
        let apiUrl = 'https://api.finage.co.uk/history/stock/open-close?stock=' + stockInput +  '&date=' + selectedDate.format("YYYY-MM-DD") + '&apikey=' + apiKey;

        fetch(apiUrl)
            .then(function (response) {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(function (data) {
                console.log(data);
                displayStockData(data);
            })
            .catch(function (error) {
                console.error('Fetch error:', error);
            });

    } else {
      alert("Please enter a valid search term.");
    }
});


  // function to display the data of a searched stock
function displayStockData(data) {
    let stockDisplay = document.querySelector(".stock-list");
    stockDisplay.innerHTML = '';

    let stockResult = document.createElement("p");
    stockResult.className = "stock-result";
    let nameEl = document.createElement("h4");
    nameEl.className = "stock-name";
    let openEl = document.createElement("li");
    let closeEl = document.createElement("li");
    let highEl = document.createElement("li");
    let lowEl = document.createElement("li");

    stockResult.appendChild(nameEl);
    stockResult.appendChild(openEl);
    stockResult.appendChild(closeEl);
    stockResult.appendChild(highEl);
    stockResult.appendChild(lowEl);
    stockDisplay.appendChild(stockResult);

    nameEl.textContent = data.symbol;
    openEl.textContent = "OPEN: " + data.open;
    closeEl.textContent = "CLOSE: " + data.close;
    highEl.textContent = "HIGH: " + data.high;
    lowEl.textContent = "LOW: " + data.low;
}

let searchForm = document.querySelector('.search-container');
let searchInput = document.getElementById('search-input');

searchForm.addEventListener('submit', function(event) {
    event.preventDefault();
    let extendedSearch = searchInput.value;
    localStorage.setItem('searchQuery', extendedSearch);
    searchInput.value = '';
    window.location.href = 'index1.html';
});

function fetchGnewsSearch() {
    let apiKey = '776397213a7853bd2cde47a8d5d0d109';
    let apiUrl = 'https://gnews.io/api/v4/top-headlines?category=business&lang=en&apikey=' + apiKey;

    fetch(apiUrl)
        .then(function (response) {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            displayOther(data);
        })
        .catch(function (error) {
            console.error('Fetch error:', error);
        });
}

const autoscrollContainer = document.querySelector('.autoscroll-container');

function scrollToBottom() {
    const autoscrollContainer = document.querySelector('.autoscroll-container');
    autoscrollContainer.scrollTop = autoscrollContainer.scrollHeight;
}

function mainDisplay() {
    let apiKey = '776397213a7853bd2cde47a8d5d0d109';
    let apiUrl = 'https://gnews.io/api/v4/top-headlines?category=business&lang=en&apikey=' + apiKey;

    fetch(apiUrl)
        .then(function (response) {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(function (data) {
            
            mainDisplayResults(data)
        })
        .catch(function (error) {
            console.error('Fetch error:', error);
        });
        function mainDisplayResults(data) {
            for(i = 0; i < 5; i++)
            console.log(data.articles[i])
        }
}
mainDisplay();
fetchGnewsSearch();

// function that pulls api news data and displays it in other news div
function displayOther(data) {
    let other1Img = document.getElementById("other1");
    let other2Img = document.getElementById("other2");
    let other3Img = document.getElementById("other3");
    let other4Img = document.getElementById("other4");
    let other5Img = document.getElementById("other5");
    let title5El = document.querySelector("#title5");
    let title6El = document.querySelector("#title6");
    let title7El = document.querySelector("#title7");
    let title8El = document.querySelector("#title8");
    let title9El = document.querySelector("#title9");

    title5El.innerHTML = `<a href="${data.articles[5].url}" target="_blank">${data.articles[5].title}</a>`;
    title6El.innerHTML = `<a href="${data.articles[6].url}" target="_blank">${data.articles[6].title}</a>`;
    title7El.innerHTML = `<a href="${data.articles[7].url}" target="_blank">${data.articles[7].title}</a>`;
    title8El.innerHTML = `<a href="${data.articles[8].url}" target="_blank">${data.articles[8].title}</a>`;
    title9El.innerHTML = `<a href="${data.articles[9].url}" target="_blank">${data.articles[9].title}</a>`;

    other1Img.style.backgroundImage = `url(${data.articles[5].image})`;
    other2Img.style.backgroundImage = `url(${data.articles[6].image})`;
    other3Img.style.backgroundImage = `url(${data.articles[7].image})`;
    other4Img.style.backgroundImage = `url(${data.articles[8].image})`;
    other5Img.style.backgroundImage = `url(${data.articles[9].image})`;

}

let scrollIndex = 0; // Start with the first news title

function autoScrollHeader(data) {
    const newsTitles = [
        data.articles[0].title,
        data.articles[1].title,
        data.articles[2].title,
        data.articles[3].title,
        data.articles[4].title
    ]};

function createArticleElement(article) {
    const articleElement = document.createElement('div');
    articleElement.classList.add('news-article');

    const newsImage = document.createElement('img');
    newsImage.src = article.urlToImage;
    newsImage.alt = article.title;

    const newsTitle = document.createElement('h2');
    newsTitle.textContent = article.title;

    const newsDescription = document.createElement('p');
    newsDescription.textContent = article.description;

    articleElement.appendChild(newsImage);
    articleElement.appendChild(newsTitle);
    articleElement.appendChild(newsDescription);

    return articleElement;
}