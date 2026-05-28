import React from "react";

function DmdSma() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-black dark:text-white p-10">
      <h1 className="text-4xl font-bold text-cyan-500 mb-8">
        DMD & SMA Standards of Care
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        <img
          src="/images/dmd1.jpg"
          alt="DMD Care"
          className="rounded-xl shadow-lg"
        />

        <img
          src="/images/dmd2.jpg"
          alt="SMA Rehabilitation"
          className="rounded-xl shadow-lg"
        />

        <img
          src="/images/dmd3.jpg"
          alt="Neuromuscular Care"
          className="rounded-xl shadow-lg"
        />
      </div>
    </div>
  );
}

export default DmdSma;