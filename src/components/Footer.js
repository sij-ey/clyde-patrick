import React from "react";

function Footer() {
  return (
    <footer className="text-center py-8 px-4 bg-gray-900 text-white border-t border-gray-800">
      <p className="text-gray-400">
        © {new Date().getFullYear()} Clyde Patrick Onyango Omollo. All rights reserved.
      </p>

      <p className="mt-2 text-sm text-gray-500">
        Bachelor of Science in Physical Therapy (BSc PT) | Neurorehabilitation • Musculoskeletal • Respiratory Care
      </p>
    </footer>
  );
}

export default Footer;