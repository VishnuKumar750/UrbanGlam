/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      screens: {
        'xs': '375px',    // Extra small devices
        'sm': '640px',    // Small devices (default)
        'md': '768px',    // Medium devices (default)
        'lg': '1024px',   // Large devices (default)
        'xl': '1280px',   // Extra large devices (default)
        '2xl': '1536px',  // 2x Extra large devices (default)
      },
      maxWidth: {
        '2xl': '1536px'
      }
    },
  },
  plugins: [],
}

