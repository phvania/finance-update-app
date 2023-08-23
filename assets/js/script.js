const apiKey =  'c4f80c001d11db5f507256c8b1a12be4'
const apiUrl = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=' + apiKey;

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