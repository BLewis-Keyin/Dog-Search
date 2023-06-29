import React, { useState } from "react";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";
import DogBone from "./images/DogBone.png"
import Rectangle from "./images/rectangle-3.svg"

// State variables to hold the selected breed and number of images
const App = () => {
  const [selectedBreed, setSelectedBreed] = useState("");
  const [numImages, setNumImages] = useState("");
 
  // Event handler for search  
  const handleSearch = (breed, numImages) => {
      // Update the selected breed and number of images in state
    setSelectedBreed(breed);
    setNumImages(numImages);
  };
  
  return (
    <div>
      <div className="main">
        <div className="background">
          
          <div className="group">
            <h1 className="head-text-wrapper">Dog Search</h1>
            <img
            className="dog-bone-png-dog"
            alt="Dog bone png dog"
            src={DogBone}
            />
          </div>
        <div>
          <img
            className="rectangle-bar"
            alt="rectangle"
            src={Rectangle}
          />
        </div>
          <SearchBar onSearch={handleSearch} onNumImagesChange={setNumImages} />
          <ImageList selectedBreed={selectedBreed} numImages={numImages} />
        <div className="label">
          <div className="div-wrapper">
            <div className="text-wrapper">DogSearchLLC©</div>
          </div>
          </div>
          
          </div>
          
      </div>
      </div>
      
  );
};

export default App;
