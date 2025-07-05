"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import AvatarCanvas from "@/components/ui/AvatarCanvas";
import { 
  Code, 
  Palette, 
  Zap, 
  Heart,
  Coffee,
  Globe,
  Rocket,
  Star
} from "lucide-react";

const skills = [
  { name: "Frontend", icon: Palette, color: "from-blue-400 to-blue-600" },
  { name: "Backend", icon: Code, color: "from-green-400 to-green-600" },
  { name: "Full-Stack", icon: Globe, color: "from-purple-400 to-purple-600" },
  { name: "Innovation", icon: Rocket, color: "from-orange-400 to-orange-600" },
];

const funFacts = [
  { icon: Coffee, text: "500+ Cups of Coffee", color: "text-amber-400" },
  { icon: Code, text: "50+ Projects Built", color: "text-blue-400" },
  { icon: Star, text: "Always Learning", color: "text-yellow-400" },
  { icon: Heart, text: "Passionate Developer", color: "text-pink-400" },
];

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);

  return (
    <section
      ref={ref}
      id="about"
      className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white flex items-center justify-center px-6 py-20 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-purple-400 rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl w-full items-center relative z-10">
        {/* Left: Enhanced 3D Avatar */}
        <motion.div
          initial={{ opacity: 0, x: -100, rotateY: -30 }}
          animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative"
        >
          <div className="relative w-full h-96 md:h-[500px] bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl rounded-3xl flex items-center justify-center p-6 shadow-2xl border border-gray-700/30 overflow-hidden group">
            {/* Glowing border effect */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Avatar */}
            <AvatarCanvas />
            
            {/* Floating skill badges */}
            {skills.map((skill, index) => {
              const SkillIcon = skill.icon;
              const angle = (index * 90) + (index * 20);
              const radius = 120;
              const x = Math.cos((angle * Math.PI) / 180) * radius;
              const y = Math.sin((angle * Math.PI) / 180) * radius;
              
              return (
                <motion.div
                  key={skill.name}
                  className="absolute flex items-center justify-center"
                  style={{
                    transform: `translate(${x}px, ${y}px)`,
                  }}
                  initial={{ scale: 0, rotate: -180 }}
                  animate={isInView ? { 
                    scale: 1, 
                    rotate: 0,
                    y: [0, -10, 0]
                  } : {}}
                  transition={{ 
                    duration: 0.8, 
                    delay: 0.5 + index * 0.2,
                    y: {
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.4
                    }
                  }}
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  onHoverStart={() => setHoveredSkill(index)}
                  onHoverEnd={() => setHoveredSkill(null)}
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${skill.color} rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-white/20`}>
                    <SkillIcon className="w-8 h-8 text-white" />
                  </div>
                  {hoveredSkill === index && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute -bottom-8 bg-gray-900 px-2 py-1 rounded-lg text-xs font-medium border border-gray-700"
                    >
                      {skill.name}
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Right: Enhanced About content */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          className="flex flex-col gap-8"
        >
          {/* Section heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.p 
              className="text-purple-400 text-sm font-medium uppercase tracking-wider mb-4"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Get to know me
            </motion.p>
            <h2 className="text-5xl md:text-6xl font-extrabold mb-8">
              <span className="bg-gradient-to-r from-white via-purple-300 to-purple-500 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
          </motion.div>

          {/* About text with enhanced styling */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.7 }}
          >
            <motion.p 
              className="text-xl leading-relaxed text-gray-300"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Hey there! I'm{" "}
              <motion.span 
                className="text-white font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                Vivek
              </motion.span>
              , a passionate{" "}
              <motion.span 
                className="text-blue-400 font-semibold"
                animate={{ color: ["#60a5fa", "#a855f7", "#60a5fa"] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Full-Stack Developer
              </motion.span>{" "}
              and{" "}
              <motion.span 
                className="text-green-400 font-semibold"
                animate={{ color: ["#4ade80", "#06b6d4", "#4ade80"] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              >
                AI Enthusiast
              </motion.span>{" "}
              from India.
            </motion.p>

            <motion.p 
              className="text-lg leading-relaxed text-gray-400"
              initial={{ x: -20, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              I craft digital experiences that blend{" "}
              <span className="text-purple-400 font-medium">beautiful design</span> with{" "}
              <span className="text-blue-400 font-medium">robust functionality</span>. 
              Whether it's building scalable web applications or exploring cutting-edge AI technologies, 
              I'm always excited to turn innovative ideas into reality.
            </motion.p>

            <motion.p 
              className="text-base leading-relaxed text-gray-500"
              initial={{ x: -20, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 1.1 }}
            >
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
              or sharing my knowledge through blogs and community interactions. I believe in continuous learning 
              and the power of technology to make a positive impact.
            </motion.p>
          </motion.div>

          {/* Fun facts grid */}
          <motion.div
            className="grid grid-cols-2 gap-4 mt-8"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.3 }}
          >
            {funFacts.map((fact, index) => {
              const FactIcon = fact.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700/30 hover:border-purple-400/50 transition-all duration-300 group"
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1.5 + index * 0.1 }}
                >
                  <FactIcon className={`w-6 h-6 ${fact.color} mb-2 group-hover:scale-110 transition-transform duration-300`} />
                  <p className="text-sm text-gray-300 font-medium">{fact.text}</p>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Call to action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.7 }}
          >
            <motion.button
              className="group relative px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-semibold text-white shadow-lg hover:shadow-purple-500/25 transition-all duration-300 overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span className="relative z-10 flex items-center gap-2">
                Let's Build Something Amazing
                <Zap className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
              />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
