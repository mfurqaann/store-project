'use client'

import '@/app/ui/globals.css'
import { CartProvider } from './context/cart';
import Navbar from './ui/navbar';
import Footer from './ui/footer';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [darkMode, setDarkMode] = useState('light')
  const pathname = usePathname();
  const hideNavbar = pathname === '/login';

  return (
    <html lang="en" className={darkMode}>
      <body className='bg-gray-200 dark:bg-slate-800'
      >
        <CartProvider>
          {!hideNavbar && <Navbar />}
          {children}
          <Footer setDarkMode={setDarkMode} />
        </CartProvider>
      </body>
    </html>
  );
}
