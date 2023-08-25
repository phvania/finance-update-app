// script.js

function fetchGnewsSearch() {
    let apiKey = '51618f13bb4d86b0dab9c98a7263a01a';
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

//let scrollIndex = 0; // Start with the first news title

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


