// components/WelcomeMessage.tsx

import React, { useState } from "react";

const images = [
  "/gallery/image1.jpeg",
  "/gallery/image2.jpeg",
  "/gallery/image3.jpeg",
  "/gallery/image1.jpeg",
  "/gallery/image2.jpeg",
  "/gallery/image1.jpeg",
  "/gallery/image2.jpeg",
  "/gallery/image3.jpeg",
  "/gallery/image1.jpeg",
  "/gallery/image2.jpeg",
];

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openModal = (image: string) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };
  return (
    <div
      className="relative z-10 flex flex-col items-center justify-center h-screen"
      id="gallery"
    >
      <div className="w-full bg-white bg-opacity-70 text-black p-6">
        <div className="my-8">
          <h2 className="text-center text-2xl mb-4">Photo Gallery</h2>
          <div className="flex overflow-x-scroll space-x-4">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Gallery image ${index + 1}`}
                className="w-48 h-48 object-cover cursor-pointer"
                // onClick={() => openModal(image)}
              />
            ))}
          </div>

          {selectedImage && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
              <div className="relative">
                <img
                  src={selectedImage}
                  alt="Selected"
                  className="max-w-full max-h-full"
                />
                <button
                  onClick={closeModal}
                  className="absolute top-2 right-2 text-white bg-gray-800 rounded-full p-2"
                >
                  &times;
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
