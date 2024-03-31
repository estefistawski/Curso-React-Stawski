import { useContext } from "react"
import { CartContext } from "../../contexto/ContextoCarrito"


const CartItem = ({ id, quantity, price, name }) => {
    const { removeItem} = useContext(CartContext)
    const totalItem = quantity * price
    return (
        <div className="cartItem" >
            <h4>{quantity}</h4>
            <h4>{name}</h4>
            <h4>${totalItem}</h4>
            <button className='btn btn-secondary' onClick={() => removeItem(id)}>Eliminar</button>
        </div>
    )
}

export default CartItem
