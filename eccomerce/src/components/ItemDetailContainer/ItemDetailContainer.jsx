import { useState, useEffect } from "react"
import { getProductById } from "../../AsyncMocks"
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";


const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const {productId}=useParams();
  
  useEffect(() => {
    getProductById(productId)
      .then(response => {
        setProduct(response);
      })
      .catch(error => {
        console.error(error)
      })

  }, [productId])

  return (
    <div>
      <ItemDetail {...product} />
    </div>
  )
}

export default ItemDetailContainer

