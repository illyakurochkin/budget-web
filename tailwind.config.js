/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      // 'background-primary': '#2B1F31',
      'background-primary': '#1C2021',
      // 'background-secondary': '#413D65',
      'background-secondary': '#1C2021',
      'text-primary': '#54ACD2',
      'text-secondary': '#3D8EB9',
      'green': '#2CC990',
      'red': '#E74C3C'
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
      serif: ['Poppins', 'serif'],
    },
    extend: {},
  },
}
