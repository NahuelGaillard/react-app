import ItemList from "./ItemList"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { db } from "./Firebase/firebase"
import { collection, getDocs, query, where } from "firebase/firestore"


const ItemListContainer = ({saludo}) => {


    const [ListItem, setListItem] = useState ([])
    const {id} = useParams()

const formatearYSetear = (arrayDeDocumentos => {
    setListItem(arrayDeDocumentos.map(documento =>{
        return{...documento.data(), id:documento.id}
    } ))
})



    const traerProductos = async () =>  {
        const productosCollection = collection(db,"Productos")
        const consulta = await getDocs(productosCollection)

        formatearYSetear(consulta.docs)

    }

    const productosFiltrados = async () => {
        const productosCollection = collection(db,"Productos")
        const limitacion = where("Categoria", "==", id)
        const miQuery = query(productosCollection, limitacion) 
        const consulta = await getDocs(miQuery)

        formatearYSetear(consulta.docs)

    }


    useEffect(() => {
        setTimeout(() => {
            if (id) {
                productosFiltrados()
                
            }else {

                traerProductos()
        }
    }, 200)
    
    }, [id]);
        return(
            <>
                <h2 className="text-center m-5">{saludo}</h2>
                <div className="row p-3 justify-content-around bg-danger">   
                <ItemList productos={ListItem}/>
                </div>
            </>
        )
}



export default ItemListContainer;












// useEffect(()=>{

//     const productos = collection(db, "productos")

//     const promesa = getDocs(productos)


//     promesa
//     .then((resultado) => {
//         const productosFormateados = []
//         resultado.forEach(doc=>{
//             productosFormateados.push(doc.data())
//         })
//         console.log(productosFormateados);

// })
// .catch(()=>{
//     console.log("error");

// })


// })