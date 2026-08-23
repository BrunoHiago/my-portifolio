/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        heading: ["var(--font-outfit)", "system-ui", "sans-serif"]
      },
      colors: {
        brand: {
          500: "#F59E0B", // Amber 500
          600: "#D97706", // Amber 600
          mint: "#10B981"  // Emerald/Mint 500
        }
      }
    }
  },
  plugins: []
};

export default config;


