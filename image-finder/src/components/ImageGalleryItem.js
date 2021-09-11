import React from 'react'

const ImageGallery = ({image, onClick }) => {
    return (
      <li className="ImageGalleryItem" onClick={onClick}>
        <img
          src={image.webformatURL}
          alt={image.tags}
          className="ImageGalleryItem-image"
        />
      </li>
    );
};

export default ImageGallery;