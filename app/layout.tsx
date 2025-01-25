import '@/app/ui/globals.css'
import { CartProvider } from './context/cart';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className='bg-gray-200'
      >
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
