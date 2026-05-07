import React from "react";

function Experience() {
  return (
    <section
      id="experience"
      className="py-20 px-6 md:px-16 bg-gray-100 dark:bg-gray-900 text-black dark:text-white"
    >
      {/* Heading */}
      <div className="text-center">
        <h2 className="text-4xl font-bold text-cyan-500">
          Clinical Experience
        </h2>

        <p className="mt-4 text-gray-600 dark:text-gray-300">
          Professional experience in rehabilitation, physiotherapy service
          delivery, leadership, and evidence-based patient care.
        </p>
      </div>

      {/* Experience Timeline */}
      <div className="max-w-5xl mx-auto mt-14 space-y-10">

        {/* Volunteer Physiotherapist */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border-l-4 border-cyan-500">
          <h3 className="text-2xl font-bold">
            Volunteer Physiotherapist
          </h3>

          <p className="text-cyan-500 font-medium mt-1">
            Busia County Referral Hospital
          </p>

          <h4 className="mt-6 font-semibold text-lg">
            Responsibilities
          </h4>

          <ul className="list-disc ml-6 mt-3 space-y-2 text-gray-700 dark:text-gray-300">
            <li>
              Conducted comprehensive physiotherapy assessments and evaluations
            </li>

            <li>
              Managed neurological, orthopedic, cardiopulmonary, and pediatric patients
            </li>

            <li>
              Developed individualized treatment plans and rehabilitation programs
            </li>

            <li>
              Administered exercise therapy and functional rehabilitation
            </li>

            <li>
              Participated in inpatient and outpatient physiotherapy services
            </li>

            <li>
              Collaborated with multidisciplinary healthcare teams
            </li>

            <li>
              Educated patients and caregivers on rehabilitation and home exercise programs
            </li>

            <li>
              Assisted in mobility training and functional independence programs
            </li>
          </ul>

          <h4 className="mt-6 font-semibold text-lg">
            Key Achievements
          </h4>

          <ul className="list-disc ml-6 mt-3 space-y-2 text-gray-700 dark:text-gray-300">
            <li>
              Contributed to strengthening the neurorehabilitation program
            </li>

            <li>
              Helped advocate for increased exercise therapy scheduling within rehabilitation services
            </li>

            <li>
              Enhanced patient participation and continuity in rehabilitation programs
            </li>
          </ul>
        </div>

        {/* Head of Department */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border-l-4 border-cyan-500">
          <h3 className="text-2xl font-bold">
            Head of Department – Physical Therapy
          </h3>

          <p className="text-cyan-500 font-medium mt-1">
            Mutomo Mission Hospital
          </p>

          <h4 className="mt-6 font-semibold text-lg">
            Current Roles & Responsibilities
          </h4>

          <ul className="list-disc ml-6 mt-3 space-y-2 text-gray-700 dark:text-gray-300">
            <li>
              Lead and coordinate physiotherapy department operations
            </li>

            <li>
              Supervise rehabilitation service delivery and patient care programs
            </li>

            <li>
              Manage multidisciplinary collaboration within the hospital
            </li>

            <li>
              Mentor and support junior physiotherapy staff and students
            </li>

            <li>
              Promote evidence-based physiotherapy practice and quality improvement initiatives
            </li>

            <li>
              Participate in hospital planning and rehabilitation program development
            </li>
          </ul>
        </div>

        {/* Research Committee */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border-l-4 border-cyan-500">
          <h3 className="text-2xl font-bold">
            Chairperson – Research Committee
          </h3>

          <p className="text-cyan-500 font-medium mt-1">
            Mutomo Mission Hospital
          </p>

          <h4 className="mt-6 font-semibold text-lg">
            Responsibilities
          </h4>

          <ul className="list-disc ml-6 mt-3 space-y-2 text-gray-700 dark:text-gray-300">
            <li>
              Coordinate and oversee departmental and institutional research activities
            </li>

            <li>
              Promote a culture of evidence-based practice and clinical research
            </li>

            <li>
              Support development of healthcare research projects and proposals
            </li>

            <li>
              Facilitate research discussions, ethical considerations, and professional development initiatives
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
}

export default Experience;