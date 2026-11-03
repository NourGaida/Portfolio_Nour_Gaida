import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#fdfcf9',      // warm off-white background
        sidebar: '#f5f5f1',    // left column
        ink: '#1f2328',        // main text
        muted: '#5b6470',      // secondary text
        line: '#e4e4de',       // thin separators
        accent: '#0b57a4',     // single subtle accent
        accentSoft: '#e6edf6', // active nav pill / hover
      },
      fontFamily: {
        serif: ['"Source Serif 4"', 'Georgia', 'Cambria', 'serif'],
        sans: ['"Source Sans 3"', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [typography],
};
