import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount"
import { useState } from "react"
import { useContext } from "react";
import { CartContext } from "../../contexto/ContextoCarrito";



const ItemDetail = ({id, name, img, category, description, price, stock }) => {
  const [quantityAdded, setQuantityAdded] = useState(0);
  const { addItem }=useContext(CartContext)
  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity)
    const item ={
      id, name, price
    }
    addItem(item,quantity)
    }
  return (
    <div>
      <article>
        <h1>{name}</h1>
        <img src={img} style={{ width: 400 }} />
        <p>Categoría: {category}</p>
        <p>Descripción: {description}</p>
        <h1>${price}</h1>
        {quantityAdded > 0 ? (<Link to='/cart' className="btnTerminarCompra">Terminar Compra</Link>) : (<ItemCount inicial={1} stock={stock} onAdd={handleOnAdd} />)}

      </article>
    </div>
  )
}

export default ItemDetail
