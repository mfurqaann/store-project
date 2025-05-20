import Products from "@/app/ui/products";
import { Metadata } from "next";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
    title: 'Products | Fake Online Store',
}

export default async function Page() {
    await new Promise((resolve) => setTimeout(resolve, 2000))
    const data = await fetch('https://fakestoreapi.com/products', {
        cache: 'force-cache'
    });
    const products = await data.json();
    const cookieStore = cookies();
    const isToken = (await cookieStore).get("token");

    if (!isToken) {
        redirect('/login')
    }

    if (typeof window !== "undefined") {
        try {
            localStorage.getItem("token");
        } catch (error) {
            console.error("Gagal menyimpan token:", error);
        }
    }

    return (
        <div className="container mx-auto">
            <h2 className="text-center text-3xl dark:text-neutral-200">PRODUCTS</h2>
            <Products products={products} />
        </div>
    )
}