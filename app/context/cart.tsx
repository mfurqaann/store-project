'use client'

import { createContext, useState } from "react";

type Cart = {
    addToCart: (product: Product) => void,
    cart: Array<Product>
}

export const CartContext = createContext<Cart>({} as Cart);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
    const [cart, setCart] = useState<Array<Product>>([])

    const addToCart = (product: Product) => {
        const itemIsInCart = cart.find((prod: Product) => prod.id === product.id);
        if (itemIsInCart) {
            setCart((prevCart) => [...prevCart])
        } else {
            setCart((prevCart) => [...prevCart, product])
        }

        console.log(cart)
    }

    return (
        <CartContext.Provider value={{ addToCart, cart }}>
            {children}
        </CartContext.Provider>
    )
}