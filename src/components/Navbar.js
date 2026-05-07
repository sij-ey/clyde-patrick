import React, { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);
  const [dark, setDark] = useState(false);

  // Show navbar after hero section
  useEffect(() => {
    const handleScroll = () => {
      const heroHeight =
        document.getElementById("hero")?.offsetHeight || 500;

      if (window.scrollY > heroHeight - 80) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Dark mode toggle
  const toggleDark = () => {
    document.documentElement.classList.toggle("dark");
    setDark(!dark);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        showNavbar
          ? "translate-y-0 opacity-100"
          : "-translate-y-full opacity-0"
      }`}
    >
      <div className="bg-white/80 dark:bg-gray-900/90 backdrop-blur-md shadow-lg border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          
          {/* Logo */}
          <h1 className="font-bold text-xl text-gray-900 dark:text-white">
            Clyde PT
          </h1>

          {/* Navigation */}
          <div className="flex items-center gap-6">
            <a
              href="#hero"
              className="text-gray-700 dark:text-gray-200 hover:text-cyan-500 transition"
            >
              Home
            </a>

            <a
              href="#about"
              className="text-gray-700 dark:text-gray-200 hover:text-cyan-500 transition"
            >
              About
            </a>

            <a
              href="#services"
              className="text-gray-700 dark:text-gray-200 hover:text-cyan-500 transition"
            >
              Services
            </a>

            <a
              href="#projects"
              className="text-gray-700 dark:text-gray-200 hover:text-cyan-500 transition"
            >
              Projects
            </a>

            <a
              href="#contact"
              className="text-gray-700 dark:text-gray-200 hover:text-cyan-500 transition"
            >
              Contact
            </a>

            {/* Dark Mode Button */}
            <button
              onClick={toggleDark}
              className="text-xl text-gray-700 dark:text-yellow-400 hover:scale-110 transition"
            >
              {dark ? <FaSun /> : <FaMoon />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;