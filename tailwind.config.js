export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: { sans: ['Manrope', 'system-ui', 'sans-serif'], display: ['"Space Grotesk"', 'system-ui', 'sans-serif'] },
      colors: { accent: { DEFAULT: '#0f8b8d', dark: '#3ed6d8' } },
    },
  },
  plugins: [],
}
