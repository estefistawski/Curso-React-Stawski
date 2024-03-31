import { createContext, useState } from "react";

export const CartContext = createContext({
    cart: []
})
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addItem = (item, quantity) => {
        if (!isInCart(item.id)) {
            setCart(prev => [...prev, { ...item, quantity }])
        } else {
            console.error('El producto ya fue agregado')
        }
    }
    const removeItem = (itemId) => {
        const cartUpdated = cart.filter(prod => prod.id !== itemId)
        setCart(cartUpdated)
    }
    const clearCart = () => {
        setCart([])
    }
    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId)
    }
    const getTotalQuantity = () => {
        let total = 0;
        cart.forEach(prod => {
            total += prod.quantity
        })
        return total
    }

    const getTotalPrice = () => {
        let total = 0
        cart.forEach(prod => {
            total+= prod.quantity * prod.price;
        })
        return total
    }
    //  const formatearPrecio = (precio) => {
    //      const precioString = precio.toString()
    //      const longitud = precioString.lenght
    //      let resultado = ''
    //      for (let i = longitud - 1, contador = 0; i >= 0; i--) {
    //          resultado = precioString[i] + resultado;
    //          contador++;
    //          if (contador % 3 === 0 && i !== 0) {
    //              resultado = '.' + resultado;
    //          }
    //      }
    //      return resultado
    //  }
    return (
        <CartContext.Provider value={{ cart,isInCart, addItem, removeItem, clearCart,getTotalQuantity,getTotalPrice}}>
            {children}
        </CartContext.Provider>
    )
}