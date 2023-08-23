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



const apiKey =  'c4f80c001d11db5f507256c8b1a12be4'
const apiUrl = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=c4f80c001d11db5f507256c8b1a12be4';

async function fetchNewsData() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        return data.articles;
    } catch (error) {
        console.error('Error fetching news data:', error);
    }
}


fetchNewsData().then(newsArticles => {
    newsArticles.forEach(article => {
        addNewsStory(article.title, article.description);
    });
});

// Add script that will pull news data and populate it into a small scrollable bar under the main display

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
        displayCurrentWeather(data)
    })
    .catch(function (error) {
        console.error('Fetch error:', error);
    });
}

function displayCurrentWeather(data) {
    document.getElementById("other1").textContent = data.articles[5].title;
    document.getElementById("other2").textContent = data.articles[6].title;
    document.getElementById("other3").textContent = data.articles[7].title;
    document.getElementById("other4").textContent = data.articles[8].title;
    document.getElementById("other5").textContent = data.articles[9].title;
}

fetchGnewsSearch();

