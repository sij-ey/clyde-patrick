import React from "react";
import ImageGallery from "../components/ImageGallery";
import BackButton from "../components/BackButton";

function DryNeedling() {
  const images = [
    {
      src: "/images/dry1.jpg",
      alt: "Dry Needling",
    },
    // {
    //   src: "/images/dry2.jpg",
    //   alt: "Dry Needling Technique",
    // },
    // {
    //   src: "/images/dry3.jpg",
    //   alt: "Trigger Point Therapy",
    // },
  ];

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-black dark:text-white p-10">
      
      <h1 className="text-4xl font-bold text-cyan-500 mb-8">
        <BackButton />Dry Needling Training
      </h1>

      <ImageGallery images={images} />
    </div>
  );
}

export default DryNeedling;