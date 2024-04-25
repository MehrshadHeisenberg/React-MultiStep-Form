/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        "primary-blue-1": "hsl(var(--primary-blue-1))",
        "primary-blue-2": "hsl(var(--primary-blue-2))",
        "primary-blue-3": "hsl(var(--primary-blue-3))",
        "primary-blue-4": "hsl(var(--primary-blue-4))",

        "primary-red-1": "hsl(var(--primary-red-1))",

        "neutral-gray-1": "hsl(var(--neutral-gray-1))",
        "neutral-gray-2": "hsl(var(--neutral-gray-2))",
        "neutral-gray-3": "hsl(var(--neutral-gray-3))",
        "neutral-gray-4": "hsl(var(--neutral-gray-4))",
      },
      fontFamily: {
        ubuntu: "Ubuntu",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
};
