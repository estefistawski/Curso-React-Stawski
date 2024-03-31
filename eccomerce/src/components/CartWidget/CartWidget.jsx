import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../contexto/ContextoCarrito";

const CartWidget = () => {
    const { getTotalQuantity } = useContext(CartContext)
    return (
        <div>
            <Link className="carrito" to="/cart">
                Carrito
                <span className="numero"> {getTotalQuantity()}</span>
            </Link>
        </div>
    )
}
export default CartWidget;