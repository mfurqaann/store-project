import { notFound } from 'next/navigation';
import Image from 'next/image';

import AddToCart from '@/app/ui/addToCart';

import React from 'react'
import { Product } from '@/app/lib/definitions';

export async function generateStaticParams() {
    const products = await fetch('https://fakestoreapi.com/products', {
        cache: 'force-cache',
    }).then((res) => res.json())

    return products.map((product: Product) => ({
        id: String(product.id),
    }))
}

async function getProduct(id: number) {
    try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
            cache: 'force-cache'
        });

        if (!res.ok) {
            console.error(`Error: ${res.status} - ${res.statusText}`)
        }

        const product: Product = await res.json()

        return product
    } catch (error) {
        console.log(error)
    }
}

export default async function ProductDetails(props: {
    params: Promise<{ id: number }>
}) {
    const { id } = await props.params;
    const product = await getProduct(id);
    if (!product) {
        return notFound();
    }

    return (
        <div className='flex justify-center items-center h-screen'>
            <div className='flex flex-wrap justify-center 
            items-center bg-white w-auto h-auto p-5 md:p-0 md:w-3/4 md:h-3/4 rounded-2xl'>
                <div className='grid place-items-center w-80 md:w-1/2 h-auto'>
                    <Image
                        src={product?.image}
                        width={500}
                        height={500}
                        alt={product.title}
                        className='object-contain md:w-80 md:h-80 w-48 p-5'
                    />
                </div>
                <div className='flex flex-col gap-5 w-80 md:w-1/2 h-auto px-5'>
                    <h1 className='text-2xl w-auto lg:w-96'>{product.title}</h1>
                    <p className='text-2xl'>${product.price}</p>
                    <div>
                        <h1 className='md:text-xl'>Description</h1>
                        <p className='text-base text-justify'>{product.description}</p>
                    </div>
                    <AddToCart product={product} />
                </div>
            </div>
        </div>
    )
}
