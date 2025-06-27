"use client";

import { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export const Contact = () => {
  const [popup, setPopup] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch("https://formspree.io/f/mvgrdzel", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setPopup(true);
      setFormData({ name: "", email: "", message: "" });

      setTimeout(() => {
        setPopup(false);
      }, 3000); // hide after 3 seconds
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-gray-950 text-white py-20 px-4 flex flex-col items-center"
    >
      <div className="text-center mb-12">
        <p className="text-sm text-gray-400 uppercase tracking-widest">Get in Touch</p>
        <h2 className="text-4xl font-extrabold bg-gradient-to-r from-purple-300 to-purple-500 text-transparent bg-clip-text">
          Contact Me
        </h2>
        <p className="text-gray-400 mt-2 text-sm max-w-xl mx-auto">
          Have a question, proposal, or just want to say hello? Feel free to reach out!
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl bg-[#1f1f1f] p-8 rounded-xl shadow-lg space-y-6"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <textarea
          name="message"
          rows={5}
          placeholder="Your Message"
          required
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
        ></textarea>
        <button
          type="submit"
          className="bg-purple-600 hover:bg-purple-700 text-white py-3 px-6 rounded transition-all w-full font-semibold"
        >
          Send Message
        </button>
      </form>

      {popup && (
        <div className="mt-6 px-6 py-4 bg-green-700 text-white rounded-lg shadow-lg text-center transition-all">
          ✅ Message Sent Successfully!
        </div>
      )}
    </section>
  );
};
