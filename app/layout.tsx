import { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/components/header';
import Footer from '@/components/footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "Who's Hungry",
  description: 'A platform to find your next meal',
  icons: {
    icon: [
      { url: '/logo-icon.png', type: 'image/png', sizes: '32x32' },
      { url: '/logo-icon.png', type: 'image/png', sizes: '192x192' },
    ],
    shortcut: [{ url: '/logo-icon.png', type: 'image/png' }],
    apple: [{ url: '/logo-icon.png', type: 'image/png' }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white`}>
        <Header />
        <main className="min-h-[calc(100vh-6rem)]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
