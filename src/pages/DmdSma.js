import React from "react";
import ImageGallery from "../components/ImageGallery";
import BackButton from "../components/BackButton";

function DmdSma() {
  const images = [
    {
      src: "/images/dmd1.jpg",
      alt: "DMD Care",
    },
    {
      src: "/images/dmd2.jpg",
      alt: "SMA Rehabilitation",
    },
    {
      src: "/images/dmd3.jpg",
      alt: "Neuromuscular Care",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-black dark:text-white p-10">
      <h1 className="text-4xl font-bold text-cyan-500 mb-8">
        <BackButton />
        DMD & SMA Standards of Care
      </h1>

      <ImageGallery images={images} />
    </div>
  );
}

export default DmdSma;