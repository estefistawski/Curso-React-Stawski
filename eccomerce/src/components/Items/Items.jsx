
const Items = ({name,img,price,stock}) => {
  return (
    <div className="cards">
      <h1>{name}</h1>
      < img src={img} style={{width:200}}/>
      <h4>Precio: {price}</h4>
      <h4>Stock disponible: {stock}</h4>
      <button className="BtnDetalles" >Ver detalles</button>
    </div>
  )
}

export default Items
