"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { 
  Sparkles, 
  Code2, 
  Rocket, 
  Filter,
  Grid3X3,
  LayoutGrid
} from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Forever E-Commerce",
    description:
      "A full-stack MERN e-commerce platform with user store, admin dashboard, and backend. Features auth, Cloudinary image upload, and responsive UI.",
    tags: ["React", "Node.js", "MongoDB", "Cloudinary","Express"],
    imgSrc: "/images/forever.png",
    imgAlt: "Forever e-commerce dashboard",
    githubLink: "https://github.com/saivivek45/forever",
    demoLink: "https://forever-frontend-puce-eight.vercel.app",
    category: "Full-Stack",
    featured: true
  },
  {
    id: 2,
    title: "GiRi Landing Page",
    description:
      "Fictional AI robot landing page inspired by Apple-style design. Built with Next.js App Router, Shadcn UI, Framer Motion.",
    tags: ["Next.js", "Tailwind", "Shadcn", "Framer Motion"],
    imgSrc: "/images/giri.png",
    imgAlt: "GiRi robot page",
    githubLink: "https://github.com/saivivek45/giri-landing-page",
    demoLink: "https://giri-landing-page-krk4.vercel.app/",
    category: "Frontend",
    featured: true
  },
  {
    id: 3,
    title: "CodeJudge Backend",
    description:
      "A backend for a code judge system with Docker-based code execution, JWT auth, rate limiting, and a leaderboard.",
    tags: ["Node.js", "Express", "MongoDB", "Docker", "Redis"],
    imgSrc: "/images/codejudge.jpg",
    imgAlt: "CodeJudge backend API",
    githubLink: "https://github.com/saivivek45/CodeJudge",
    demoLink: "",
    category: "Backend",
    featured: false
  },
  {
    id: 4,
    title: "Expense Tracker",
    description:
      "A responsive React app to track expenses and transactions with a clean UI.",
    tags: ["React", "JavaScript", "Tailwind"],
    imgSrc: "/images/ExpenseTracker.png",
    imgAlt: "Expense Tracker preview",
    githubLink: "https://github.com/saivivek45/Expense-tracker",
    demoLink: "https://expense-tracker-gamma-navy.vercel.app/",
    category: "Frontend",
    featured: false
  },
  {
    id: 5,
    title: "Nike Website",
    description:
      "Frontend-only Nike-themed landing page built with modern layout and styling. Placeholder for deployment.",
    tags: ["React","HTML", "CSS", "JavaScript"],
    imgSrc: "/images/nike.png",
    imgAlt: "Nike landing page",
    githubLink: "https://github.com/saivivek45/Nike-website",
    demoLink: "https://nike-website-seven-jade.vercel.app/", 
    category: "Frontend",
    featured: false
  },
];

const categories = ["All", "Full-Stack", "Frontend", "Backend"];

export const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [viewMode, setViewMode] = useState<"grid" | "masonry">("masonry");

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section
      ref={ref}
      id="projects"
      className="min-h-screen px-6 py-20 bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.3, 0.1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          >
            <Code2 className="w-4 h-4 text-purple-400/20" />
          </motion.div>
        ))}
      </div>

      {/* Floating decorative shapes */}
      <div className="absolute top-20 left-20 w-20 h-20 bg-blue-500/10 rounded-full animate-pulse blur-xl" />
      <div className="absolute bottom-20 right-16 w-32 h-32 bg-purple-400/10 rounded-full animate-bounce blur-xl" 
           style={{ animationDuration: "3s" }} />
      <div className="absolute top-1/2 right-10 w-16 h-16 bg-green-500/10 rounded-full animate-spin blur-xl" 
           style={{ animationDuration: "8s" }} />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="flex items-center justify-center gap-2 mb-4"
            animate={{ 
              scale: [1, 1.05, 1],
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Sparkles className="w-6 h-6 text-purple-400" />
            <p className="text-purple-400 text-sm font-medium uppercase tracking-wider">
              Crafted with Passion
            </p>
            <Sparkles className="w-6 h-6 text-purple-400" />
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-7xl font-extrabold mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-white via-purple-300 to-purple-500 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </motion.h1>

          <motion.p
            className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            A showcase of my latest work, featuring innovative solutions and cutting-edge technologies. 
            Each project represents a unique challenge and creative solution.
          </motion.p>
        </motion.div>

        {/* Enhanced Filter Controls */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-between mb-12 gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {/* Category filters */}
          <div className="flex items-center gap-2">
            <Filter className="w-5 h-5 text-purple-400 mr-2" />
            <div className="flex gap-3 bg-gray-900/50 backdrop-blur-sm rounded-2xl p-2 border border-gray-700/30">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  className={`px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 relative overflow-hidden ${
                    selectedCategory === category
                      ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg"
                      : "text-gray-300 hover:text-white hover:bg-gray-800/50"
                  }`}
                  onClick={() => setSelectedCategory(category)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10">{category}</span>
                  {selectedCategory === category && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600"
                      layoutId="activeCategory"
                      initial={false}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </div>

          {/* View mode toggle */}
          <div className="flex items-center gap-2 bg-gray-900/50 backdrop-blur-sm rounded-xl p-2 border border-gray-700/30">
            <motion.button
              className={`p-2 rounded-lg transition-all duration-300 ${
                viewMode === "masonry" ? "bg-purple-500 text-white" : "text-gray-400 hover:text-white"
              }`}
              onClick={() => setViewMode("masonry")}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <LayoutGrid className="w-5 h-5" />
            </motion.button>
            <motion.button
              className={`p-2 rounded-lg transition-all duration-300 ${
                viewMode === "grid" ? "bg-purple-500 text-white" : "text-gray-400 hover:text-white"
              }`}
              onClick={() => setViewMode("grid")}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Grid3X3 className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className={`${
            viewMode === "masonry" 
              ? "columns-1 md:columns-2 xl:columns-3 gap-8 space-y-8" 
              : "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
          }`}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className={viewMode === "masonry" ? "break-inside-avoid" : ""}
              style={viewMode === "masonry" ? { 
                marginBottom: index % 3 === 0 ? "2rem" : "1rem" 
              } : {}}
            >
                             <ProjectCard
                 project={project}
                 size={project.featured && index < 2 ? "large" : "small"}
               />
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <motion.p
            className="text-gray-400 mb-6 text-lg"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Interested in working together?
          </motion.p>
          <motion.button
            className="group relative px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-semibold text-white shadow-lg hover:shadow-purple-500/25 transition-all duration-300 overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="relative z-10 flex items-center gap-2">
              Let's Create Something Amazing
              <Rocket className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500"
              initial={{ scale: 0, rotate: 0 }}
              whileHover={{ scale: 1, rotate: 180 }}
              transition={{ duration: 0.6 }}
              style={{ originX: 0.5, originY: 0.5 }}
            />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
