import { createContext, useContext, useState } from "react"

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([])
    
    const addUsuario = (usuario) => {
        setCartList([
            ...cartList,
            usuario
        ])
    }

    const emptyCart = () => {
        setCartList([])
    }

    return (
        <CartContext.Provider value = {{
            cartList,
            addUsuario,
            emptyCart
        }}>
            { children }
        </CartContext.Provider>
    )
}