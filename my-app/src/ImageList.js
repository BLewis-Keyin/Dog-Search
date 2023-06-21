import React, { useState, useEffect } from 'react';

const ImageList = ({ selectedBreed, numImages }) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      setLoading(true);

      try {
        const response = await fetch(`https://dog.ceo/api/breed/${selectedBreed}/images/random/${numImages}`);
        const data = await response.json();
        console.log (data)
        setImages(data.message);
      } catch (error) {
        setError('Error fetching images');
      }

      setLoading(false);
    };

    if (selectedBreed && numImages > 0) {
      fetchImages();
    }
  }, [selectedBreed, numImages]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="image-list">
      {images.map((image, index) => (
        <div key={index} className="image-card">
          <img src={image} alt="Dog" className="image" />
        </div>
      ))}
    </div>
  );
};

export default ImageList;
