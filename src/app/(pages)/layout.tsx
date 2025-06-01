import type { Metadata } from 'next';
import { Red_Hat_Display } from 'next/font/google';

import NextTopLoader from 'nextjs-toploader';

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

        <link rel="icon" href="/logo.png" type="image/png" sizes="24x24" />
      </head>

      <body
        className={`${redHatDisplay.className} bg-color-background text-gray-950`}
        suppressHydrationWarning
      >
        <NextTopLoader
          color="#5644f3"
          height={4}
          showSpinner={false}
          speed={500}
        />

        <Header />
        <Content>{children}</Content>
        <Footer />

        <Toast />
      </body>
    </html>
  );
}
