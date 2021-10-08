import React from 'react'
import ImageGalleryItem from './ImageGalleryItem'

const ImageGallery = ({ images, onClick }) => {
  return (
    <ul className="ImageGallery">
      {images.map(image => (
        <ImageGalleryItem image={image} key={image.id} onClick={onClick(image.id)}/>
      ))}
    </ul>
  );
};
    

export default ImageGallery;
