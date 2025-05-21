/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sofia-sans)", "sans-serif"], // Use Sofia Sans as the primary sans-serif
        montserrat: ["var(--font-montserrat)", "sans-serif"], // Add Montserrat
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      // Add original site colors here for easier use with Tailwind if needed
      colors: {
        "endetect-green": "#169150",
        "endetect-green-light": "#25c16f",
        "endetect-green-dark": "#03632b",
        "endetect-orange": "#e56903",
        "endetect-orange-dark": "#b0550b",
        "endetect-blue-dark": "#1a3446",
        // Add other key colors from the original site
      },
      keyframes: {
        shake: {
          '10%, 90%': { transform: 'translate3d(-1px, 0, 0)' },
          '20%, 80%': { transform: 'translate3d(2px, 0, 0)' },
          '30%, 50%, 70%': { transform: 'translate3d(-4px, 0, 0)' },
          '40%, 60%': { transform: 'translate3d(4px, 0, 0)' },
        }
      },
      animation: {
        'shake': 'shake 0.82s cubic-bezier(.36, .07, .19, .97) both',
      }
    },
  },
  plugins: [],
};
