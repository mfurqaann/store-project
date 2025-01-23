import Image from "next/image";
import Navbar from "../ui/navbar"
import Link from "next/link";
import Footer from "../ui/footer";


export default async function Page() {
    const data = await fetch('https://fakestoreapi.com/products');
    const products = await data.json();

    function truncateString(title: string, maxLength: number): string {
        if (title.length > maxLength) {
            return title.slice(0, maxLength) + '...'; // Memotong string dan menambahkan '...'
        }
        return title; // Jika tidak perlu dipotong, kembalikan string asli
    }

    return (
        <div>
            <Navbar />
            <div className="container mx-auto">
                <h2 className="text-center">Products</h2>
                <div className="grid grid-cols-1 place-items-center md:grid-cols-2 xl:grid-cols-4 gap-y-10">
                    {products.map((product: Product) => (
                        <Link href={{ pathname: `/all-products/${product.id}` }} key={product.id}>
                            <div className="bg-white w-72 h-72 border-4 hover:border-dotted rounded-3xl">
                                <Image
                                    src={product.image}
                                    width={500}
                                    height={500}
                                    alt="Picture of the author"
                                    className="object-contain w-full h-full p-5
                                    transition ease-in-out delay-0 hover:scale-110
                                    "
                                />
                            </div>
                            <div className="px-1 w-56">
                                <div className="text-md font-bold">{truncateString(product.title, 20)}</div>
                                <div>{product.category}</div>
                                <div className="text-red-600">${product.price}</div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    )
}