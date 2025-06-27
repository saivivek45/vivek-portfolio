"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useActiveSection } from "@/hooks/useActiveSessionHook";
import Aurora from "@/components/ui/Aurora";

export const Navbar = () => {
  const sectionIds = ["hero","about", "projects", "contact"];
  const active = useActiveSection(sectionIds);
  const [showNav, setShowNav] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Show navbar when scrolled beyond hero
  useEffect(() => {
    const handleScroll = () => {
      setShowNav(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <AnimatePresence>
      {showNav && (
        <motion.nav
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed top-0 left-0 w-full h-16 px-6 bg-white/10 backdrop-blur-md text-white flex justify-between items-center z-50 overflow-hidden"
        >
          {/* Aurora bg */}
          <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
            <Aurora />
          </div>

          {/* Logo */}
          <div className="relative z-10 font-mono text-xl">
            <h3 className="font-mono text-xl text-white">&lt;Vivek /&gt;</h3>
          </div>

          {/* Desktop Links */}
          <ul className="hidden sm:flex gap-10 items-center relative z-10">
            {sectionIds.map((id) => (
              <li key={id}>
                <motion.a
                  href={`#${id}`}
                  whileHover={{ scale: 1.1 }}
                  className={`transition-colors duration-200 ${
                    active === id ? "text-blue-400 font-bold" : "text-white"
                  }`}
                >
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </motion.a>
              </li>
            ))}
          </ul>

          {/* Mobile Burger */}
          <div className="relative z-10 sm:hidden">
            <button onClick={toggleMenu} className="focus:outline-none">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.ul
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute top-16 left-0 w-full bg-black/80 backdrop-blur-lg flex flex-col items-center gap-6 py-6 sm:hidden z-40"
              >
                {sectionIds.map((id) => (
                  <li key={id}>
                    <a
                      href={`#${id}`}
                      onClick={() => setIsOpen(false)}
                      className={`text-lg transition-colors duration-200 ${
                        active === id ? "text-blue-400 font-bold" : "text-white"
                      }`}
                    >
                      {id.charAt(0).toUpperCase() + id.slice(1)}
                    </a>
                  </li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};
