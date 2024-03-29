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
      // dancingScript: ['var(--font-dancing-script)'],
      // sacramento: ['var(--font-sacramento)'],
      // allura: ['var(--font-allura)'],
      // saint: ['var(--font-saint-delafield)'],
      // von: ['var(--font-von-muellerhoff)'],
      // allison: ['var(--font-allison)'],
      // madi: ['var(--font-madi)'],
      // qwigley: ['var(--font-qwigley)'],
      // fuggles: ['var(--font-fuggles)'],
    },
    extend: {
      colors: {
        lightColor: '#FFFBF5',
        darkColor: '#F7EFE5',
        blueColor: '#BFC9CA',
        greenColor: '#b2d8d8',
        // darkGreenColor: '#008080',
        darkGreenColor: '#006666',
      },
      backgroundImage: {
        image2: "url('/Image2.avif')",
      },
    },
  },
  plugins: [],
};
export default config;
