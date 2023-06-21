import React, { useState } from 'react';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

const App = () => {
  const [selectedBreed, setSelectedBreed] = useState('');
  const [numImages, setNumImages] = useState('');

  const handleSearch = (breed, numImages) => {
    setSelectedBreed(breed);
    setNumImages(numImages);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} onNumImagesChange={setNumImages} />
      <ImageList selectedBreed={selectedBreed} numImages={numImages} />
    </div>
  );
};

export default App;

