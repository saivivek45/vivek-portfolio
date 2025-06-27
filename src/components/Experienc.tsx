"use client";

import { motion } from "framer-motion";
import { Briefcase, ExternalLink } from "lucide-react";

const experiences = [
  {
    role: "Python Developer Intern",
    company: "Xpertstim IT Services Pvt. Ltd.",
    duration: "June 2, 2025 – June 13, 2025",
    certificate: "/internship1.pdf",
    description: `Successfully developed a Basic Web Browser using Python and the PyQt5 framework. 
    Implemented features like navigation, search, and tab management. 
    Demonstrated skills in GUI design, event handling, and web content rendering.`,
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-[#0d1117] text-white">
      <div className="text-center mb-12">
        <p className="text-sm text-gray-400 uppercase tracking-widest">
          My Journey
        </p>
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-purple-500">
          Experience
        </h2>
      </div>

      <div className="max-w-4xl mx-auto space-y-8 px-4">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            className="bg-gray-900 p-6 rounded-xl border border-gray-700 shadow-md hover:shadow-purple-500/30 transition"
          >
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-xl font-semibold text-purple-400 flex items-center gap-2">
                <Briefcase className="w-5 h-5" />
                {exp.role}
              </h3>
              <span className="text-sm text-gray-400">{exp.duration}</span>
            </div>
            <p className="text-gray-300 text-sm mb-4">{exp.company}</p>
            <p className="text-sm text-gray-400 mb-4 whitespace-pre-line">
              {exp.description}
            </p>
            <a
              href={exp.certificate}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm text-purple-400 border border-purple-500 px-3 py-1.5 rounded-full hover:bg-purple-600 hover:text-white transition"
            >
              View Certificate
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
