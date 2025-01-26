'use client'
import React, { useContext } from 'react'
import { CartContext } from '../context/cart'
import Link from 'next/link';

function Navbar() {
    const { cart } = useContext(CartContext);

    return (
        <nav className="flex justify-between px-10 py-3">
            <Link href={{ pathname: `/all-products` }}>
                <h3 className="md:text-3xl">Logo Store</h3>
            </Link>

            <Link href={{ pathname: '/checkout' }} className='md:text-3xl'>
                Cart {cart.length}
            </Link>
        </nav>
    )
}

export default Navbar