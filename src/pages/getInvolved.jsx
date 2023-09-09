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
        <p className = "getInvolvedImageText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <div className="rectangle"> <p id = "pledge"> Our Pledge</p><p id="pledge-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>

        </>
    )
}



export default getInvolved;
