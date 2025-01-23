import React from 'react'

function Navbar() {
    return (
        <nav className="flex justify-between px-10 py-3">
            <h3 className="md:text-3xl">Logo Store</h3>
            <div className='md:text-3xl'>
                Cart
            </div>
        </nav>
    )
}

export default Navbar