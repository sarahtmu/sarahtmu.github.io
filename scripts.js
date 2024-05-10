document.addEventListener('DOMContentLoaded', function() {
    fetch(`https://api.allorigins.win/get?url=${encodeURIComponent('https://serpapi.com/search.json?engine=google_scholar_author&author_id=k-qjL5cAAAAJ&api_key=YOUR_API_KEY')}`)
        .then(response => response.json())
        .then(data => {
            const articles = data.articles || [];
            const articlesContainer = document.getElementById('articles');

            if (articles.length > 0) {
                const list = articles.map(article => `
                    <li>
                        <h3>${article.title}</h3>
                        <p>${article.snippet}</p>
                        <a href="${article.link}" target="_blank">Read more</a>
                    </li>
                `).join('');
                articlesContainer.innerHTML = `<ul>${list}</ul>`;
            } else {
                articlesContainer.innerHTML = '<p>No articles found.</p>';
            }
        })
        .catch(error => {
            console.error('Error fetching articles:', error);
            document.getElementById('articles').innerHTML = '<p>Error loading articles.</p>';
        });
});
