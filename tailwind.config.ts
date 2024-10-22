import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class", // No need for array unless more control is needed
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        text: 'var(--text)',
        background: 'var(--background)',
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        accent: 'var(--accent)',
        border: 'var(--border)',
      },
      fontSize: {
				sm: '0.707rem',
				base: '1rem',
				xl: '1.414rem',
				'2xl': '1.999rem',
				'3xl': '2.827rem',
				'4xl': '3.997rem',
				'5xl': '5.652rem',
      },
      fontFamily: {
        lora: ['Lora'],
        source: ['Source Serif 4'],
      },
      fontWeight: {
        normal: '400',
        bold: '700',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
