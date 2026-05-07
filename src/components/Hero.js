import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { FaLinkedin } from "react-icons/fa";
import profile from "../assets/profile.jpg";

function Hero() {

  // Mouse movement interaction
  const handleMouseMove = (e) => {
    const x = (window.innerWidth / 2 - e.clientX) / 30;
    const y = (window.innerHeight / 2 - e.clientY) / 30;

    const element = document.getElementById("hero-content");
    if (element) {
      element.style.transform = `translate(${x}px, ${y}px)`;
    }
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-800"
    >

      {/* Glow Effects */}
      <div className="absolute w-72 h-72 bg-cyan-500 rounded-full blur-3xl opacity-20 top-10 left-10 animate-pulse"></div>
      <div className="absolute w-72 h-72 bg-blue-500 rounded-full blur-3xl opacity-20 bottom-10 right-10 animate-pulse"></div>

      {/* Content */}
      <div
        id="hero-content"
        className="text-center text-white px-4 transition-transform duration-200"
      >

        {/* Profile Image */}
        <motion.img
          src={profile}
          alt="Clyde Patrick Onyango Omollo"
          className="w-36 h-36 mx-auto rounded-full border-4 border-cyan-500 shadow-lg object-cover"
          whileHover={{ scale: 1.08, rotate: 2 }}
          transition={{ type: "spring", stiffness: 200 }}
        />

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
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
          inpatient/outpatient physiotherapy services. Passionate about
          evidence-based rehabilitation, patient-centered care, and improving
          functional independence and quality of life.
        </p>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mt-6 text-2xl">
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className="hover:text-cyan-400 transition" />
          </a>
        </div>

        {/* Buttons */}
        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <a
            href="#projects"
            className="bg-cyan-600 px-6 py-3 rounded-lg hover:bg-cyan-700 transition"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition"
          >
            Contact Me
          </a>
        </div>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-3xl font-bold text-cyan-400">3+</h3>
            <p className="text-sm text-gray-300">Years Clinical Experience</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-cyan-400">10+</h3>
            <p className="text-sm text-gray-300">Specialized Skills</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-cyan-400">2+</h3>
            <p className="text-sm text-gray-300">Leadership Roles</p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-10 animate-bounce text-2xl opacity-70">
          ↓
        </div>

      </div>
    </section>
  );
}

export default Hero;