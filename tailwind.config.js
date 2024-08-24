/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: "hsl(var(--primary-dark-channel) / <alpha-value>)",
          meduim: "hsl(var(--primary-medium-channel) / <alpha-value>)",
          light: "hsl(var(--primary-light-channel) / <alpha-value>)",
        },
      },
    },
  },
  rippleui: {
    themes: [
      {
        themeName: "light",
        colorScheme: "light",
        prefersColorScheme: true,
        colors: {
          primary: "#736226",
          // backgroundPrimary: "#736226",
        },
      },
    ],
  },
  plugins: [require("rippleui")],
};
