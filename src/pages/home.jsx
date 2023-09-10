import React, { useState } from 'react';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { IconButton } from '@mui/material';

function Home() {

    const images = [
        'https://i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/04/iStock-149046398-1024x586.jpg?w=1155&h=2748',
        'https://cms.iqair.com/sites/default/files/blog/2021-01/CostofAir21_Desk_a.jpg', // Replace with your actual URL
        'https://www.pewtrusts.org/-/media/post-launch-images/2022/09/gettyimages1140387268jpgmaster/16x9_m.jpg', // Replace with your actual URL
      ];

      const [currentImageIndex, setCurrentImageIndex] = useState(0);

      const handleNextClick = () => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      };

      const handlePreviousClick = () => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
      };

      return (

        <>

         <div className="home-image">

        {currentImageIndex === 2 ? (
          <img
            src={images[currentImageIndex]}
            alt={`Image ${currentImageIndex + 1}`}
            style={{ width: '100%', border: '4px solid #45503b', filter: 'brightness(0.5)' }} // Adjust the width as needed
          />
        ) : currentImageIndex === 0 ? (
            <img
            src={images[currentImageIndex]}
            alt={`Image ${currentImageIndex + 1}`}
            style={{ width: '110%', border: '4px solid #45503b', marginTop: '30px', filter: 'brightness(0.5)' }} // Adjust the width as needed
          />
        ) : currentImageIndex === 1 ? (
          <img
          src={images[currentImageIndex]}
          alt={`Image ${currentImageIndex + 1}`}
          style={{ width: '100%', border: '4px solid #45503b', filter: 'brightness(0.5)' }} // Adjust the width as needed

          />
        )
        : <img
            src={images[currentImageIndex]}
            alt={`Image ${currentImageIndex + 1}`}
          />
        }
      </div>
        <h1 className = "mission-title" >Our Mission</h1>
        <p className = "mission-info">At EcoStart, our mission is to inspire and empower individuals worldwide to become stewards of our planet. We are committed to fostering a deep understanding of environmental issues, promoting sustainable practices, and advocating for positive change. Through education, engagement, and collective action, we aim to create a greener, healthier, and more sustainable future for all.</p>
        <div className="video-container">
      {/* Paste your YouTube embed code here */}
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/mULqSzpk_d4"
        title="Embedded Video"
        frameborder="0"
        allowfullscreen
      ></iframe>
    </div>
          <div className="button-container">
            <IconButton onClick={handlePreviousClick}>
              <NavigateBeforeIcon style={{ fontSize: '80', color: 'white', backgroundColor: 'transparent' }} />
            </IconButton>
            <IconButton onClick={handleNextClick}>
              <NavigateNextIcon style={{ fontSize: '80', color: 'white', backgroundColor: 'transparent'}} />
            </IconButton>
          </div>

        </>
      );
}

export default Home
