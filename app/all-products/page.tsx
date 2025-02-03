import Products from "@/app/ui/products";

export default async function Page() {
    const data = await fetch('https://fakestoreapi.com/products', {
        cache: 'force-cache'
    });
    const products = await data.json();

    return (
        <div className="container mx-auto">
            <h2 className="text-center text-3xl dark:text-neutral-200">PRODUCTS</h2>
            <Products products={products} />
        </div>
    )
}