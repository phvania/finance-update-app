// script.js

const autoscrollContainer = document.querySelector('.autoscroll-container');

function scrollToBottom() {
    autoscrollContainer.scrollTop = autoscrollContainer.scrollHeight;
}

function addNewsStory(title, content) {
    const newsItem = document.createElement('div');
    newsItem.classList.add('news-item');

    const newsTitle = document.createElement('h2');
    newsTitle.textContent = title;

    const newsContent = document.createElement('p');
    newsContent.textContent = content;

    newsItem.appendChild(newsTitle);
    newsItem.appendChild(newsContent);

    autoscrollContainer.appendChild(newsItem);

    scrollToBottom();
}

// Fetch news data and populate the main display
function mainDisplay() {
    let apiKey = 'c4f80c001d11db5f507256c8b1a12be4';
    let apiUrl = 'https://gnews.io/api/v4/top-headlines?category=business&lang=en&apikey=' + apiKey;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Loop through the articles and add them to the autoscroll container
            for (let i = 0; i < 5; i++) {
                addNewsStory(data.articles[i].title, data.articles[i].description);
            }

            // Start autoscrolling after populating the container
            setInterval(autoScrollHeader, 10000, data);
        })
        .catch(error => {
            console.error('Fetch error:', error);
        });
}
mainDisplay();

let scrollIndex = 0; // Start with the first news title

// Autoscroll the header
function autoScrollHeader(data) {
    const newsTitles = [
        data.articles[0].title,
        data.articles[1].title,
        data.articles[2].title,
        data.articles[3].title,
        data.articles[4].title
    ];

    document.getElementById("header-news").textContent = newsTitles[scrollIndex];
    if(scrollIndex == 4) {
    scrollIndex = 0

} else {scrollIndex++}
}

// Fetch news data and populate the "Other News" section
function fetchGnewsSearch() {
    let apiKey = 'c4f80c001d11db5f507256c8b1a12be4';
    let apiUrl = 'https://gnews.io/api/v4/top-headlines?category=business&lang=en&apikey=' + apiKey;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            displayOtherNews(data);
        })
        .catch(error => {
            console.error('Fetch error:', error);
        });
}
fetchGnewsSearch();

// Display news in the "Other News" section
function displayOtherNews(data) {
    document.getElementById("other1").textContent = data.articles[5].title;
    document.getElementById("other2").textContent = data.articles[6].title;
    document.getElementById("other3").textContent = data.articles[7].title;
    document.getElementById("other4").textContent = data.articles[8].title;
    document.getElementById("other5").textContent = data.articles[9].title;
}


/*function scrollToBottom() {
    const autoscrollContainer = document.querySelector('.autoscroll-container');
    autoscrollContainer.scrollTop = autoscrollContainer.scrollHeight;
}

function addNewsStory(title, content) {
    const newsItem = document.createElement('div');
    newsItem.classList.add('news-item');

    const newsTitle = document.createElement('h2');
    newsTitle.textContent = title;

    const newsContent = document.createElement('p');
    newsContent.textContent = content;

    newsItem.appendChild(newsTitle);
    newsItem.appendChild(newsContent);

    autoscrollContainer.appendChild(newsItem);

    scrollToBottom();
}

function mainDisplay() {
    let apiKey = 'c4f80c001d11db5f507256c8b1a12be4';
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
mainDisplay()

function fetchGnewsSearch() {
    let apiKey = 'c4f80c001d11db5f507256c8b1a12be4';
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
fetchGnewsSearch();

function displayOther(data) {
    document.getElementById("other1").textContent = data.articles[5].title;
    document.getElementById("other2").textContent = data.articles[6].title;
    document.getElementById("other3").textContent = data.articles[7].title;
    document.getElementById("other4").textContent = data.articles[8].title;
    document.getElementById("other5").textContent = data.articles[9].title;
}




let scrollIndex = 0; // Start with the first news title

function autoScrollHeader(data) {
    const newsTitles = [
        data.articles[0].title,
        data.articles[1].title,
        data.articles[2].title,
        data.articles[3].title,
        data.articles[4].title
    ];
ayhaams-branch
function fetchGnewsSearch() {
let apiKey = 'c4f80c001d11db5f507256c8b1a12be4';
let apiUrl = 'https://gnews.io/api/v4/top-headlines?category=business&lang=en&apikey=' + apiKey;

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
}

function displayOtherNews(data) {
    document.getElementById("other1").textContent = data.articles[5].title;
    document.getElementById("other2").textContent = data.articles[6].title;
    document.getElementById("other3").textContent = data.articles[7].title;
    document.getElementById("other4").textContent = data.articles[8].title;
    document.getElementById("other5").textContent = data.articles[9].title;
  
    document.getElementById("header-news").textContent = newsTitles[scrollIndex];

    scrollIndex = (scrollIndex + 1) % newsTitles.length;
}




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
main
}

} */
