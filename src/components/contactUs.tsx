// components/WelcomeMessage.tsx

import React, { useState } from "react";

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    inquiry: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    alert("we are here");
    e.preventDefault();

    const sanitizedData = {
      name: formData.name.replace(/</g, "&lt;").replace(/>/g, "&gt;"),
      email: formData.email.replace(/</g, "&lt;").replace(/>/g, "&gt;"),
      inquiry: formData.inquiry.replace(/</g, "&lt;").replace(/>/g, "&gt;"),
    };

    try {
      const res = await fetch("/api/contactUs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(sanitizedData),
      });

      if (res.ok) {
        alert("Your inquiry has been sent successfully.");
      } else {
        alert("Failed to send your inquiry. Please try again later.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }

    console.log("Form data submitted:", formData);
  };
  return (
    <div
      className="relative z-10 flex flex-col items-center justify-center h-screen"
      id="contactUs"
    >
      <div className="w-full bg-white text-black p-6">
        <h2 className="text-center text-2xl mb-4">Contact Us</h2>
        <div className="flex flex-col lg:flex-row justify-around items-center">
          <form
            onSubmit={handleSubmit}
            className="max-w-md mx-auto mt-4 lg:w-1/2"
          >
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                maxLength={50}
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                maxLength={50}
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="inquiry"
                className="block text-sm font-medium text-gray-700"
              >
                Inquiry
              </label>
              <textarea
                id="inquiry"
                name="inquiry"
                value={formData.inquiry}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
            <div className="mb-4">
              <button
                type="submit"
                className="w-full px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Submit
              </button>
            </div>
          </form>
          <div className="mt-8 lg:mt-0 lg:w-1/2 lg:ml-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2894.2422212542774!2d-80.3686053!3d43.497282299999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b8c2afd8a601d%3A0xd66d230c40273c6d!2s1248%20Kramp%20Rd%2C%20Breslau%2C%20ON%20N0B%201M0%2C%20Canada!5e0!3m2!1sen!2sae!4v1719619706339!5m2!1sen!2sae"
              width="600"
              height="450"
              loading="lazy"
            ></iframe>
            {/* <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0861030192415!2d-122.4711149846809!3d37.77851947975992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7e1bba1b2e39%3A0xc5e6a10bd98e3b7d!2sGolden%20Gate%20Park!5e0!3m2!1sen!2sus!4v1602196837091!5m2!1sen!2sus"
              width="100%"
              height="450"
              frameBorder="0"
              style={{ border: 0 }}
              aria-hidden="false"
              tabIndex={0}
            ></iframe> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
