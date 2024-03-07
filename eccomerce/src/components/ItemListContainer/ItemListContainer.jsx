import { useEffect, useState } from 'react';
import { getProducts } from '../../AsyncMocks';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts()
            .then(response => {
                setProducts(response);
            })
            .catch(error => {
                console.error(error)
            })
    }, [])
    console.log(products)

    return (
        <div>
            <h1 className="titulo">{greeting}</h1>
            <ItemList products={products}/>
        </div>
    )
}
export default ItemListContainer;