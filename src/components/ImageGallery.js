import React, { useState, useEffect } from "react";

function ImageGallery({ images }) {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const openImage = (index) => {
    setSelectedIndex(index);
  };

  const closeModal = () => {
    setSelectedIndex(null);
  };

  const showPrevious = () => {
    setSelectedIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const showNext = () => {
    setSelectedIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIndex === null) return;

      switch (e.key) {
        case "ArrowLeft":
          showPrevious();
          break;
        case "ArrowRight":
          showNext();
          break;
        case "Escape":
          closeModal();
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedIndex]);

  return (
    <>
      {/* Gallery */}
      <div className="grid md:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            onClick={() => openImage(index)}
            className="rounded-xl shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300"
          />
        ))}
      </div>

      {/* Modal */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div
            className="relative max-w-6xl w-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white text-4xl z-20 hover:text-cyan-400"
            >
              &times;
            </button>

            {/* Previous Button */}
            <button
              onClick={showPrevious}
              className="absolute left-4 text-white text-5xl z-20 hover:text-cyan-400 transition"
            >
              &#10094;
            </button>

            {/* Image */}
            <div className="flex flex-col items-center">
              <img
                src={images[selectedIndex].src}
                alt={images[selectedIndex].alt}
                className="max-h-[85vh] w-auto rounded-xl shadow-2xl"
              />

              {/* <p className="text-white mt-4 text-lg text-center">
                {images[selectedIndex].alt}
              </p> */}
            </div>

            {/* Next Button */}
            <button
              onClick={showNext}
              className="absolute right-4 text-white text-5xl z-20 hover:text-cyan-400 transition"
            >
              &#10095;
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default ImageGallery;