import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        lightColor: '#FFFBF5',
        darkColor: '#F7EFE5',
        blueColor: '#BFC9CA',
        greenColor: '#b2d8d8',
      },
      backgroundImage: {
        image2: "url('/image2.avif')",
      },
    },
  },
  plugins: [],
};
export default config;
