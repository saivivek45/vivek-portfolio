"use client";

import { ProjectCard } from "@/components/ui/ProjectCard";

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
  },
];

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen px-6 py-20 bg-black text-white relative overflow-hidden"
    >
      {/* Optional background shapes */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-blue-500 opacity-20 rounded-full animate-pulse" />
      <div className="absolute bottom-10 right-16 w-24 h-24 bg-purple-400 opacity-20 rounded-full animate-bounce" />
      <div className="absolute top-1/2 right-10 w-16 h-16 bg-green-500 opacity-20 rounded-full animate-spin" />

      {/* Section Heading */}
      <p className="text-center text-sm text-gray-400 tracking-wider uppercase mb-4">
        Crafted with Passion
      </p>
      <h1 className="text-4xl sm:text-5xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-300 to-purple-500">
        Featured Projects
      </h1>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 px-4 md:px-10">
        {projects.map((project, i) => (
          <ProjectCard
            key={project.id}
            project={project}
            size={i === 0 ? "large" : "small"} // Forever E-Commerce on top as large
          />
        ))}
      </div>
    </section>
  );
};
