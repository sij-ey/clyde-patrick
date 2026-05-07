import React from "react";

function Skills() {
  return (
    <section
      id="skills"
      className="py-20 px-6 md:px-16 bg-gray-100 dark:bg-gray-900 text-black dark:text-white"
    >
      {/* Heading */}
      <h2 className="text-4xl font-bold text-center text-cyan-500">
        Professional Skills
      </h2>

      <p className="mt-4 text-center text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
        Core clinical, therapeutic, and rehabilitation competencies developed
        through hands-on physiotherapy practice and continuous professional
        training.
      </p>

      {/* Skills Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14 text-center">

        <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow">
          <h3 className="font-bold text-xl text-cyan-500">
            Clinical Assessment
          </h3>
          <p className="mt-3 text-gray-600 dark:text-gray-300">
            Patient evaluation, functional assessment, neurological screening,
            musculoskeletal examination, and treatment planning.
          </p>
        </div>

        <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow">
          <h3 className="font-bold text-xl text-cyan-500">
            Rehabilitation Therapy
          </h3>
          <p className="mt-3 text-gray-600 dark:text-gray-300">
            Neurorehabilitation, musculoskeletal rehab, cardiopulmonary rehab,
            pediatric rehabilitation, and community-based rehabilitation.
          </p>
        </div>

        <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow">
          <h3 className="font-bold text-xl text-cyan-500">
            Manual Therapy
          </h3>
          <p className="mt-3 text-gray-600 dark:text-gray-300">
            Orthopedic manual therapy (OMT), soft tissue techniques,
            joint mobilization, and pain management approaches.
          </p>
        </div>

        <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow">
          <h3 className="font-bold text-xl text-cyan-500">
            Exercise Therapy
          </h3>
          <p className="mt-3 text-gray-600 dark:text-gray-300">
            Therapeutic exercise prescription, mobility training, strength
            conditioning, balance training, and functional rehabilitation.
          </p>
        </div>

        <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow">
          <h3 className="font-bold text-xl text-cyan-500">
            Respiratory Care
          </h3>
          <p className="mt-3 text-gray-600 dark:text-gray-300">
            Airway clearance techniques, breathing exercises, and management
            of cardiopulmonary conditions in inpatient and outpatient care.
          </p>
        </div>

        <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow">
          <h3 className="font-bold text-xl text-cyan-500">
            Professional Skills
          </h3>
          <p className="mt-3 text-gray-600 dark:text-gray-300">
            Patient education, multidisciplinary teamwork, documentation,
            leadership, research participation, and evidence-based practice.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Skills;