import tailwindCSSTouch from 'tailwindcss-touch'

/** @type {import("tailwindcss").Config} */
const tailwindConfig = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/views/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/assets/styles/*',
  ],
  plugins: [tailwindCSSTouch()],
  future: { hoverOnlyWhenSupported: true },
  theme: {
    extend: {
      animation: {
        fade1: 'fade1 10s infinite',
        fade2: 'fade2 10s infinite',
        fade3: 'fade3 10s infinite',
        fade4: 'fade4 10s infinite',
      },
      fontFamily: {
        lora: 'var(--font-lora)',
        satisfy: 'var(--font-satisfy)',
      },
      colors: {
        // Primary Colors
        'primary-light': 'rgb(var(--primary-light))',
        'primary-dark': 'rgb(var(--primary-dark))',
        // Secondary Colors
        'secondary-1-light': 'rgb(var(--secondary-1-light))',
        'secondary-1-dark': 'rgb(var(--secondary-1-dark))',
        'secondary-2-light': 'rgb(var(--secondary-2-light))',
        'secondary-2-dark': 'rgb(var(--secondary-2-dark))',
        'secondary-3-light': 'rgb(var(--secondary-3-light))',
        'secondary-3-dark': 'rgb(var(--secondary-3-dark))',
        'secondary-4-light': 'rgb(var(--secondary-4-light))',
        'secondary-4-dark': 'rgb(var(--secondary-4-dark))',
        // Grey Colors
        'grey-1-light': 'rgb(var(--grey-1-light))',
        'grey-1-dark': 'rgb(var(--grey-1-dark))',
        'grey-2-light': 'rgb(var(--grey-2-light))',
        'grey-2-dark': 'rgb(var(--grey-2-dark))',
        'grey-3-dark': 'rgb(var(--grey-3-dark))',
      },
    },
    keyframes: {
      fade1: {
        '0%, 100%': { opacity: 1 },
        '25%, 50%, 75%': { opacity: 0 },
      },
      fade2: {
        '0%, 50%, 75%, 100%': { opacity: 0 },
        '25%': { opacity: 1 },
      },
      fade3: {
        '0%, 25%, 75%, 100%': { opacity: 0 },
        '50%': { opacity: 1 },
      },
      fade4: {
        '0%, 25%, 50%, 100%': { opacity: 0 },
        '75%': { opacity: 1 },
      },
    },
  },
}

export default tailwindConfig
