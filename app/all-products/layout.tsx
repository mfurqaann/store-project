import '@/app/ui/globals.css'
import Navbar from '../ui/navbar';
import Footer from '../ui/footer';


// export const experimental_ppr = true;
export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <Navbar />
            <div className="w-full">
                {children}
            </div>
            <Footer />
        </div>

    );
}