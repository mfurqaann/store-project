'use client'
import React, { useContext } from 'react'
import { CartContext } from '../context/cart'



function AddToCart({ product }: { product: Product }) {
    const { addToCart } = useContext(CartContext)

    return (
        <div>
            <button className='w-36 h-10 hover:bg-gray-600 bg-gray-950 text-white text-center rounded-3xl'
                onClick={() => addToCart(product)}>
                Add To Cart
            </button>
        </div>
    )
}

export default AddToCart