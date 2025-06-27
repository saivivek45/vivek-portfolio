"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  User,
  Mail,
  FileText,
  Github,
  Linkedin,
  Briefcase,
  Rss,
  ArrowRight,
  BadgeInfo,
  Book,
} from "lucide-react";

export const Hero = () => {
  const [showBlogMsg, setShowBlogMsg] = useState(false);

  const cards = [
    { href: "#about", label: "About", icon: User },
    { href: "#projects", label: "Projects", icon: Briefcase },
    { href: "#contact", label: "Contact", icon: Mail },
    {
      href: "/saivivek_webdeveloper_resume.pdf",
      label: "Resume",
      icon: FileText,
      external: true
    },
    {
      href: "#blog",
      label: "Blog",
      icon: Rss,
      wide: true,
      onClick: () => setShowBlogMsg(true),
    },
    {
      href: "https://github.com/saivivek45",
      label: "GitHub",
      icon: Github,
      external: true,
    },
    {
      href: "https://linkedin.com/in/saivivek33",
      label: "LinkedIn",
      icon: Linkedin,
      external: true,
    },
    {
      href: "#experience",
      label: "Experience",
      icon: BadgeInfo,
      wide: true,
    },
    {
      href: "/card",
      label: "My Card",
      icon: User,
    },
    {
      href: "#education",
      label: "Education",
      icon: Book,
    },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen bg-black text-white flex items-center justify-center p-8 overflow-hidden"
    >
      {/* ✅ Glow modal if blog clicked */}
      {showBlogMsg && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="bg-gray-900 p-6 rounded-2xl shadow-2xl text-center max-w-sm border border-purple-500"
          >
            <p className="text-purple-400 mb-2 text-sm">📝 Blog Coming Soon</p>
            <h2 className="text-xl font-semibold mb-4">
              I'm still writing them!
            </h2>
            <button
              className="px-4 py-2 rounded-full bg-purple-600 hover:bg-purple-700 transition-all text-sm"
              onClick={() => setShowBlogMsg(false)}
            >
              Close
            </button>
          </motion.div>
        </div>
      )}

      {/* ✅ Main Grid */}
      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl w-full z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Bio Box */}
        <motion.div
          className="col-span-2 row-span-2 bg-gray-900 rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden group"
          whileHover={{ scale: 1.05 }}
        >
          {/* Glow Effect */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-30 blur-xl group-hover:opacity-50 transition-opacity duration-300" />

          <div className="relative flex items-center gap-4 z-10">
            <img
              src="/images/hero.png"
              alt="Avatar"
              className="w-24 h-24 rounded-full object-cover"
            />
            <div>
              <h2 className="text-3xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Vandrangi Sai Vivek
              </h2>
              <p className="text-gray-400 text-sm mt-1">
                Web & Python Developer
              </p>
              <p className="text-gray-500 text-xs mt-1">Based in India</p>
            </div>
          </div>
        </motion.div>

        {/* Cards */}
        {cards.map((card, i) => {
          const IconComponent = card.icon;

          const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
            if (card.onClick) {
              e.preventDefault();
              card.onClick();
            }
          };

          return (
            <motion.a
              key={card.label}
              href={card.href}
              target={card.external ? "_blank" : "_self"}
              rel={card.external ? "noopener noreferrer" : undefined}
              download={card.external ? true : undefined}
              onClick={handleClick}
              className={`${
                card.wide ? "col-span-2" : ""
              } group bg-gray-900 rounded-2xl p-4 flex flex-col items-center justify-center text-center hover:ring-2 hover:ring-purple-500/40 transition-all duration-300 relative overflow-hidden`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="mb-2">
                <IconComponent className="w-6 h-6 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-500 group-hover:bg-clip-text group-hover:animate-pulse transition-all duration-300" />
              </div>
              <span className="font-semibold relative flex items-center gap-1">
                {card.label}
                <ArrowRight className="w-4 h-4 text-purple-400 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-300" />
              </span>
            </motion.a>
          );
        })}
      </motion.div>
    </section>
  );
};
