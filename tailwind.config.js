export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
      animation: {
        pulse: "pulse 2s infinite",
        float: "float 3s ease-in-out infinite",
        wiggle: "wiggle 0.5s ease-in-out",
        fadeIn: "fadeIn 1.2s ease-in forwards",
      },
       fontFamily: {
        serif: ['EB Garamond', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
};
