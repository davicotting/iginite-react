/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Baloo: ['"Baloo 2"', 'sans-serif'],
        Inter: ['Inter', 'sans-serif'],
      },
      colors: {
        yellow_dark: "#C47F17",
        yellow: "#DBAC2C",
        yellow_light: "#F1E9C9",

        purple_dark: "#4B2995",
        purple: "#8047F8",
        purple_light: "#EBE5F9",

        base_title: "#272221",
        base_subtitle: "#403937",
        base_text: "#574F4D",
        base_label: "#8D8686",
        base_hover: "#D7D5D5",
        base_button: "#E6E5E5",
        base_input: "#EDEDED",
        base_card: "#F3F2F2",
        background: "#FAFAFA",
        white: "#fff",
      }
    },
  },
  plugins: [],
}