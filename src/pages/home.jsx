import React, { useState } from 'react';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

function Home() {

    return (

        <>

        <div className = "home-image">
        <img src = "https://www.voicesofyouth.org/sites/voy/files/styles/big_blog_teaser/public/images/2019-09/and00089.jpg?itok=sHH-it06"></img>
       </div>
      <div className = "button-container">
        <button>
      <NavigateBeforeIcon style={{ fontSize: '80' }}/>
      </button>
      <button>
       <NavigateNextIcon style={{ fontSize: '80' }}/>
       </button>
       </div>
        </>
    )
}

export default Home
