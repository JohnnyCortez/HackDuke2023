import React, { useState } from 'react';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { IconButton } from '@mui/material';

function Home() {

    const images = [
        'https://www.youtube.com/embed/mULqSzpk_d4?autoplay=1',
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
            style={{ width: '100%', border: '4px solid #45503b' }} // Adjust the width as needed
          />
        ) : currentImageIndex === 0 ? (
        <iframe
            src={images[currentImageIndex]}
            title={`Video ${currentImageIndex + 1}`}
            width="100%" // Adjust the width as needed
            height="700" // Adjust the height as needed
            frameBorder="0"
            allowFullScreen
            autoPlay
            style={{ border: '4px solid #45503b' }}
        ></iframe>
        ) : currentImageIndex === 1 ? (
          <img
          src={images[currentImageIndex]}
          alt={`Image ${currentImageIndex + 1}`}
          style={{ width: '100%', border: '4px solid #45503b' }} // Adjust the width as needed

          />
        )
        : <img
            src={images[currentImageIndex]}
            alt={`Image ${currentImageIndex + 1}`}
          />
        }
      </div>
      <div className = "gif-container">
        <img src = "https://media.tenor.com/eQDuTRTKWDcAAAAC/waves-ocean.gif"></img>
        </div>
        <h1 className = "mission-title" >Our Mission</h1>
        <p className = "mission-info">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

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
