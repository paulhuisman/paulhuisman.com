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
      'forest-green': '2e6f40',
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      animation: {
        pulser: 'pulser 2s infinite',
        wiggle: 'wiggle 1s ease-in-out infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
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
