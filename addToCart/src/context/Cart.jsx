import { useState, useContext } from "react";
import { createContext } from "react";

export const CartContext = createContext();

export const CartProvider = (props) => {
    const [items, setItems] = useState([])
    return (
        <CartContext.Provider value={{ items, setItems }}>
            {props.children}
        </CartContext.Provider>
    )
}

// custom hooks

export const useCart = () => {
    const cart = useContext(CartContext);
    return cart
}
