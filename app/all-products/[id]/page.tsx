import AddToCart from '@/app/ui/addToCart';
import { notFound } from 'next/navigation';
import React from 'react'

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
        if (!product) {
            return notFound();
        }

        return product
    } catch (error) {
        console.log('Error parsing JSON')
    }
}

export default async function ProductDetails(props: {
    params: Promise<{ id: number }>
}) {
    const { id } = await props.params
    const product = await getProduct(id)



    return (
        <div>
            <div>ProductDetails {product?.title}</div>
            <AddToCart id={id} />
        </div>
    )
}
