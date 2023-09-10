import { useEffect, useState } from "react";
function News() {
    // const [data, setData] = useState(null)
    // fetch('https://newsapi.org/v2/everything?'+'q=climateORenvironment&'+'from=2023-01-01&'+'sortBy=popularity&'+'apiKey=877af5c9a5d142bca3f45e125ea8d373', {
    // https://jsonplaceholder.typicode.com/
    // climateORenvironmentORpollutionORfireORwaterORenergy
//

//     fetch('https://newsapi.org/v2/everything?q=climate&q=environment&from=2023-09-09&to=2023-09-09&sortBy=relevancyANDpopularity&apiKey=46ab106b4b0749b78c5899d83e96dff5',{
//     method: 'GET',
//     headers: {
//         'Authorization': 'Bearer 46ab106b4b0749b78c5899d83e96dff5'
//     }
//     })
//     .then(res => {
//         if (!res.ok) {
//           throw new Error('Network response was not ok');
//         }
//         if (!res.json) {
//             throw new Error('JSON data null');
//         }
//         return res.json(); // Parse JSON data
//       })
//     .then(newsdata => {
//         //articles 
//         console.log(newsdata);
//         if (!newsdata.articles) {
//             throw new Error ("Error: No articles found in the data.");
//         }
//         const articles = newsdata.articles;
//         // articles.forEach(article => {
//         for (let i = 0; i < 5 && i < articles.length; i++) {
//         const article = articles[i];
//         const author = article.author;
//         const title = article.title;
//         const description = article.description;
//         const url = article.url;
//         const urlToImage = article.urlToImage;
//         const publishedAt = article.publishedAt;
//              const date = publishedAt.substring(0, 10);
//         const words = article.content.split('');
//         const first20Words = words.slice(0, 20).join(' ');
//         const markup = `<li>${title}</li<li>${author}</li<li>${description}</li<li>${url}</li<li>${urlToImage}</li<li>${date}</li<li>${first20Words}</li`;
//         document.querySelector('#api-news ul').insertAdjacentHTML('beforebegin', markup);
      
//         console.log('Title:', title);
//         console.log('Author:', author);
//       };
//     })
//     .catch(error => { // Handle errors
//         console.error('Error:', error);
//     })
// //

    
    ;

    return (
        <>
    <body> 
        <div id="api-news">
        <h2>Weekly Environmental News 🗓️</h2>
        
            
            <div class = "news-container">
                
                <ol>
                <li>
                    <a href="https://www.bbc.co.uk/news/world-asia-india-66763836">    
                    <img src="https://ichef.bbci.co.uk/news/1024/branded_news/B9B8/production/_131044574_gettyimages-1653679975.jpg" alt = "news!"></img>
                    </a>
                    <div>

                    <h3>G20 laments war in Ukraine but avoids blaming Russia</h3> {/* title */}
                    <h6>2023-09-09</h6>
                    <p>meeting in Delhi issue an ambiguous statement on the conflict, drawing criticism from Kyiv. </p>
                    
                    <p> description : h e G 2 0 s u m m i t i n I n </p>
                    </div>



                </li>
                </ol>
            </div>

    

            <li> Lab-grown Meat is not a Climate Change SolutionChristoph PröschelIn this guest post, we investigate why lab-grown or cultivated meat should not be considered a solution to mitigating our livestock-based emissions.https://www.climatedrift.com/p/lab-grown-meat-is-not-a-climate-solutionhttps://substackcdn.com/image/fetch/w_1200,h_600,c_fill,f_jpg,q_auto:good,fl_progressive:steep,g_auto/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fb9ca0175-fdb0-4c5e-ab74-179f9fd4ea0d_6000x3150.jpeg2023-09-09T18:19:00ZW e l c o m e t o C l i m a t e D



            </li>


            <li> 
            Group of 20 countries agree to increase clean energy but reach no deal on phasing out fossil fuelsSIBI ARASU Associated PressGroup of 20 leaders have agreed to triple renewable energy and try to increase the funds for climate change-related disasters but maintained the status quo with regards to phasing out carbon spewing coalhttps://abcnews.go.com/Business/wireStory/g20-countries-agree-increase-clean-energy-reach-deal-103054970https://i.abcnewsfe.com/a/2cc2d382-1a45-4866-9efb-6b6636a24402/wirestory_c25dd753a2f8f520261ec4858b921a1a_12x5.jpg?w=9922023-09-09T17:02:24ZN E W D E L H I - - G r o u p o

            </li>

            <li> 
            As School Started in the U.S., So Did the School Closures for HeatBy Eric Roston / BloombergSusan Eckert teaches advanced placement biology at Montclair High School in Montclair, New Jersey.https://time.com/6312416/as-school-started-in-the-u-s-so-did-the-school-closures-for-heat/https://api.time.com/wp-content/uploads/2023/09/schools-close-early-extreme-heat-northeast-us.jpg?quality=852023-09-09T15:12:15ZS u s a n E c k e r t t e a c h e s
            </li>



                
            {/* temp */}

           
        </div>
    </body>
    </>
    )
}
export default News
