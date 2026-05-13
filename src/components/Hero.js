import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { FaLinkedin } from "react-icons/fa";

import profile from "../assets/profile.jpg";

import cover1 from "../assets/cover1.jpg";
import cover2 from "../assets/cover2.jpg";
import cover3 from "../assets/cover3.jpg";

function Hero() {
  const slides = [
    {
      image: cover1,
      link: "/catalogue/neurorehabilitation",
    },
    {
      image: cover2,
      link: "/catalogue/musculoskeletal",
    },
    {
      image: cover3,
      link: "/catalogue/respiratory-care",
    },
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
      <div className="relative h-[320px] md:h-[420px] overflow-hidden">
        {slides.map((slide, index) => (
          <a
            key={index}
            href={slide.link}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentSlide === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt="cover"
              className="w-full h-full object-cover"
            />
          </a>
        ))}

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* OPTIONAL:
            Carousel buttons removed completely
        */}
      </div>

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
              href="/catalogue"
              className="bg-cyan-500 px-6 py-3 rounded-lg hover:bg-cyan-600 transition"
            >
              Explore Services
            </a>

            <a
              href="#contact"
              className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition"
            >
              Contact Me
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