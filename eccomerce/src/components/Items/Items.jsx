import { Link } from "react-router-dom"

const Items = ({id,name,img,price,stock}) => {
  return (
      <article className="cards">
      <h1>{name}</h1>
      < img src={img} style={{width:200}}/>
      <h4>Precio: {price}</h4>
      <h4>Stock disponible: {stock}</h4>
      <Link to={`/detail/${id}`} className="BtnDetalles" >Ver detalles</Link>
      </article>
  )
}

export default Items
