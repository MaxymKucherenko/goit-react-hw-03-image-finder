import React from 'react'
import ImageGalleryItem from './ImageGalleryItem'

const ImageGallery = ({ images }) => {
    return (
      <ul className="ImageGallery">
        {images.map((image) => (
          <ImageGalleryItem
            key={image.id}
            image={image}
           /*  onClick={onClick(image.id)} */
          />
        ))}
      </ul>
    );
    
};
    

export default ImageGallery;
