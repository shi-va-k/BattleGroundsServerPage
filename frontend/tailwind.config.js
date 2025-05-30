/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
           fontFamily: {
        rajdhani: ['Rajdhani', 'sans-serif'],
      },
    },
  },
  plugins: [],
}


// module.exports = {
//   theme: {
//     extend: {
//       fontFamily: {
//         orbitron: ['Orbitron', 'sans-serif'],
//         rajdhani: ['Rajdhani', 'sans-serif'],
//         tech: ['Share Tech Mono', 'monospace'],
//         anton: ['Anton', 'sans-serif'],
//       },
//     },
//   },
// };