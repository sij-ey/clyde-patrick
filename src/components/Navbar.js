import React, { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { HiHome, HiUser, HiBriefcase, HiFolder, HiPhone } from "react-icons/hi";
import { GiStethoscope } from "react-icons/gi";
import { MdOutlineEmojiEvents } from "react-icons/md";
import { HiMenu, HiX } from "react-icons/hi";

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);
  const [dark, setDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = document.getElementById("hero")?.offsetHeight || 500;

      if (window.scrollY > heroHeight - 80) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDark = () => {
    document.documentElement.classList.toggle("dark");
    setDark(!dark);
  };

  const iconClass =
    "text-2xl text-gray-700 dark:text-gray-200 hover:text-cyan-500 transition hover:scale-110";

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        showNavbar ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
    >
      <div className="bg-white/80 dark:bg-gray-900/90 backdrop-blur-md shadow-lg border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          {/* Logo */}
          <h1 className="font-bold text-xl text-gray-900 dark:text-white">
            Clyde PT
          </h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <a href="#hero"><HiHome className={iconClass} /></a>
            <a href="#about"><HiUser className={iconClass} /></a>
            <a href="#services"><HiBriefcase className={iconClass} /></a>
            <a href="#experience"><GiStethoscope className={iconClass} /></a>
            <a href="#leadership-training"><MdOutlineEmojiEvents className={iconClass} /></a>
            <a href="#projects"><HiFolder className={iconClass} /></a>
            <a href="#contact"><HiPhone className={iconClass} /></a>

            <button
              onClick={toggleDark}
              className="text-2xl text-gray-700 dark:text-yellow-400 hover:scale-110 transition"
            >
              {dark ? <FaSun /> : <FaMoon />}
            </button>
          </div>

          {/* Hamburger Button (Mobile) */}
          <button
            className="md:hidden text-3xl text-gray-800 dark:text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-900 px-6 py-6 space-y-6 flex flex-col items-left text-left border-t border-gray-200 dark:border-gray-800">

            <a onClick={closeMenu} href="#hero" className={iconClass}>
              <HiHome />Home
            </a>

            <a onClick={closeMenu} href="#about" className={iconClass}>
              <HiUser />About
            </a>

            <a onClick={closeMenu} href="#services" className={iconClass}>
              <HiBriefcase />Services
            </a>

            <a onClick={closeMenu} href="#experience" className={iconClass}>
              <GiStethoscope />Clinical Experience
            </a>

            <a onClick={closeMenu} href="#leadership-training" className={iconClass}>
              <MdOutlineEmojiEvents />Leadership Training
            </a>

            <a onClick={closeMenu} href="#projects" className={iconClass}>
              <HiFolder />Projects
            </a>

            <a onClick={closeMenu} href="#contact" className={iconClass}>
              <HiPhone />Contact
            </a>

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDark}
              className="flex items-center gap-2 text-yellow-500 text-xl"
            >
              {dark ? <FaSun /> : <FaMoon />}
              <span className="text-sm">Toggle Theme</span>
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;