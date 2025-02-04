import React from 'react';
import { useImageStore } from '../store/useImageStore';
import BtnPrimary from './BtnPrimary';
import { useNavigate } from 'react-router-dom';

const ImageGallery:React.FC = () => {
    const {images,selectedImage,setSelectedImage } = useImageStore();

    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/")
    }
  return (
    <>
    <BtnPrimary onClick={handleClick}>Back</BtnPrimary>
      <div className="flex flex-wrap justify-center gap-6">
      {images.map((image, index) => (
        <div key={index} className="relative">
          <img
            src={image}
            alt={`Black and White Image ${index + 1}`}
            className={`w-64 h-64 object-cover rounded-lg cursor-pointer transition-transform duration-300 ease-in-out ${
              selectedImage === image ? 'transform scale-105 border-4 border-blue-500' : ''
            }`}
            onClick={() => setSelectedImage(image)} // Set selected image when clicked
          />
        </div>
      ))}
    </div>
    </>
  );
}

export default ImageGallery;
