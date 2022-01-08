import { createContext, useState } from "react";
// import { db } from "./Firebase/firebase";
// import { addDoc, collection } from "firebase/firestore";



export const context = createContext([])


const {Provider} = context

const CustomProvider = ({children}) => {

        const [carrito, setCarrito] = useState([])
        const [cantidad, setCantidad]= useState(0)



        // const[loading, setLoading] = useState(false)
        // const [id, setId] = useState("")

        // const guardarCompra = async () => {

        //     setLoading(true)
        //     const orden = {
        //     productos: [{id:1, nombre:"dije"}],
        //     usuario: {nombre:"juan", telefono: "1245132154"},
        //     total:100
        //     }

        //     const collectionOrden = collection(db, "ordenes")
        //     const referencia = await addDoc(collectionOrden,orden)
        //     const id = referencia.id
        //     setLoading(false)
        //     setId(id)
        // }

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

        
        const eliminarProducto = (id) => {

            const producto = carrito.find((prod) => prod.id === id)
    
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