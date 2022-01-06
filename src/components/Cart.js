import React from 'react'
import { context } from "./CardContext";
import { useContext } from "react";








const Cart = () => {



    const {carrito} = useContext(context)
    const {eliminarProducto} = useContext(context)
    console.log(carrito);
    const precioTotal = carrito.reduce((acc, prod) => acc += prod.precio * prod.cantidad, 0)

    return (
        <div className="containerModal">
            <div className="modalCarrito">
            <h3>Carrito</h3>
            <button id="carritoCerrar"><i className="fas fa-times-circle"></i></button>
                {carrito.map((ItemCarrito) =>{
                    console.log(carrito);
                    
                    return (
                      <>
                        {carrito.length > 0  ? <div key={ItemCarrito.id} className='productoEnCarrito'>
                            <p>{ItemCarrito.nombre}</p>
                            <p>Precio: ${ItemCarrito.precio}</p>
                            <p>Cantidad: ${ItemCarrito.cantidad}</p>
                            <button onClick={() => eliminarProducto(ItemCarrito.id)} className="botonEliminar"><i className="fas fa-trash"></i></button>
                        </div> : <p>Cargando...</p>  }
                      </>

                    )
                })}
                    <p className="precioProducto">Precio total: $ {precioTotal}</p>
                    {/* <button className="miBoton w-100" onClick="finalizarCompra()">Finalizar Compra <i className= "fas fa-shopping-basket"></i></button> */}
                </div>
            </div>
    )
}

export default Cart

