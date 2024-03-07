import Items from "../Items/Items"

const ItemList = ({products}) => {
  return (
    <div>
      {
        products.map( prod => {
            return (
              <Items key={prod.id} {...prod} />
            )
        })
      }
    </div>
  )
}

export default ItemList
