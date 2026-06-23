/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: '#F5A623', light: '#FFF3DC', dark: '#E09310' },
        income: '#22C55E',
        expense: '#EF4444',
        purple: { DEFAULT: '#8B5CF6', light: '#EDE9FE' },
        pink: { DEFAULT: '#EC4899', light: '#FCE7F3' },
        blue: { DEFAULT: '#3B82F6', light: '#DBEAFE' },
        teal: { DEFAULT: '#14B8A6', light: '#CCFBF1' },
      },
      fontFamily: { sans: ['Inter', 'system-ui', 'sans-serif'] },
      boxShadow: {
        card: '0 4px 24px rgba(0,0,0,0.06)',
        hover: '0 8px 32px rgba(0,0,0,0.12)',
      },
    },
  },
  plugins: [],
}
