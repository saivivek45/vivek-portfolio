import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-white py-6 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left: Name or Brand */}
        <p className="text-sm text-gray-400 text-center md:text-left">
          © {new Date().getFullYear()} Sai Vivek Reddy. All rights reserved.
        </p>

        {/* Right: Social Links */}
        <div className="flex gap-5 text-xl">
          <a
            href="https://github.com/saivivek45"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/saivivek33"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:saivivekvandrangi@gmail.com"
            className="hover:text-purple-400 transition"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
};
