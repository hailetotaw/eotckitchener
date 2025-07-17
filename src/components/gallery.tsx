// components/WelcomeMessage.tsx

import React, { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";

type Image = {
  id: string;
  url: string;
  createdAt: string;
};

// const images = [
//   "/gallery/image1.jpeg",
//   "/gallery/image2.jpeg",
//   "/gallery/image3.jpeg",
//   "/gallery/image1.jpeg",
//   "/gallery/image2.jpeg",
//   "/gallery/image1.jpeg",
//   "/gallery/image2.jpeg",
//   "/gallery/image3.jpeg",
//   "/gallery/image1.jpeg",
//   "/gallery/image2.jpeg",
// ];

const Gallery: React.FC = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [index,  setIndex]  = useState<number | null>(null);   // ➊ now store *index*
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const getImages = async () => {
      const res = await fetch("/api/gallery");
      const data = await res.json();
      setImages(data.images);
    };
    getImages();
  }, []);

  /* ───── helpers ───── */
  const close  = () => setIndex(null);
  const next   = () => setIndex((i) => (i! + 1) % images.length);
  const prev   = () => setIndex((i) => (i! - 1 + images.length) % images.length);

  /* ESC / Arrow‑key listeners */
  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape")      close();
      else if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft")  prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, images.length]);

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
                src={image.url}
                alt={`Gallery image ${index + 1}`}
                className="w-48 h-48 object-cover cursor-pointer sm:w-48 sm:h-48"
                onClick={() => setIndex(index)}
              />
            ))}
          </div>

          {/* {selectedImage && (
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
          )} */}
          {index !== null &&
        createPortal(
          <div
            onClick={close}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-[90vw] max-h-[90vh]"
            >
              <img
                  src={images[index].url}
                  alt="Selected"
                  className="max-w-full max-h-full"
                />
              <button
                onClick={close}
                className="absolute -right-3 -top-3 rounded-full bg-gray p-1 shadow"
                aria-label="Close"
              >
                ✕
              </button>
            </div>
          </div>,
          document.body
        )}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
