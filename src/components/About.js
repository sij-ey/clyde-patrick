import React from "react";

function About() {
  return (
    <section
      id="about"
      className="py-20 px-6 md:px-16 bg-white dark:bg-gray-950 text-gray-900 dark:text-white transition-colors duration-500"
    >
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-center text-cyan-600 dark:text-cyan-400">
          About Me
        </h2>

        {/* Intro */}
        <p className="mt-8 text-center text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
          I am a dedicated and motivated Physical Therapist with hands-on
          clinical experience in neurorehabilitation, musculoskeletal
          rehabilitation, respiratory care, orthopedic manual therapy,
          exercise therapy, and inpatient/outpatient physiotherapy services.
          I am passionate about evidence-based rehabilitation, community health
          improvement, academic growth, and patient-centered care.
        </p>

        <p className="mt-6 text-center text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
          My experience includes managing neurological, orthopedic,
          cardiopulmonary, pediatric, and neuromuscular conditions while
          promoting functional independence and improved quality of life.
          I strongly value multidisciplinary teamwork, compassionate care,
          rehabilitation innovation, and continuous professional development.
        </p>

        {/* Career Objective Card */}
        <div className="mt-12 bg-gray-50 dark:bg-gray-900 border border-cyan-200 dark:border-cyan-500/20 rounded-2xl p-8 shadow-md dark:shadow-lg transition-colors duration-500">
          
          <h3 className="text-2xl font-semibold text-cyan-600 dark:text-cyan-400 mb-4 text-center">
            Career Objective
          </h3>

          <p className="text-gray-700 dark:text-gray-300 text-center leading-relaxed">
            To provide high-quality, evidence-based physiotherapy services
            through rehabilitation innovation, multidisciplinary collaboration,
            and compassionate patient care while contributing to improved
            functional outcomes and healthcare development.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;