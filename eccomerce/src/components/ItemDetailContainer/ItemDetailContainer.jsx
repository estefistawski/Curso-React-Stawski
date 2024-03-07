import { useState,useEffect } from "react"
import { getProductById } from "../../AsyncMocks"
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
    const [product,setProduct]=useState(null);

    useEffect( ()=>{
        getProductById("1")
        .then(response => {
            setProduct(response);
        })
        .catch(error => {
            console.error(error)
        })

    })

  return (
    <div>
      <ItemDetail {...product}/>
    </div>
  )
}

export default ItemDetailContainer

