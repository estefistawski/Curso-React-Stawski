import { useState, useEffect } from "react"
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc } from 'firebase/firestore'
import { db } from "../../services/firebase";


const ItemDetailContainer = () => {
  const [loading, setLoading] = useState(false)
  const [product, setProduct] = useState(null);
  const { productId } = useParams();

  useEffect(() => {
    const docRef = doc(db, "products", productId);
    getDoc(docRef)
      .then((response) => {
        if (response) {
          setProduct({ ...response.data(), id: response.id })
          setLoading(true)
        }
      })
      .catch((error) => {
        console.error(error)
      })
  }, [productId])


  return (
    <div>
      {loading ? (
        <ItemDetail {...product} />
      ) : <h1>Cargando...</h1>
      }
    </div>
  )
}

export default ItemDetailContainer

