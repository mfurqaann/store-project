'use client'
import React from 'react'



function AddToCart({ id }: { id: number }) {

    function addToCart(productId: number) {
        console.log(productId)
    }
    return (
        <div>
            <button className='w-36 h-10 hover:bg-gray-600 bg-gray-950 text-white text-center rounded-3xl' onClick={() => addToCart(id)}>Add To Cart</button>
        </div>
    )
}

export default AddToCart