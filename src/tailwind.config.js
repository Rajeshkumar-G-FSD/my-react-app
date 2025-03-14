/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: "class", // Enable dark mode
    theme: {
      extend: {
        colors: {
          primary: "#4F46E5", // Custom primary color
          secondary: "#10B981", // Custom secondary color
          background: "#F9FAFB", // Custom background color
          darkBackground: "#1F2937", // Dark mode background
        },
      },
    },
    plugins: [],
  };