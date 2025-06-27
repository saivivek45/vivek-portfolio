"use client";

export default function ProfileCard() {
  return (
    <div
      className="bg-[#1a1a1a] border border-[#2f2f2f] shadow-2xl w-full max-w-md px-10 py-8 text-center rounded-xl 
      transition-transform duration-300 ease-in-out hover:scale-[1.02] hover:rotate-1 relative"
    >
      <div className="absolute -inset-[2px] rounded-xl pointer-events-none z-[-1] bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 blur-sm opacity-30"></div>

      <h1 className="text-white text-2xl tracking-wide font-serif">Sai Vivek Reddy</h1>
      <p className="text-[#cfcfcf] text-sm mt-1 font-serif tracking-wider italic">
        Full Stack Developer
      </p>

      <div className="mt-6 space-y-1 text-sm font-mono text-[#bbbbbb] tracking-wide">
        <p>Python Developer</p>
        <p>IIIT Kottayam</p>
        <p>Kerala, India</p>
        <p>saivivekvandrangi@gmail.com</p>
      </div>

      <div className="mt-6 flex justify-center space-x-4">
        <a
          href="https://github.com/saivivek45"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#888] hover:text-white transition"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/saivivek33/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#888] hover:text-white transition"
        >
          LinkedIn
        </a>
        <a
          href="mailto:saivivekvandrangi@gmail.com"
          className="text-[#888] hover:text-white transition"
        >
          Email
        </a>
      </div>
    </div>
  );
}
