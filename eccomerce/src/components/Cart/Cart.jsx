import { useContext } from "react"
import { CartContext } from "../../contexto/ContextoCarrito"
import CartItem from "../CartItem/CartItem"
import { Link } from "react-router-dom"

const Cart = () => {
    const { cart, clearCart, totalQuantity,getTotalPrice } = useContext(CartContext)
    if (totalQuantity === 0) {
        return (
            <div>
                <h1 id="cart">No hay items en el carrito</h1>
                <Link id="cart" to='/' className="Option">Productos</Link>
            </div>
        )
    }
    return (
        <div>
            {cart.map(p => <CartItem key={p.id} {...p} />)}
            <div className="carrito">
            <h3 id="cart" >Total: ${getTotalPrice()}</h3>
            <button id="cart" className='btn btn-secondary' onClick={()=>clearCart()}>Limpiar carrito</button>
            <Link id="cart" to='/checkout' className="Option" >Finalizar Compra</Link>
            </div>
        </div>
    )
}

export default Cart
