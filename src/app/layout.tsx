import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import './globals.css';
import TypekitLoader from "@/app/TypekitLoader";


const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'デジハリってんなあ展',
  description: '神は死んだ',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <TypekitLoader />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
