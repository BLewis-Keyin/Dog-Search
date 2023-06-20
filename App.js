import React, { useState } from 'react';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

const App = () => {
  const [selectedBreed, setSelectedBreed] = useState('');
  const [numImages, setNumImages] = useState(1);

  const handleSearch = (breed) => {
    setSelectedBreed(breed);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} onNumImagesChange={setNumImages} />
      <ImageList selectedBreed={selectedBreed} numImages={numImages} />
    </div>
  );
};

export default App;

