import { useState } from 'react'
const ItemCount = ({stock,inicial,onAdd}) => {
    const [cantidad,setCantidad]=useState(inicial)
    const incrementar =()=>{
        if(cantidad<stock){
            setCantidad(cantidad+1)
        }
    }
    const decrementar =()=>{
        if(cantidad>1){
            setCantidad(cantidad-1)
        }
    }

  return (
    <div className='Contador'>
        <div className='Controles'>
            <button className='btn btn-secondary' onClick={decrementar}>-</button>
            <h4 className='Numero'>{cantidad}</h4>
            <button className='btn btn-secondary' onClick={incrementar}>+</button>
        </div>
        <div>
            <button className='btn btn-secondary' onClick={()=> onAdd(cantidad)} disabled={!stock} >Agregar al carrito</button>
        </div>
      
    </div>
  )
}

export default ItemCount
