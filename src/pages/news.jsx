import { useEffect, useState } from "react";

function News() {
    const [data, setData] = useState(null)

    fetch('https://newsapi.org/v2/everything?'+'q=climateORenvironment&'+'from=2023-01-01&'+'sortBy=popularity&'+'apiKey=877af5c9a5d142bca3f45e125ea8d373', {
    method: 'GET',
    headers: {
        'Authorization': 'Bearer YOUR_API_KEY'
    }
    })

    

    .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json(); // Parse JSON data
      })



    .then(data => {
    // Handle the API response data
    setData(data)
    })

    .then(data => {
        // Handle the JSON data here
        console.log('API response:', data);
      
        // Access specific data properties
        const title = data.title;
        const urlImage = data.urlImage;
        const url = data.url;

        
      
        // Update the HTML content with the retrieved data
        document.getElementById('title').textContent = title;
        document.getElementById('urlImage').textContent = urlImage;
        document.getElementById('url').textContent = url;
      })


    .catch(error => { // Handle errors
        console.error('Error:', error);
    });


    return (
        <>
        <h2>News</h2>

        





        </>
    )
}

export default News