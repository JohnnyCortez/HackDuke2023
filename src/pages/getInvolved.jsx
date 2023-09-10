import { useEffect, useState } from "react";

function getInvolved() {
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (event) => {
      setSelectedOption(event.target.value);
    };
    const [searchText, setSearchText] = useState('');

    const handleInputChange = (event) => {
        setSearchText(event.target.value);
    };

    const clearPlaceholder = () => {
        setSearchText('');
    };

    return (
        <>
    <div className = "orgBar">
      <input
        type="text"
        id="searchInput"
        placeholder="Enter ZIP Code"
        value={searchText}
        onChange={handleInputChange}
        onFocus={clearPlaceholder}
      />
    </div>
    <div className = "dropDown">
      <select
        id="dropdown"
        value={selectedOption}
        onChange={handleOptionChange}
      >
        <option value="">Initiatives</option>
        <option value="option1">Climate Change</option>
        <option value="option2">Biodiversity Loss</option>
        <option value="option3">Deforestation</option>
        <option value="option3">Air Pollution</option>
        <option value="option3">Ocean Pollution</option>
        <option value="option3">Plastic Pollution</option>
      </select>

      {/* <p>You selected: {selectedOption}</p> */}
    </div>
        <img src = "https://www.idea.int/democracy-climate-change/sites/idea_ukraine/files/uploads/homepages/map_images/large-democracy-climate-change-header%20%28002%29.png" className ="banner-image"
  alt="Banner Image"></img>
        <p className = "getInvolvedImageText">Choose an environmental issue that matters to you and enter your zip code below. We'll connect you with relevant initiatives in your area that you can actively participate in. Together, we can make a real impact on the issues that affect our community and our planet."</p>
        <div className="rectangle"> <p id = "pledge"> Our Pledge</p><p id="pledge-description">We pledge our unwavering commitment to the protection and preservation of our planet. We vow to reduce our ecological footprint by embracing sustainable practices in our daily lives. We pledge to advocate for responsible consumption, promote renewable energy sources, and champion conservation efforts. Together, we stand united in our mission to safeguard the Earth's precious ecosystems, combat climate change, and create a brighter, greener future for generations to come. Join us in this collective endeavor, and together, we can make a meaningful difference for our planet and all its inhabitants.</p></div>

        </>
    )
}



export default getInvolved;
