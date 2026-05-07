import React, { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

function Navbar() {
  const [dark, setDark] = useState(false);

  const toggleDark = () => {
    document.documentElement.classList.toggle("dark");
    setDark(!dark);
  };

  return (
    <nav className="fixed w-full bg-white dark:bg-gray-900 shadow p-4 flex justify-between">
      <h1 className="font-bold">Clyde Patrick</h1>
      <div>
        <a href="#projects" className="mx-3">Projects</a>
        <a href="#contact" className="mx-3">Contact</a>
        <button onClick={toggleDark}>
          {dark ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;