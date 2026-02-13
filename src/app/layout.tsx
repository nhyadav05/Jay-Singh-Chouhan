import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

// Metadata for Jay Singh
export const metadata: Metadata = {
  title: 'Jay Singh Chouhan | React Native Developer',
  description:
    'Portfolio of Jay Singh Chouhan — React Native Developer. Mobile apps, real-time chat, fitness & e-commerce solutions.',
  keywords: [
    'Jay Singh Chouhan',
    'React Native',
    'Mobile Developer',
    'Redux Toolkit',
    'Socket.IO',
    'Portfolio',
  ],
  authors: [{ name: 'Jay Singh Chouhan' }],
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
};

export const viewport = 'width=device-width, initial-scale=1, maximum-scale=1';

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        {/* theme-color default (will be updated on client by ThemeToggle) */}
        <meta name="theme-color" content="#2563eb" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />

        <main>
          {children}
        </main>

        {/* <Footer /> */}
      </body>
    </html>
  );
}
