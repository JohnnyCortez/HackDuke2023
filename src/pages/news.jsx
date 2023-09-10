import { useEffect, useState } from "react";
function News() {
    // const [data, setData] = useState(null)
    // fetch('https://newsapi.org/v2/everything?'+'q=climateORenvironment&'+'from=2023-01-01&'+'sortBy=popularity&'+'apiKey=877af5c9a5d142bca3f45e125ea8d373', {
    // https://jsonplaceholder.typicode.com/
    // climateORenvironmentORpollutionORfireORwaterORenergy
//


    fetch('https://newsapi.org/v2/everything?q=climate&q=environment&from=2023-09-09&to=2023-09-09&sortBy=relevancyANDpopularity&apiKey=46ab106b4b0749b78c5899d83e96dff5',{
    method: 'GET',
    headers: {
        'Authorization': 'Bearer 46ab106b4b0749b78c5899d83e96dff5'
    }
    })
    .then(res => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        if (!res.json) {
            throw new Error('JSON data null');
        }
        return res.json(); // Parse JSON data
      })
    .then(newsdata => {
        document.querySelector('#api-news').innerHTML = '';
        if (!newsdata.articles) {
            throw new Error ("Error: No articles found in the data.");
        }
        const articles = newsdata.articles;

        for (let i = 0; i < 10 && i < articles.length; i++) {
            const article = articles[i];
            const title = article.title;
            const description = article.description;
            const url = article.url;
            const urlToImage = article.urlToImage;
            const publishedAt = article.publishedAt;
                const date = publishedAt.substring(0, 10);
            const words = article.content.split(' ');
            const first20Words = words.slice(0, 20).join(' ');

            const markup = `
            <div class = "news-container">
                <ol>
                    <li>
                        <a href="${url}">    
                            <img src="${urlToImage}" alt = "news!"></img>
                        </a>
                        <div>
                        <h3>${title}</h3> 
                        <h6>${date}</h6>
                        <p>${description} </p>
                        <p>${first20Words}</p>
                        </div> 
                    </li>
                </ol>
            </div>
            `
            document.querySelector('#api-news').insertAdjacentHTML('afterend', markup);
      };
    })
    .catch(error => { // Handle errors
        console.error('Error:', error);
    })
//  
    ;

    return (
        <>
    <body> 
        <div id="news">
        <h2>Weekly Environmental News 🗓️</h2>
        <p class = "subheading1">Updated every week.<br></br><br></br>An easy way to stay dedicated to sustainability.</p>

        <div id="api-news">
        </div>

        </div>
    </body>
    </>
    )
}
export default News
