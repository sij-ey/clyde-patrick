import React from "react";
import {
  FaBrain,
  FaWalking,
  FaLungs,
  FaHeartbeat,
  FaChild,
  FaHandsHelping,
  FaHospital,
} from "react-icons/fa";

const services = [
  {
    icon: <FaBrain />,
    title: "Neurorehabilitation",
    desc: "Comprehensive rehabilitation programs for neurological conditions focused on restoring mobility, balance, coordination, and functional independence.",
  },
  {
    icon: <FaWalking />,
    title: "Musculoskeletal Rehabilitation",
    desc: "Assessment and treatment of orthopedic and musculoskeletal conditions using evidence-based physiotherapy techniques and exercise therapy.",
  },
  {
    icon: <FaLungs />,
    title: "Respiratory Physiotherapy",
    desc: "Respiratory care interventions designed to improve breathing efficiency, airway clearance, and cardiopulmonary function.",
  },
  {
    icon: <FaHeartbeat />,
    title: "Cardiopulmonary Rehabilitation",
    desc: "Rehabilitation support for patients with cardiopulmonary conditions through monitored exercise and functional recovery programs.",
  },
  {
    icon: <FaChild />,
    title: "Pediatric Rehabilitation",
    desc: "Specialized physiotherapy care for children with neurological, developmental, and neuromuscular conditions.",
  },
  {
    icon: <FaHandsHelping />,
    title: "Community-Based Rehabilitation",
    desc: "Patient-centered rehabilitation programs that promote inclusion, independence, and quality of life within the community.",
  },
  {
    icon: <FaHospital />,
    title: "Inpatient & Outpatient Physiotherapy",
    desc: "Professional physiotherapy services for both hospitalized and outpatient clients focusing on recovery and functional improvement.",
  },
];

function Services() {
  return (
    <section
      id="services"
      className="py-20 px-6 md:px-16 bg-gray-100 dark:bg-gray-950 text-black dark:text-white"
    >
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-cyan-500">
          Areas of Specialization
        </h2>

        <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
          Delivering evidence-based physiotherapy services focused on
          rehabilitation, functional independence, patient-centered care,
          and improved quality of life.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
        {services.map((service, index) => (
          <div
            key={index}
            className="p-8 bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:scale-105 transition duration-300 border border-gray-200 dark:border-gray-800"
          >
            <div className="text-4xl text-cyan-500 mb-5">
              {service.icon}
            </div>

            <h3 className="font-bold text-xl mb-3">
              {service.title}
            </h3>

            <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
              {service.desc}
            </p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center mt-14">
        <a
          href="#contact"
          className="bg-cyan-600 text-white px-8 py-3 rounded-lg hover:bg-cyan-700 transition"
        >
          Contact for Consultation
        </a>
      </div>
    </section>
  );
}

export default Services;