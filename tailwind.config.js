/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/Component/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#FFC400",
        darkBlue: "#0B0B45",
        midnightBlue: "#3B4569",
        brandYellow: "#FFE304",
        lightBlue: "#E0F2F7", // A very light shade of blue
        
      },
    },
  },
  plugins: [],
};


export default config;