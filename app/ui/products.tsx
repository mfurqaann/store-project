'use client'

import React, { useEffect, useState } from 'react'
import Image from "next/image";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Product } from '../lib/definitions';


function Products({ products }: { products: Array<Product> }) {
    const [selectedCategory, setSelectedCategory] = useState('all')
    const [allProducts, setAllProducts] = useState<Array<Product>>([])

    useEffect(() => {
        try {
            const fetchData = async () => {
                const url = !selectedCategory || selectedCategory === 'all' ?
                    null : `https://fakestoreapi.com/products/category/${selectedCategory}`

                if (url) {
                    const response = await fetch(url)
                    const result = await response.json();
                    setAllProducts(result)
                } else {
                    setAllProducts(products)
                }
            }

            fetchData();
        } catch (error) {
            console.log(error)
        }
    }, [products, selectedCategory])

    function truncateString(title: string, maxLength: number): string {
        if (title.length > maxLength) {
            return title.slice(0, maxLength) + '...';
        }
        return title;
    }

    return (
        <Tabs defaultValue={selectedCategory} onValueChange={setSelectedCategory}>
            <div className='flex justify-center'>
                <TabsList className='flex flex-wrap h-auto dark:text-neutral-200 dark:bg-slate-800'>
                    <TabsTrigger value="all">All</TabsTrigger>
                    <TabsTrigger value="electronics">Electronics</TabsTrigger>
                    <TabsTrigger value="jewelery">Jewelery</TabsTrigger>
                    <TabsTrigger value="men's clothing">Men&apos;s clothing</TabsTrigger>
                    <TabsTrigger value="women's clothing">Women&apos;s clothing</TabsTrigger>
                </TabsList>
            </div>
            <TabsContent value={selectedCategory}>
                <div className="grid grid-cols-1 place-items-center md:grid-cols-2 xl:grid-cols-4 gap-y-10">
                    {allProducts.map((product: Product) => (
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
                            <div className="px-1 w-72 dark:text-neutral-200">
                                <div className="text-md font-bold">{truncateString(product.title, 20)}</div>
                                <div>{product.category}</div>
                                <div className="text-red-600 dark:text-rose-400">${product.price}</div>
                            </div>
                        </Link>
                    ))}
                </div>

            </TabsContent>
        </Tabs>
    )
}

export default Products;