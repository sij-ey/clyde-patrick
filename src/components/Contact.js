import React from "react";

function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-6 md:px-16 bg-white dark:bg-gray-950 text-black dark:text-white"
    >
      {/* Heading */}
      <h2 className="text-4xl font-bold text-center text-cyan-500">
        Contact & Collaboration
      </h2>

      <p className="mt-4 text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
        Reach out for physiotherapy consultation, collaboration, research,
        or professional engagement.
      </p>

      {/* Form */}
      <form
        action="https://formspree.io/f/xykoyqry"
        method="POST"
        className="max-w-2xl mx-auto mt-10 flex flex-col gap-4 bg-gray-100 dark:bg-gray-900 p-8 rounded-2xl shadow-lg"
      >
        <input
          name="name"
          placeholder="Your Name"
          className="p-3 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
          required
        />

        <input
          name="email"
          type="email"
          placeholder="Your Email"
          className="p-3 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
          required
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          className="p-3 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
          required
        />

        <button
          type="submit"
          className="bg-cyan-600 text-white py-3 rounded-lg hover:bg-cyan-700 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}

export default Contact;