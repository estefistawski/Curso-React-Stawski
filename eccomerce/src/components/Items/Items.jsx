
const Items = ({name,img,price,stock}) => {
  return (
      <article className="cards">
      <h1>{name}</h1>
      < img src={img} style={{width:200}}/>
      <h4>Precio: {price}</h4>
      <h4>Stock disponible: {stock}</h4>
      <button className="BtnDetalles" >Ver detalles</button>
      </article>
  )
}

export default Items
