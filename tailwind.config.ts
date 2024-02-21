import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      franklin: ['var(--font-libre-franklin)'],
      gistesy: ['var(--font-gistesy)'],
    },
    extend: {
      colors: {
        lightColor: '#FFFBF5',
        darkColor: '#F7EFE5',
        blueColor: '#BFC9CA',
        greenColor: '#b2d8d8',
      },
      backgroundImage: {
        image2: "url('/Image2.avif')",
      },
    },
  },
  plugins: [],
};
export default config;
