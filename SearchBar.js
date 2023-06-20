import React, { useState, useEffect } from 'react';

const SearchBar = ({ onSearch }) => {
  const [breeds, setBreeds] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState('');
  const [numImages, setNumImages] = useState('');

  useEffect(() => {
    const fetchBreeds = async () => {
      try {
        const response = await fetch('https://dog.ceo/api/breeds/list/all');
        const data = await response.json();
        setBreeds(Object.keys(data.message));
      } catch (error) {
        console.error('Error fetching breeds:', error);
      }
    };

    fetchBreeds();
  }, []);

  const handleSearch = () => {
    onSearch(selectedBreed, parseInt(numImages));
  };

  return (
    <div className="search-bar">
      <select value={selectedBreed} onChange={(e) => setSelectedBreed(e.target.value)}>
        <option value="">Select a breed</option>
        {breeds.map((breed) => (
          <option key={breed} value={breed}>
            {breed}
          </option>
        ))}
      </select>
      <input type="number" value={numImages} onChange={(e) => setNumImages(e.target.value)} placeholder="Number of images" />
      <button onClick={handleSearch}>Show Images</button>
    </div>
  );
};

export default SearchBar;





