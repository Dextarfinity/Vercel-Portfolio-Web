// tailwind.config.js
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}', // Ensure Tailwind scans all relevant files
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1d4ed8', // Your custom primary color
      },
      fontFamily: {
        Oswald: ['Oswald', 'sans-serif'],
        Inter: ['Inter', 'sans-serif'],
        Poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
