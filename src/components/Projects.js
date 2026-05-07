import React from "react";
import { projects } from "../data";

function Projects() {
  return (
    <section
      id="projects"
      className="py-20 px-6 md:px-16 bg-white dark:bg-gray-950 text-black dark:text-white"
    >
      {/* Heading */}
      <div className="text-center">
        <h2 className="text-4xl font-bold text-cyan-500">
          Projects & Initiatives
        </h2>

        <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Key rehabilitation initiatives, healthcare innovation projects,
          and professional contributions focused on improving physiotherapy
          practice and patient outcomes.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
        {projects.map((project, i) => (
          <div
            key={i}
            className="p-8 rounded-2xl shadow-lg bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:scale-105 transition duration-300"
          >
            <h3 className="text-2xl font-bold text-cyan-500">
              {project.title}
            </h3>

            <p className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed">
              {project.description}
            </p>

            <div className="mt-6">
              <span className="inline-block bg-cyan-500/10 text-cyan-500 px-4 py-2 rounded-full text-sm font-medium">
                Physiotherapy & Rehabilitation
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;