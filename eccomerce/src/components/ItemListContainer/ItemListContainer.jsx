import { useEffect, useState } from 'react';
import { getProducts,getProductByCategory } from '../../AsyncMocks';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);
    const {categoryId} = useParams()

    useEffect( ()=> {
      const asynFunctions = categoryId ? getProductByCategory : getProducts
      asynFunctions(categoryId)
        .then( res => {
          setProducts(res)
        })
        .catch( error => {
          console.log(error)
        })
    }, [categoryId])
    return (
        <div>
            <h1 className="titulo">{greeting}</h1>
            <ItemList products={products}/>
        </div>
    )
}
export default ItemListContainer;