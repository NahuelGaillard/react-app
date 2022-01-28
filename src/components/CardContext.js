import { createContext, useState } from "react";
import { useEffect } from "react/cjs/react.development";



export const context = createContext([])


const {Provider} = context

const CustomProvider = ({children}) => {

        const [carrito, setCarrito] = useState([])
        const [cantidad, setCantidad]= useState(0)
        const [producto, setProducto] = useState([]) 

        const agregarProducto = (producto, cantidad) => {
           const enCarrito = isInCart(producto.id)

            if(enCarrito){
               const itemRepetido = carrito.find((item) => item.id === producto.id)
               const carritoFiltrado = carrito.filter((item) => item.id !== producto.id)
                itemRepetido.cantidad += cantidad

                setCarrito([...carritoFiltrado, itemRepetido])
            
            }else{
                producto.cantidad = cantidad
                setCarrito([...carrito, producto])
            }

        }
        
        const eliminarProducto = (itemId) => {
            const producto = carrito.find((prod) => prod.id === itemId)
            
            producto.cantidad--
             if (producto.cantidad === 0) {
                const index = carrito.indexOf(producto)
                carrito.splice(index, 1)
            }

        }

        const vaciarCarrito = (id) => {
            setCarrito([])
            setCantidad(0)

        }
        const isInCart = (id) => {
           return carrito.some((i) => i.id === id) 
        }
        
        const valorContexto = { carrito, cantidad, agregarProducto, eliminarProducto, vaciarCarrito}

    return(
        <Provider value={valorContexto}>
            {children}
        </Provider>
    )
}

export default CustomProvider