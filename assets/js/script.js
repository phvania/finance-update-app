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