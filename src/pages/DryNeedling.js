import React from "react";

function DryNeedling() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-black dark:text-white p-10">
      <h1 className="text-4xl font-bold text-cyan-500 mb-8">
        Dry Needling Training
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        <img
          src="/images/dry1.jpg"
          alt="Dry Needling"
          className="rounded-xl shadow-lg"
        />

        <img
          src="/images/dry2.jpg"
          alt="Dry Needling Technique"
          className="rounded-xl shadow-lg"
        />

        <img
          src="/images/dry3.jpg"
          alt="Trigger Point Therapy"
          className="rounded-xl shadow-lg"
        />
      </div>
    </div>
  );
}

export default DryNeedling;