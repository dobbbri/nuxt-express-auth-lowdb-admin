module.exports = {
  purge: [
    'node_modules/tv-*/dist/tv-*.umd.min.js',
    'components/**/*.vue',
    'layouts/**/*.vue',
    'pages/**/*.vue',
    'plugins/**/*.js',
    'nuxt.config.js'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000',
      white: '#fff',
      primary: {
        500: '#e53e3e'
      },
      indigo: {
        500: '#6366f1',
        600: '#4f46e5',
        700: '#4338ca'
      },
      green: {
        500: '#22c55e',
        600: '#16a34a',
        700: '#15803d'
      },
      red: {
        500: '#ef4444',
        600: '#dc2626',
        700: '#b91c1c'
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
      }
    },
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: [require('@tailwindcss/forms')]
}
