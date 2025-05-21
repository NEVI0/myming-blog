import type { Metadata } from 'next';
import { Red_Hat_Display } from 'next/font/google';

import { Header, Content, Footer } from '@app/components/common';
import { Toast } from '@app/components/ui';

import './globals.css';

const redHatDisplay = Red_Hat_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'MyMind Blog',
  description: 'Blog para compartilhamento de conhecimento',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        />
      </head>

      <body
        className={`${redHatDisplay.className} bg-color-background text-text`}
        suppressHydrationWarning
      >
        <Header />
        <Content>{children}</Content>
        <Footer />

        <Toast />
      </body>
    </html>
  );
}
