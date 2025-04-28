import React, { useState } from "react";
import axios from "axios";
import Footer from "./Footer";
// import Survey from "./components/Survey";
import { Link } from "react-router-dom";


const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      await axios.post("http://localhost:5000/contact", formData);
      setStatus("✅ Message sent!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending message:", error);
      setStatus("❌ Failed to send message.");
    }
  };

  return (
    <div className="min-h-screen px-6 py-16 text-center bg-purple-200">
      <h1 className="mb-6 text-4xl font-bold text-purple-800">Get in Touch</h1>
      <p className="max-w-2xl mx-auto mb-8 text-lg text-gray-700">
        Whether you're a student, warden, or part of the administration — we're here to help. 
        Drop us a message for support, suggestions, or partnership inquiries.
      </p>

      {/* Contact Email Section */}
      <div className="mb-10">
        <h3 className="text-xl font-semibold text-purple-700">📧 Email Us Directly</h3>
        <a
          href="mailto:securesidences@gmail.com"
          className="inline-block mt-2 text-lg text-purple-600 underline"
        >
          securesidences@gmail.com
        </a>
      </div>

      {/* Feedback Form Link */}
      <div className="mb-12">
        <h3 className="text-xl font-semibold text-purple-700">📋 Feedback or Report a Bug?</h3>
        <p className="mt-2 text-gray-800">
          Fill out our quick feedback form and help us improve SecuResidences.
        </p>
        <Link
  to="/survey"
  className="inline-block px-6 py-3 mt-4 font-semibold text-white bg-purple-700 rounded-xl hover:bg-purple-600"
>
  Give Feedback
</Link>

      </div>

      {/* Working Contact Form */}
      <div className="max-w-xl p-6 mx-auto mt-10 bg-white shadow-md rounded-xl mb-14">
        <h3 className="mb-4 text-xl font-semibold text-purple-700">📝 Send us a quick message</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            placeholder="Your Name"
            onChange={handleChange}
            className="w-full p-3 border rounded-xl"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            placeholder="Your Email"
            onChange={handleChange}
            className="w-full p-3 border rounded-xl"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            placeholder="Your Message"
            rows="4"
            onChange={handleChange}
            className="w-full p-3 border rounded-xl"
            required
          />
          <button
            type="submit"
            className="w-full px-4 py-2 font-semibold text-white bg-purple-700 rounded-xl hover:bg-purple-600"
          >
            Send Message
          </button>
          {status && (
            <p className="mt-2 text-sm text-purple-700">{status}</p>
          )}
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
