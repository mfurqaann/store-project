'use client'
import React from 'react'



function AddToCart({ id }: { id: number }) {

    function addToCart(productId: number) {
        console.log(productId)
    }
    return (
        <div>
            <div>AddToCart</div>
            <button className='w-30 p-5 border-4 bg-black text-white rounded-3xl' onClick={() => addToCart(id)}>Add To Cart</button>
        </div>
    )
}

export default AddToCart