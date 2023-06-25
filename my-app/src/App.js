import React, { useState } from "react";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";
import DogBone from "./images/DogBone.png"

const App = () => {
  const [selectedBreed, setSelectedBreed] = useState("");
  const [numImages, setNumImages] = useState("");

  const handleSearch = (breed, numImages) => {
    setSelectedBreed(breed);
    setNumImages(numImages);
  };
  
  return (
    <div>
      <div className="main">
        <div className="group">
          <h1 className="text-wrapper">Dog Search</h1>
                      <img
            className="dog-bone-png-dog"
            alt="Dog bone png dog"
            src={DogBone}
          />
        </div>
        <SearchBar onSearch={handleSearch} onNumImagesChange={setNumImages}/>
        <div className="label">
          <div className="div-wrapper">
            <div className="text-wrapper">DogSearchLLC©</div>
          </div>
        </div>
          </div>
          <ImageList selectedBreed={selectedBreed} numImages={numImages} />
        </div>
      
  );
};

export default App;
