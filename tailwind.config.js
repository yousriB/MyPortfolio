/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,html}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Courier New', 'monospace'],
      },
      colors: {
        brand: {
          50: '#f4f6fa',
          100: '#eaedf4',
          200: '#d0d7e5',
          300: '#a5b5cf',
          400: '#738cb3',
          500: '#4f6d99',
          600: '#3c547c',
          700: '#314465',
          800: '#2c3a53',
          900: '#283347',
          950: '#0c0e12',
        },
      },
    },
  },
  plugins: [
    // Adds a `light:` variant so utilities like `light:bg-slate-50` work
    // whenever the <html> element carries the `light` class.
    function ({ addVariant }) {
      addVariant('light', '.light &');
    },
  ],
};
