/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'glowImage': "url('/path/to/glow-image.png')",
        'blobImage': "url('/path/to/blob-image.png')",
      },
    },
  },
  plugins: [],
}

