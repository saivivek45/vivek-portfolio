"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const TAG_COLORS = ["blue", "purple", "emerald", "amber", "red", "indigo"];

export const ProjectCard = ({ project, size }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className={`relative overflow-hidden rounded-2xl shadow-xl bg-[#1f1f1f] transition-transform duration-300 hover:scale-[1.02] group ${
        size === "large" ? "md:col-span-2" : ""
      }`}
    >
      <Image
        src={project.imgSrc}
        alt={project.imgAlt}
        width={600}
        height={400}
        className="w-full h-64 object-cover transition-opacity duration-300 group-hover:opacity-70"
      />
      <div className="absolute inset-0 bg-black/70 backdrop-blur-md p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div>
          <div className="flex flex-wrap gap-2 mb-3">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className={`text-xs font-semibold px-3 py-1 rounded-full bg-${
                  TAG_COLORS[i % TAG_COLORS.length]
                }-500 bg-opacity-80 text-white shadow-sm`}
              >
                {tag}
              </span>
            ))}
          </div>
          <h2 className="text-2xl font-semibold mb-1">{project.title}</h2>
          <p className="text-sm text-slate-300 mb-4">{project.description}</p>
          <div className="flex gap-5 text-sm">
            <a href={project.githubLink} className="hover:text-gray-300 transition-all">
              <i className="fab fa-github mr-1"></i> GitHub
            </a>
            <a href={project.demoLink} className="hover:text-gray-300 transition-all">
              <i className="fas fa-external-link-alt mr-1"></i> Live Demo
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
