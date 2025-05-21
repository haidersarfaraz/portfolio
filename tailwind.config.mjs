/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx}",
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
      extend: {
        colors: {
          lightHover: "#fcf4ff",
          darkHover: "#2a004a",
          darkTheme: "#11001f",
        },
        fontFamily: {
          outfit: ["Outfit", "sans-serif"],
          ovo: ["Ovo", "serif"],
        },
      },
    },
    darkMode:"selector",
    plugins: [],
  };
  