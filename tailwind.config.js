module.exports = {
  purge: ['components/**/*.vue', 'layouts/**/*.vue', 'pages/**/*.vue', 'plugins/**/*.js', 'nuxt.config.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000',
      white: '#fff',
      primary: { 500: '#e53e3e' },
      indigo: {
        // 50: '#eef2ff',
        // 100: '#e0e7ff',
        // 200: '#c7d2fe',
        // 300: '#a5b4fc',
        // 400: '#818cf8',
        500: '#6366f1',
        600: '#4f46e5',
        700: '#4338ca'
        // 800: '#3730a3',
        // 900: '#312e81'
      },
      gray: {
        50: '#f8fafc',
        100: '#f1f5f9',
        200: '#e2e8f0',
        300: '#cbd5e1',
        400: '#94a3b8',
        500: '#64748b',
        600: '#475569',
        700: '#334155',
        800: '#1e293b',
        900: '#0f172a'
      },
      green: {
        // 50: '#f0fdf4',
        // 100: '#dcfce7',
        // 200: '#bbf7d0',
        // 300: '#86efac',
        // 400: '#4ade80',
        500: '#22c55e',
        600: '#16a34a',
        700: '#15803d'
        // 800: '#166534',
        // 900: '#14532d'
      }
    },
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: [require('@tailwindcss/forms')]
}
