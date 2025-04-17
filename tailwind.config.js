// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      // Custom colors for a futuristic green and dark blue theme
      colors: {
        darkblue: '#001f3f',    // A deep, dark blue
        neonGreen: '#39ff14',   // A bright neon green accent
      },
    },
    fontFamily: {
      sharetech: ['"Share Tech"', 'sans-serif'],
    },
  },
  plugins: [],
}
