import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../contexto/ContextoCarrito";
import cart from "../../img/cart.svg"

const CartWidget = () => {
    const { getTotalQuantity } = useContext(CartContext)
    return (
        <div className="cartWidget"> 
            <Link className="carrito" to="/cart">
                <img src={cart}></img>
                <span className="numero"> {getTotalQuantity()}</span>
            </Link>
        </div>
    )
}
export default CartWidget;