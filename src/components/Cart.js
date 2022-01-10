import React from 'react'
import { context } from "./CardContext";
import { useContext } from "react";
import { Link } from 'react-router-dom';
import { db } from "./Firebase/firebase";
import { addDoc, collection} from "firebase/firestore";
import { useState } from 'react';
import validator from 'validator';
import { toast } from 'react-toastify';

const Cart = () => {

    const {vaciarCarrito, cantidad, carrito, eliminarProducto} = useContext(context)
    const precioTotal = carrito.reduce((acc, prod) => acc += prod.Valor * prod.cantidad, 0)



    const[loading, setLoading] = useState(false)
    const [id, setId] = useState("")
    const [error, setError] = useState("")
    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("")
    const [telefono, setTelefono] = useState("")


    const guardarCompra = async () => {

        const validNombre = validator.isAlpha(nombre)
        const validEmail = validator.isEmail(email)
        const ValidNumber = validator.isNumeric(telefono)
        if (validNombre, validEmail, ValidNumber) {
            setLoading(true)
                const orden = {
                productos: carrito,
                usuario: {nombre: nombre, email: email, telefono: telefono},
                total: precioTotal
                }

                const collectionOrden = collection(db, "ordenes")
                const referencia = await addDoc(collectionOrden, orden)
                const id = referencia.id
                setLoading(false)
                setId(id)
                vaciarCarrito()
                setNombre("")
                setError("")
                toast.success("Compra realizada con exito!")

        }else{
            const msj = "Ingrese un Nombre valido"
            setError(msj)
            toast.error(msj)
        }
        

    }

const handleChangeNombre = (e) => {
    const valor = e.target.value
    setNombre(valor)
}
const handleChangeEmail = (e) => {
    const valor = e.target.value
    setEmail(valor)
}
const handleChangeTelefono = (e) => {
    const valor = e.target.value
    setTelefono(valor)
}



    return (
        <div className="containerModal">
            <div className="modalCarrito">
                <h3>Carrito</h3>
                <Link to="./" id="carritoCerrar"><i className="fas fa-times-circle"></i></Link>

                {carrito.length > 0 ? <div>{carrito.map((ItemCarrito) =>{
                        
                        return (
                        <>
                            <div key={ItemCarrito.id} className='productoEnCarrito'>
                                <p>{ItemCarrito.Nombre}</p>
                                <p>Precio: ${ItemCarrito.Valor}</p>
                                <p>Cantidad: {ItemCarrito.cantidad}</p>
                                <button onClick={() => eliminarProducto(ItemCarrito.id)} className="botonEliminar"><i className="fas fa-trash"></i></button>
                            </div>  
                            <h3 className='text-center'>Ingrese sus datos.</h3>
                                <div className='col-12'>
                                <label className='col-3'>Nombre:</label>
                                <input className='col-8' type="text" onChange={handleChangeNombre} value={nombre}/>
                                <label className='col-3'>Email:</label>
                                <input className='col-8' type="email" onChange={handleChangeEmail} value={email}/>
                                <label className='col-3'>Telefono:</label>
                                <input className='col-8' type="number" onChange={handleChangeTelefono} value={telefono}/>
                            </div>
                            <p className="precioProducto">Precio total: $ {precioTotal}</p>
                            <button className="miBoton w-100" onClick={guardarCompra}>Finalizar compra<i className= "fas fa-shopping-basket"></i></button>
                        </>

                        )
                    })}</div> : <Link to="/">Empezar a comprar</Link> }
                        {loading && <p>Cargando... </p>}
                        {id && <p>Se guardo la compra con id {id} </p>}
                        
                        
            </div>
        </div>
    )
}

export default Cart

