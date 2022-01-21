module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'Lato': ['red-hat', 'sans-serif'],
       'sans': ['Helvetica', 'Arial', 'sans-serif'],
    },
    extend: {
       backgroundImage: {
      'bg-desktop': "url('/images/pattern-background-desktop.svg')",
      'bg-mobile': "url('/images/pattern-background-mobile.svg')",      }
    },
  },
  plugins: [],
};
