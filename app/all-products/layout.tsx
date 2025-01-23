import '@/app/ui/globals.css'


// export const experimental_ppr = true;
export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-full">
            {children}
        </div>
    );
}