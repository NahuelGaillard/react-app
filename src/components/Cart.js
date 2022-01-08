import React from 'react'
import { context } from "./CardContext";
import { useContext } from "react";
import { Link } from 'react-router-dom';


const Cart = () => {


    const {carrito} = useContext(context)
    const {eliminarProducto} = useContext(context)
    const precioTotal = carrito.reduce((acc, prod) => acc += prod.Valor * prod.cantidad, 0)

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
                      </>

                    )
                })}</div> : <Link to="/">Empezar a comprar</Link> }
                
                    <p className="precioProducto">Precio total: $ {precioTotal}</p>
                    {/* <button className="miBoton w-100" onClick="finalizarCompra()">Finalizar Compra <i className= "fas fa-shopping-basket"></i></button> */}
                </div>
            </div>
    )
}

export default Cart

