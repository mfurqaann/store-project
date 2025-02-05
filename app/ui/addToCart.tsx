'use client'
import React, { useContext } from 'react'
import { CartContext } from '../context/cart'
import { Product } from '../lib/definitions'



function AddToCart({ product }: { product: Product }) {
    const { addToCart, removeFromCart, cart } = useContext(CartContext)
    const isProductAddedToCart = cart.find((cartValue: Product) => cartValue.id === product.id)

    return (
        <div>
            <button className='w-36 h-10 hover:bg-gray-600 bg-gray-950 text-white text-center rounded-3xl'
                onClick={() => isProductAddedToCart ? removeFromCart(product) : addToCart(product)}>
                {isProductAddedToCart ? 'Remove from Cart' : 'Add to Cart'}
            </button>
        </div>
    )
}

export default AddToCart