import { useEffect, useState } from 'react';
//import { getProducts,getProductByCategory } from '../../AsyncMocks';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { db } from '../../services/firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';


const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);
    const [loading,setLoading]=useState(false);
   const {categoryId} = useParams()

    useEffect( ()=> {
      const collectionRef = collection(db,"products");
      const q= categoryId ? query(collectionRef,where( "category","==",categoryId)) : collectionRef;

      getDocs(q)
     .then((response)=>{
      const product = response.docs.map((doc)=>{
        return {id:doc.id,...doc.data()}
      })
      console.log(product)
      setProducts(product);
      setLoading(true)
     })
     .catch( error => {
      console.error(error)
     })
},[categoryId])
    return (
        <div>
            <h1 className="titulo">{greeting}</h1>
            {loading &&<ItemList products={products}/>}
           
        </div>
    )
    }
export default ItemListContainer;