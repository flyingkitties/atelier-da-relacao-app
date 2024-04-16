import type { Metadata } from 'next';
import { Suspense } from 'react';
import { Inter, Libre_Franklin } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Analytics } from '@vercel/analytics/react';
import FacebookPixel from '@/components/FacebookPixel';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });
const libreFranklin = Libre_Franklin({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-libre-franklin',
});

const myFont = localFont({
  src: './Gistesy.woff',
  display: 'swap',
  variable: '--font-gistesy',
});

export const metadata: Metadata = {
  title: 'Atelier da Relação',
  description:
    'Atelier da Relação - Consulta de Psicologia e Psicoterapia de Crianças - Consulta de Psicologia e Psicoterapia de Adolescentes - Consulta de Psicologia e Psicoterapia de Adultos - Avaliação Psicológica - Lisboa - atelier da relacao',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          id="gtm"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5PR8TRDX');`,
          }}
        ></Script>
      </head>
      <body
        className={`${inter.className} ${libreFranklin.variable} ${myFont.variable}`}
      >
        {children}
        <FacebookPixel />
        <SpeedInsights />
        <Analytics debug={false} />
      </body>
    </html>
  );
}
