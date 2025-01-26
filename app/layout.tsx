import '@/app/ui/globals.css'
import { CartProvider } from './context/cart';
import Navbar from './ui/navbar';
import Footer from './ui/footer';

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
          <Navbar />
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
