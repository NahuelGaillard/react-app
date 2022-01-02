import { createContext } from "react";
import { useState } from "react";

export const context = createContext([])


const {Provider} = createContext()

const CustomProvider = ({children}) => {

        const [carrito, setCarrito] = useState([])
        const [cantidad, setCantidad]= useState(0)

        const agregarProducto = (producto, cantidad) => {
            if(true){

            }else{
                
            }

        }
        const eliminarProducto = (id) => {

        }
        const vaciarCarrito = (id) => {
            setCarrito([])
            setCantidad(0)

        }
        const inInCart = (id) => {
            // Retorna verdadero o falso si ya existe el producto

        }


        const valorContexto = { carrito, cantidad, agregarProducto, eliminarProducto, vaciarCarrito, inInCart}

    return(
        <Provider value={valorContexto}>
            {children}
        </Provider>
    )
}

export default CustomProvider