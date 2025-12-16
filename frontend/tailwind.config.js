/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./docs/**/*.{md,mdx}", "./blog/**/*.{md,mdx}"],
  theme: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    preflight: false, // Create-React-App / Docusaurus usually handle base styles
  },
  darkMode: ['class', '[data-theme="dark"]'], // Support Docusaurus dark mode
};
