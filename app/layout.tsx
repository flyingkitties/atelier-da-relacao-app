import type { Metadata } from 'next';
import {
  Allison,
  Allura,
  Dancing_Script,
  Fuggles,
  Herr_Von_Muellerhoff,
  Inter,
  Libre_Franklin,
  Mrs_Saint_Delafield,
  Ms_Madi,
  Qwigley,
  Sacramento,
} from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] });
const libreFranklin = Libre_Franklin({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-libre-franklin',
});

// const dancingScript = Dancing_Script({
//   subsets: ['latin'],
//   variable: '--font-dancing-script',
// });

// const allura = Allura({
//   subsets: ['latin'],
//   display: 'swap',
//   weight: '400',
//   variable: '--font-allura',
// });

// const saint = Mrs_Saint_Delafield({
//   subsets: ['latin'],
//   display: 'swap',
//   weight: '400',
//   variable: '--font-saint-delafield',
// });

// const von = Herr_Von_Muellerhoff({
//   subsets: ['latin'],
//   display: 'swap',
//   weight: '400',
//   variable: '--font-von-muellerhoff',
// });
// const allison = Allison({
//   subsets: ['latin'],
//   display: 'swap',
//   weight: '400',
//   variable: '--font-allison',
// });
// const madi = Ms_Madi({
//   subsets: ['latin'],
//   display: 'swap',
//   weight: '400',
//   variable: '--font-madi',
// });
// const qwigley = Qwigley({
//   subsets: ['latin'],
//   display: 'swap',
//   weight: '400',
//   variable: '--font-qwigley',
// });
// const fuggles = Fuggles({
//   subsets: ['latin'],
//   display: 'swap',
//   weight: '400',
//   variable: '--font-fuggles',
// });
const myFont = localFont({
  src: './Gistesy.woff',
  display: 'swap',
  variable: '--font-gistesy',
});

export const metadata: Metadata = {
  title: 'Atelier da Relação',
  description:
    ' Atelier da Relação - Consulta de Psicologia e Psicoterapia de Crianças - Consulta de Psicologia e Psicoterapia de Adolescentes - Consulta de Psicologia e Psicoterapia de Adultos - Avaliação Psicológica - Lisboa - atelier da relacao',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${libreFranklin.variable} ${myFont.variable}`}
    >
      <body className={inter.className}>
        {children}
        <SpeedInsights />
        <Analytics debug={false} />
      </body>
    </html>
  );
}
