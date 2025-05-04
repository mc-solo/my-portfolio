// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      // Custom colors for a monochromatic black and gray theme
      colors: {
        darkblue: '#000000',    // Pure black
      },
    },
    fontFamily: {
      sharetech: ['"Share Tech"', 'sans-serif'],
    },
  },
  plugins: [],
}
