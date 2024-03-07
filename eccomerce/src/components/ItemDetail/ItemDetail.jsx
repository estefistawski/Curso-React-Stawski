import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({name,img,category,description,price}) => {
  return (
    <div>
      <article>
        <h1>{name}</h1>
        <img src={img} style={400}/>
        <p>Categoría: {category}</p>
        <p>Descripción: {description}</p>
        <h1>${price}</h1>
        <ItemCount inicial={1} stock={15} onAdd={(cantidad)=>console.log('Cantidad agregada: ',cantidad)} />
      </article>
    </div>
  )
}

export default ItemDetail
