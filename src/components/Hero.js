import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

import profile from "../assets/profile.jpg";

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


function Hero() {
  const slides = [
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
  cover12,
];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section
      id="hero"
      className="relative bg-gray-950 text-white pb-16"
    >
     {/* =========================
         TOP COVER SLIDESHOW
      ========================== */}
        <Link
          to ="/gallery"
          className="relative block h-[320px] md:h-[500px] overflow-hidden group"
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                currentSlide === index ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="relative w-full h-full overflow-hidden">

                {/* Blurred Background */}
                <img
                  src={slide}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover blur-3xl scale-110 opacity-50"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/0 to-black/60"></div>

                {/* Extra Dark Overlay */}
                <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>

                {/* Main Image */}
                <img
                  src={slide}
                  alt={`slide-${index}`}
                  className="relative z-10 w-full h-full object-contain scale-100 group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          ))}

          {/* LIGHT OVERLAY */}
          <div className="absolute inset-0 bg-black/25"></div>

          {/* TEXT ON SLIDESHOW */}
          {/* <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center px-4">
              <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg">
                Physiotherapy Gallery
              </h1>

              <p className="mt-3 text-gray-200 text-lg">
                Click to explore all rehabilitation photos
              </p>
            </div>
          </div> */}
        </Link>

      {/* =========================
          PROFILE SECTION
      ========================== */}
      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <div className="-mt-24 md:-mt-28 text-center">
          {/* Profile Image */}
          <motion.img
            src={profile}
            alt="Clyde Patrick Onyango Omollo"
            className="w-40 h-40 md:w-48 md:h-48 mx-auto rounded-full border-4 border-cyan-400 shadow-2xl object-cover bg-white"
            whileHover={{ scale: 1.05 }}
          />

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mt-6"
          >
            Clyde Patrick Onyango Omollo
          </motion.h1>

          {/* Qualification */}
          <p className="mt-3 text-lg md:text-xl text-gray-300 font-medium">
            Bachelor of Science in Physical Therapy (BSc PT)
          </p>

          {/* Roles */}
          <h2 className="mt-5 text-xl md:text-3xl font-semibold text-cyan-400">
            <Typewriter
              words={[
                "Neurorehabilitation",
                "Musculoskeletal Rehabilitation",
                "Respiratory Care",
                "Pediatric Rehabilitation",
                "Cardiopulmonary Rehabilitation",
              ]}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={40}
              delaySpeed={2000}
            />
          </h2>

          {/* Description */}
          <p className="mt-6 max-w-3xl mx-auto text-gray-300 leading-relaxed">
            Dedicated and motivated Physical Therapist with hands-on clinical
            experience in neurorehabilitation, musculoskeletal rehabilitation,
            respiratory care, orthopedic manual therapy, exercise therapy, and
            inpatient/outpatient physiotherapy services.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <a
              href="#services"
              className="bg-cyan-500 px-6 py-3 rounded-lg hover:bg-cyan-600 transition"
            >
              Explore Services
            </a>

           <a
            onClick={() => (window.location.href = "https://wa.me/254742833299")}
            className="flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition shadow-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-5 h-5 fill-white"
            >
              <path d="M19.11 17.53c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.12-.41-2.13-1.31-.79-.7-1.32-1.56-1.48-1.83-.16-.27-.02-.42.12-.56.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47h-.52c-.18 0-.48.07-.73.34-.25.27-.95.93-.95 2.27 0 1.34.98 2.64 1.12 2.82.14.18 1.94 2.96 4.69 4.15.65.28 1.16.45 1.56.57.66.21 1.26.18 1.74.11.53-.08 1.6-.65 1.83-1.28.23-.63.23-1.17.16-1.28-.07-.11-.25-.18-.52-.32z" />
              <path d="M16 3C9.37 3 4 8.37 4 15c0 2.64.86 5.08 2.32 7.07L4 29l7.28-2.26A11.93 11.93 0 0 0 16 27c6.63 0 12-5.37 12-12S22.63 3 16 3zm0 22c-1.97 0-3.85-.58-5.47-1.67l-.39-.25-4.33 1.35 1.41-4.21-.27-.41A9.94 9.94 0 0 1 6 15c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10z" />
            </svg>

            Contact on WhatsApp
          </a>
          </div>

          {/* Social */}
          <div className="flex justify-center gap-6 mt-8 text-2xl">
            <a
              href="https://www.linkedin.com/in/clyde-omollo-7a71411b6"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="hover:text-cyan-400 transition" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;