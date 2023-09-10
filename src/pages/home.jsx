import React, { useState } from 'react';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { IconButton } from '@mui/material';

function Home() {
    const images = [
        'https://www.voicesofyouth.org/sites/voy/files/styles/big_blog_teaser/public/images/2019-09/and00089.jpg?itok=sHH-it06',
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
            style={{ width: '100%' }} // Adjust the width as needed
          />
        ) : currentImageIndex === 0 ? (
          <img
            src={images[currentImageIndex]}
            alt={`Image ${currentImageIndex + 1}`}
            style={{ width: '100%' }} // Adjust the width as needed

          />
        ) : currentImageIndex === 1 ? (
          <img
          src={images[currentImageIndex]}
          alt={`Image ${currentImageIndex + 1}`}
          style={{ width: '100%' }} // Adjust the width as needed

          />
        )
        : <img
            src={images[currentImageIndex]}
            alt={`Image ${currentImageIndex + 1}`}
          />
        }
      </div>
          <div className="button-container">
            <IconButton onClick={handlePreviousClick}>
              <NavigateBeforeIcon style={{ fontSize: '80', color: 'white', backgroundColor: 'transparent' }} />
            </IconButton>
            <IconButton onClick={handleNextClick}>
              <NavigateNextIcon style={{ fontSize: '80', color: 'white', backgroundColor: 'transparent'}} />
            </IconButton>
          </div>
          <div className = "mission-image">
            <img src = "https://images.theconversation.com/files/377023/original/file-20210104-23-1gss1v1.jpg?ixlib=rb-1.1.0&rect=1%2C25%2C997%2C498&q=45&auto=format&w=1356&h=668&fit=crop"></img>
        </div>
        </>
      );
}

export default Home
