"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaDocker,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiTypescript,
  SiFramer,
  SiPostgresql,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiPython,
  SiCplusplus,
  SiExpress,
  SiNextdotjs,
  SiFlask,
  SiSelenium,
} from "react-icons/si";

const categories = ["Languages", "Frameworks/Libraries", "Tech Stack", "Databases"];

const allSkills = [
  { name: "Python", category: "Languages", icon: <SiPython className="text-yellow-300" /> },
  { name: "JavaScript", category: "Languages", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "C++", category: "Languages", icon: <SiCplusplus className="text-blue-300" /> },
  { name: "HTML5", category: "Languages", icon: <SiHtml5 className="text-orange-500" /> },
  { name: "CSS3", category: "Languages", icon: <SiCss3 className="text-blue-500" /> },

  { name: "React.js", category: "Frameworks/Libraries", icon: <FaReact className="text-sky-400" /> },
  { name: "Tailwind CSS", category: "Frameworks/Libraries", icon: <SiTailwindcss className="text-cyan-400" /> },
  { name: "Node.js", category: "Frameworks/Libraries", icon: <FaNodeJs className="text-green-500" /> },
  { name: "Express.js", category: "Frameworks/Libraries", icon: <SiExpress className="text-gray-200" /> },
  { name: "Next.js", category: "Frameworks/Libraries", icon: <SiNextdotjs className="text-white" /> },
  { name: "Framer Motion", category: "Frameworks/Libraries", icon: <SiFramer className="text-pink-500" /> },
  { name: "Selenium", category: "Frameworks/Libraries", icon: <SiSelenium className="text-green-400" /> },
  { name: "Flask", category: "Frameworks/Libraries", icon: <SiFlask className="text-white" /> },
  { name: "Git", category: "Frameworks/Libraries", icon: <FaGitAlt className="text-orange-500" /> },
  { name: "Docker", category: "Frameworks/Libraries", icon: <FaDocker className="text-blue-400" /> },

  { name: "MERN", category: "Tech Stack", icon: <FaNodeJs className="text-green-400" /> },
  { name: "PERN", category: "Tech Stack", icon: <SiPostgresql className="text-blue-400" /> },

  { name: "MongoDB", category: "Databases", icon: <SiMongodb className="text-green-400" /> },
  { name: "PostgreSQL", category: "Databases", icon: <SiPostgresql className="text-blue-400" /> },
];

export const SkillsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("Languages");

  const filteredSkills =
    selectedCategory === "All"
      ? allSkills
      : allSkills.filter(skill => skill.category === selectedCategory);

  return (
    <section id="skills" className="py-20 bg-[#0d1117] text-white">
      {/* Animated Heading */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <p className="text-sm text-gray-400 uppercase tracking-widest">My Tech Stack</p>
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-purple-500">
          Skills & Tools
        </h2>
      </motion.div>

      {/* Category Buttons */}
      <div className="flex justify-center gap-4 mb-10 flex-wrap">
        {categories.map((cat) => (
          <motion.button
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.05 }}
            key={cat}
            className={`px-4 py-2 rounded-full text-sm border hover:bg-purple-500 hover:text-white transition-all ${
              selectedCategory === cat
                ? "bg-purple-600 text-white"
                : "text-gray-300 border-gray-500"
            }`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </motion.button>
        ))}
      </div>

      {/* Skills Grid */}
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-6xl mx-auto px-4"
        initial="hidden"
        whileInView="visible"
        transition={{ staggerChildren: 0.07 }}
        variants={{
          hidden: {},
          visible: {},
        }}
        viewport={{ once: true }}
      >
        {filteredSkills.map((skill, i) => (
          <motion.div
            key={i}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.4, delay: i * 0.03 }}
            whileHover={{
              scale: 1.1,
              boxShadow: "0px 0px 15px rgba(192, 132, 252, 0.4)",
            }}
            className="bg-[#1f1f1f] p-6 rounded-xl flex flex-col items-center justify-center shadow-md hover:shadow-purple-500/30 transition-all duration-300"
          >
            <motion.div
              whileHover={{ rotate: 10, scale: 1.3 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="text-4xl mb-3"
            >
              {skill.icon}
            </motion.div>
            <p className="text-sm font-medium text-center">{skill.name}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
