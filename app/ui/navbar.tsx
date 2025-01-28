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
                <div className="relative inline-block">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6 text-gray-800"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                        />
                    </svg>

                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                        {cart.length}
                    </span>
                </div>

            </Link>
        </nav>
    )
}

export default Navbar