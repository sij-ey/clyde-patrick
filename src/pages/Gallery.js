import Masonry from "react-masonry-css";

import cover1 from "../assets/cover1.jpg";
import cover2 from "../assets/cover2.jpg";
import cover3 from "../assets/cover3.jpg";
import cover4 from "../assets/cover4.jpg";
import cover5 from "../assets/cover5.jpg";
import cover6 from "../assets/cover6.jpg";
import cover7 from "../assets/cover7.jpg";
import cover8 from "../assets/cover8.jpg";
import cover9 from "../assets/cover9.jpg";
import cover10 from "../assets/cover10.jpg";
import cover11 from "../assets/cover11.jpg";
import cover12 from "../assets/cover12.jpg";

const breakpointColumns = {
  default: 3,
  1024: 3,
  768: 2,
  500: 1,
};

function Gallery() {
  const images = [
    cover1,
    cover2,
    cover3,
    cover4,
    cover5,
    cover6,
    cover7,
    cover8,
    cover9,
    cover10,
    cover11,
    cover12
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white p-6">
      <button
        onClick={() => window.history.back()}
        className="mb-6 px-4 py-2 bg-cyan-5oo text-white rounded hover:bg-cyan-600 transition duration-300"
      >
        Back to Home
      </button>
      <h1 className="text-4xl font-bold text-center mb-10">
        Gallery
      </h1>

      <Masonry
        breakpointCols={breakpointColumns}
        className="flex gap-6"
        columnClassName="space-y-6"
      >
        {images.map((img, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-xl shadow-lg bg-gray-900"
          >
            <img
              src={img}
              alt={`gallery-${index}`}
              className="w-full h-auto object-cover hover:scale-105 transition duration-500"
            />
          </div>
        ))}
      </Masonry>
    </div>
  );
}

export default Gallery;