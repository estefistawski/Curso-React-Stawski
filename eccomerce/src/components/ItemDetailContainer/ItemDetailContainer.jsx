import { useState, useEffect } from "react"
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import {doc,getDoc} from 'firebase/firestore'
import { db } from "../../services/firebase";


const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const {productId}=useParams();
  
  useEffect(() => {
    const docRef = doc(db,"products",productId);
    getDoc(docRef)
    .then((response)=>{
      setProduct({...response.data(), id:response.id})
    })
  /*   getProductById(productId)
      .then(response => {
        setProduct(response);
      })
      .catch(error => {
        console.error(error)
      }) */

  }, [productId])

  return (
    <div>
      <ItemDetail {...product} />
    </div>
  )
}

export default ItemDetailContainer

