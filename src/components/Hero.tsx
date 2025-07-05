"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  Sparkles,
  Code,
  Zap,
} from "lucide-react";

export const Hero = () => {
  const [showBlogMsg, setShowBlogMsg] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const cards = [
    { href: "#about", label: "About", icon: User, color: "from-blue-400 to-blue-600" },
    { href: "#projects", label: "Projects", icon: Briefcase, color: "from-purple-400 to-purple-600" },
    { href: "#contact", label: "Contact", icon: Mail, color: "from-green-400 to-green-600" },
    {
      href: "/svivek_webdeveloper_cv.pdf",
      label: "Resume",
      icon: FileText,
      external: true,
      color: "from-orange-400 to-orange-600"
    },
    {
      href: "#blog",
      label: "Blog",
      icon: Rss,
      wide: true,
      onClick: () => setShowBlogMsg(true),
      color: "from-pink-400 to-pink-600"
    },
    {
      href: "https://github.com/saivivek45",
      label: "GitHub",
      icon: Github,
      external: true,
      color: "from-gray-400 to-gray-600"
    },
    {
      href: "https://linkedin.com/in/saivivek33",
      label: "LinkedIn",
      icon: Linkedin,
      external: true,
      color: "from-blue-500 to-blue-700"
    },
    {
      href: "#experience",
      label: "Experience",
      icon: BadgeInfo,
      wide: true,
      color: "from-indigo-400 to-indigo-600"
    },
    {
      href: "/card",
      label: "My Card",
      icon: User,
      color: "from-teal-400 to-teal-600"
    },
    {
      href: "#education",
      label: "Education",
      icon: Book,
      color: "from-yellow-400 to-yellow-600"
    },
  ];

  // Floating particles animation
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    duration: Math.random() * 20 + 10,
  }));

  return (
    <section
      id="hero"
      className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white flex items-center justify-center p-8 overflow-hidden"
    >
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute bg-blue-500 rounded-full opacity-20"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, 50, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Dynamic gradient overlay based on mouse position */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(124, 58, 237, 0.15), transparent 40%)`,
        }}
      />

      {/* Glow modal if blog clicked */}
      <AnimatePresence>
        {showBlogMsg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-3xl shadow-2xl text-center max-w-md border border-purple-500/30 backdrop-blur-md"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="mb-4 flex justify-center"
              >
                <Sparkles className="w-8 h-8 text-purple-400" />
              </motion.div>
              <p className="text-purple-400 mb-2 text-sm font-medium">📝 Blog Coming Soon</p>
              <h2 className="text-xl font-bold mb-4 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
                I'm still crafting amazing content!
              </h2>
              <p className="text-gray-400 text-sm mb-6">
                Stay tuned for insights about web development, coding tips, and tech adventures.
              </p>
              <button
                className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-all duration-300 text-sm font-medium shadow-lg hover:shadow-purple-500/25 transform hover:scale-105"
                onClick={() => setShowBlogMsg(false)}
              >
                Got it!
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Grid */}
      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl w-full z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Enhanced Bio Box */}
        <motion.div
          className="col-span-2 row-span-2 bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden group border border-gray-700/30"
          whileHover={{ scale: 1.02, rotateY: 5 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          {/* Animated gradient background */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Floating icons */}
          <div className="absolute top-4 right-4 opacity-20">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Code className="w-6 h-6 text-blue-400" />
            </motion.div>
          </div>
          
          <div className="absolute bottom-4 left-4 opacity-20">
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            >
              <Zap className="w-6 h-6 text-purple-400" />
            </motion.div>
          </div>

          <div className="relative flex items-center gap-6 z-10">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src="/images/hero.png"
                alt="Avatar"
                className="w-28 h-28 rounded-full object-cover border-4 border-purple-400/30 shadow-2xl"
              />
            </motion.div>
            <div>
              <motion.h2 
                className="text-4xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              >
                Vandrangi Sai Vivek
              </motion.h2>
              <motion.p 
                className="text-gray-300 text-lg mt-2 font-medium"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                Full-Stack Developer & AI Enthusiast
              </motion.p>
              <motion.p 
                className="text-gray-400 text-sm mt-1 flex items-center gap-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                Based in India
              </motion.p>
            </div>
          </div>

          {/* Floating badge */}
          <motion.div
            className="absolute top-6 right-6 bg-gradient-to-r from-purple-500 to-pink-500 px-3 py-1 rounded-full text-xs font-medium shadow-lg"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            Available for work
          </motion.div>
        </motion.div>

        {/* Enhanced Cards */}
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
              onClick={handleClick}
              className={`${
                card.wide ? "col-span-2" : ""
              } group bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl rounded-2xl p-6 flex flex-col items-center justify-center text-center hover:from-gray-800/90 hover:to-gray-700/90 transition-all duration-300 relative overflow-hidden border border-gray-700/30 hover:border-purple-400/50`}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                delay: 0.2 + i * 0.1, 
                duration: 0.6,
                type: "spring",
                stiffness: 200 
              }}
              whileHover={{ 
                scale: 1.05, 
                rotateY: 5,
                boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`} />
              
              {/* Animated icon */}
              <motion.div 
                className="mb-3 relative z-10"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <IconComponent className="w-8 h-8 text-white group-hover:text-purple-300 transition-colors duration-300" />
              </motion.div>
              
              {/* Enhanced label */}
              <motion.span 
                className="font-semibold relative flex items-center gap-2 text-lg z-10"
                whileHover={{ scale: 1.05 }}
              >
                {card.label}
                <ArrowRight className="w-4 h-4 text-purple-400 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-300" />
              </motion.span>
              
              {/* Sparkle effect on hover */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute top-2 right-2 w-1 h-1 bg-white rounded-full animate-ping" />
                <div className="absolute bottom-2 left-2 w-1 h-1 bg-purple-400 rounded-full animate-ping" style={{ animationDelay: "0.5s" }} />
              </motion.div>
            </motion.a>
          );
        })}
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gradient-to-b from-purple-400 to-pink-400 rounded-full mt-2 animate-pulse" />
        </div>
      </motion.div>
    </section>
  );
};
