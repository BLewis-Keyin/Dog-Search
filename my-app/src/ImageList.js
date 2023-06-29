import React, { useState, useEffect } from 'react';
import AppCss from './App.css'

const ImageList = ({ selectedBreed, numImages }) => {
  // State variables for images, loading state, and error handling
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch images when selectedBreed or numImages change
    const fetchImages = async () => {
      setLoading(true);

      try {
        // Fetch images from the Dog API based on the selected breed and number of images
        const response = await fetch(`https://dog.ceo/api/breed/${selectedBreed}/images/random/${numImages}`);
        const data = await response.json();
        console.log (data)
        setImages(data.message);
      } catch (error) {
        // Handle error if fetching images fails
        setError('Error fetching images');
      }

      setLoading(false);
    };

    // Only fetch images if both selectedBreed and numImages have values
    if (selectedBreed && numImages > 0) {
      fetchImages();
    }
  }, [selectedBreed, numImages]);

  if (loading) {
    // Display a loading message while fetching images
    return <div>Loading...</div>;
  }

  if (error) {
    // Display an error message if fetching images fails
    return <div>{error}</div>;
  }

  return (
    <div className="image-list">
      {images.map((image, index) => (
        <div key={index} className="image-card">
          <img src={image} alt="Dog" className="dogimage" />
        </div>
      ))}
    </div>
  );
};

export default ImageList;
