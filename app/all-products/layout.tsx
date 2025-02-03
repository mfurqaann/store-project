import '@/app/ui/globals.css'


// export const experimental_ppr = true;
export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <div className="w-full min-h-screen">
                {children}
            </div>
        </div>

    );
}