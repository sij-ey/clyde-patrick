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
        className="mb-6 px-4 py-2 bg-cyan-500 text-white rounded hover:bg-cyan-600 transition duration-300"
      >
        Back to Home
      </button>
      <h1 className="text-4xl font-bold text-center mb-10">
        Gallery
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {images.map((img, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-xl shadow-lg bg-gray-900 flex items-center justify-center"
          >
            <img
              src={img}
              alt={`gallery-${index}`}
              className="w-full h-72 object-contain hover:scale-105 transition duration-500"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;