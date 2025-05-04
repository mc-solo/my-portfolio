module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      // my ustom colors for a monochromatic black and gray theme
      colors: {
        darkblue: '#000000', 
      },
    },
    fontFamily: {
      sharetech: ['"Share Tech"', 'sans-serif'],
    },
  },
  plugins: [],
}
