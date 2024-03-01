import type { Metadata } from 'next';
import { Inter, Libre_Franklin } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] });
const libreFranklin = Libre_Franklin({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-libre-franklin',
});
const myFont = localFont({
  src: './my-font.woff2',
  // display: 'swap',
  variable: '--font-gistesy',
});

export const metadata: Metadata = {
  title: 'Atelier da Relação',
  description:
    ' Atelier da Relação - Consulta de Psicologia e Psicoterapia de Crianças - Consulta de Psicologia e Psicoterapia de Adolescentes - Consulta de Psicologia e Psicoterapia de Adultos - Avaliação Psicológica - Lisboa',
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
        <Analytics />
      </body>
    </html>
  );
}
