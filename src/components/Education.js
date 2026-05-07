import React from "react";

function Education() {
  return (
    <section
      id="education"
      className="py-20 px-6 md:px-16 bg-gray-100 dark:bg-gray-900 text-black dark:text-white"
    >
      {/* Heading */}
      <h2 className="text-4xl font-bold text-center text-cyan-500">
        Education Background
      </h2>

      <div className="max-w-4xl mx-auto mt-14 space-y-10">

        {/* Degree */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border-l-4 border-cyan-500 text-center">
          <h3 className="text-2xl font-bold">
            Bachelor of Science in Physical Therapy (BSc PT)
          </h3>

          <p className="mt-2 text-gray-600 dark:text-gray-300">
            Alupe University
          </p>

          <p className="mt-1 text-gray-500 dark:text-gray-400">
            2019 – 2023
          </p>

          <div className="mt-6 text-left max-w-2xl mx-auto">
            <h4 className="font-semibold text-cyan-500 mb-2">
              Areas of Academic Focus
            </h4>

            <ul className="list-disc ml-6 text-gray-700 dark:text-gray-300 space-y-1">
              <li>Neurorehabilitation</li>
              <li>Musculoskeletal Rehabilitation</li>
              <li>Respiratory Care</li>
              <li>Cardiopulmonary Rehabilitation</li>
              <li>Pediatric Rehabilitation</li>
              <li>Community-Based Rehabilitation</li>
              <li>Exercise Therapy</li>
              <li>Intensive Care Physiotherapy</li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Education;