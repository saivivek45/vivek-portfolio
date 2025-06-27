"use client";

import { motion } from "framer-motion";
import AvatarCanvas from "@/components/ui/AvatarCanvas";

export const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-black text-white flex items-center justify-center px-6 py-20"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl w-full items-center">
        {/* Left: 3D Avatar */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full h-80 md:h-[450px] bg-gray-900 rounded-2xl flex items-center justify-center p-4 shadow-lg"
        >
          <AvatarCanvas />
        </motion.div>

        {/* Right: About content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-5"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-300 to-purple-500">
            About Me
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            I’m <span className="text-white font-semibold">Vivek</span>, a
            curious and driven{" "}
            <span className="text-blue-400 font-semibold">Web Developer</span> &
            <span className="text-green-400 font-semibold">
              {" "}
              Python Enthusiast
            </span>{" "}
            from India.
          </p>
          <p className="text-gray-400 leading-relaxed">
            I enjoy building clean, performant, and intuitive digital products —
            blending design with logic to bring ideas to life. Whether it's a
            full-stack e-commerce platform or an animated portfolio, I strive
            for both aesthetic and functional excellence.
          </p>
          <p className="text-gray-500">
            When I’m not coding, I love exploring new tech, contributing to open
            source, and sharing insights through blogs.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
