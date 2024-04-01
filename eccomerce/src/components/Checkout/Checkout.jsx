import { CartContext } from "../../contexto/ContextoCarrito"
import { useContext, useState } from "react"
import { useForm } from "react-hook-form";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../services/firebase";

const Checkout = () => {
    const [orderId,setOrderId]=useState("")
    const { cart, clearCart, getTotalPrice} = useContext(CartContext)
    const {register,handleSubmit} = useForm();
    const comprar = (data)=>{
        const order={
            client:data,
            products:cart,
            total:getTotalPrice()
        }
        console.log(order)
        const orderRef = collection(db, "orders");
        addDoc(orderRef,order)
        .then((doc)=>{
            setOrderId(doc.id);
            clearCart();
        })
    }
    if(orderId){
        return(
            <div>
                <h1>Muchas gracias por comprar en Tecno Mundo!</h1>
                <h3>Tu número de orden es: {orderId}</h3>
            </div>
        )
    }
  return (
    <div>
        <h1>Finalizar compra</h1>
        <form className="form" onSubmit={handleSubmit(comprar)}>
            <input type="text" placeholder="Ingresá tu nombre" {...register("nombre")} />
            <input type="text" placeholder="Ingresá tu apellido" {...register("apellido")}/>
            <input type="text" placeholder="Ingresá tu e-mail" {...register("email")}/>
            <input type="text" placeholder="Ingresá tu teléfono"{...register("telefono")}/>


            <button type="submit">Comprar</button>
        </form>
    </div>
  )
}

export default Checkout
