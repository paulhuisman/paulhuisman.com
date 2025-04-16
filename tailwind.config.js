module.exports = {
  content: [
    './src/**/*.{astro,html,js,ts,jsx,tsx}', // Add paths to your Astro files here
  ],
  theme: {
    colors: {
      primary: '#649572',
      secondary: '#efdb25',
      accent: '#38b2ac',
      'gray-dark': '#151516',
      light: '#edf2f7',
      hover: '#2b6cb0',
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      animation: {
        pulser: 'pulser 2s infinite',
      },
      keyframes: {
        pulser: {
          '0%, 100%': {
            opacity: '0.2',
          },
          '50%': {
            opacity: '1',
          },
        },
      },
    },
  },
  plugins: [],
};
