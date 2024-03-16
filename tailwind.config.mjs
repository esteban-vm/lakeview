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
    extend: { fontFamily: { lora: ['var(--font-lora)'] } },
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
      // Grey Colors
      'grey-1-light': 'rgb(var(--grey-1-light))',
      'grey-1-dark': 'rgb(var(--grey-1-dark))',
      'grey-2-light': 'rgb(var(--grey-2-light))',
      'grey-2-dark': 'rgb(var(--grey-2-dark))',
      'grey-3-dark': 'rgb(var(--grey-3-dark))',
      // Other Colors
      'color-white': 'rgb(var(--color-white))',
      'color-black': 'rgb(var(--color-black))',
      'color-brown': 'rgb(var(--color-brown))',
      'color-orange': 'rgb(var(--color-orange))',
      'color-blue': 'rgb(var(--color-blue))',
    },
  },
}

export default tailwindConfig
