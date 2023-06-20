import React, { useState, useEffect } from 'react';

const ImageList = ({ selectedBreed, numImages }) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      setLoading(true);

      try {
        const response = await fetch('dog.ceo/api/breed/{select-a-breed}{number-of-images-to-return}');
        const data = await response.json();
        console.log (data)
        setImages(data);
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
      {images.map((image) => (
        <div key={image.id} className="image-card">
          <img src={image.url} alt="Dog" className="image" />
        </div>
      ))}
    </div>
  );
};

export default ImageList;
