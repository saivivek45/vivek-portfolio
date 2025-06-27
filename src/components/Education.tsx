"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

export const Education = () => {
  return (
    <section id="education" className="py-20 bg-[#0d1117] text-white">
      <div className="text-center mb-12">
        <p className="text-sm text-gray-400 uppercase tracking-widest">Academics</p>
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-purple-500">
          Education
        </h2>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto bg-gray-900 p-6 rounded-xl border border-gray-700 shadow-md hover:shadow-purple-500/30 transition"
      >
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-xl font-semibold text-purple-400 flex items-center gap-2">
            <GraduationCap className="w-5 h-5" />
            B.Tech in Computer Science
          </h3>
          <span className="text-sm text-gray-400">Aug 2023 – Present</span>
        </div>
        <p className="text-gray-300 text-sm mb-1">
          Indian Institute of Information Technology, Kottayam
        </p>
        <p className="text-sm text-gray-400 mb-4">GPA: 8.3 / 10.0</p>
        <p className="text-sm text-gray-400">
          <span className="text-purple-400 font-medium">Coursework:</span> Data Structures and Algorithms, DBMS, Computer Networks, Operating Systems, Design and Analysis of Algorithms
        </p>
      </motion.div>
    </section>
  );
};
