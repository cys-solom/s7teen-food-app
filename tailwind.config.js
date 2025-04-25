/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--primary-color))',
        'primary-light': 'rgba(var(--primary-color), 0.1)',
        secondary: 'rgb(var(--secondary-color))',
        'secondary-light': 'rgba(var(--secondary-color), 0.1)',
        accent: 'rgb(var(--accent-color))',
        success: 'rgb(var(--success-color))',
        warning: 'rgb(var(--warning-color))',
        error: 'rgb(var(--error-color))',
      },
      fontFamily: {
        tajawal: ['Tajawal', 'sans-serif'],
        cairo: ['Cairo', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        changa: ['Changa', 'sans-serif'], // خط Changa
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
      },
    },
  },
  plugins: [],
};