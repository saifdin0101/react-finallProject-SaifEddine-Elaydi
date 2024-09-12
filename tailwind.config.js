/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'blog': "url('./images/carousel2.jpg')",
        'blog2': "url('./images/blog-01.jpg')",
        
      }
    },
  },
  plugins: [],
}