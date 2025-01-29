'use client'

import Image from "next/image";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useEffect, useState } from "react";

export default function Page() {
    const [products, setProducts] = useState([])

    const [selectedCategory, setSelectedCategory] = useState('all')

    useEffect(() => {
        try {
            const fetchData = async () => {
                if (!selectedCategory || selectedCategory === 'all') {
                    const response = await fetch('https://fakestoreapi.com/products')
                    const result = await response.json()
                    setProducts(result)
                } else {
                    const response = await fetch(`https://fakestoreapi.com/products/category/${selectedCategory}`)
                    const result = await response.json();
                    setProducts(result)
                }
            }

            fetchData();
        } catch (error) {
            console.log(error)
        }
    }, [selectedCategory])

    function truncateString(title: string, maxLength: number): string {
        if (title.length > maxLength) {
            return title.slice(0, maxLength) + '...';
        }
        return title;
    }

    return (
        <div className="container mx-auto">
            <h2 className="text-center">Products</h2>
            <Tabs defaultValue={selectedCategory} onValueChange={setSelectedCategory}>
                <TabsList>
                    <TabsTrigger value="all">All</TabsTrigger>
                    <TabsTrigger value="electronics">Electronics</TabsTrigger>
                    <TabsTrigger value="jewelery">Jewelery</TabsTrigger>
                    <TabsTrigger value="men's clothing">Men's clothing</TabsTrigger>
                    <TabsTrigger value="women's clothing">Women's clothing</TabsTrigger>
                </TabsList>
                <TabsContent value={selectedCategory}>
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
                                <div className="px-1 w-72">
                                    <div className="text-md font-bold">{truncateString(product.title, 20)}</div>
                                    <div>{product.category}</div>
                                    <div className="text-red-600">${product.price}</div>
                                </div>
                            </Link>
                        ))}
                    </div>

                </TabsContent>
            </Tabs>


            {/* <div className="grid grid-cols-1 place-items-center md:grid-cols-2 xl:grid-cols-4 gap-y-10">
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
                        <div className="px-1 w-72">
                            <div className="text-md font-bold">{truncateString(product.title, 20)}</div>
                            <div>{product.category}</div>
                            <div className="text-red-600">${product.price}</div>
                        </div>
                    </Link>
                ))}
            </div> */}
        </div>
    )
}