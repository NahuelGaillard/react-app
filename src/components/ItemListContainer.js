import ItemList from "./ItemList"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Data } from "./Data"

// import { db } from "./Firebase/firebase"
// import { collection, getDocs, } from "firebase/firestore"



const ItemListContainer = ({saludo}) => {
    

    const [ListItem, setListItem] = useState ([])
    const {id} = useParams()

    useEffect(() => {
        const promesa = new Promise((res) =>{
            setTimeout(() => {
                if (id === undefined) {
                    res(Data)
                }else{
                    const productos = Data.filter((prod)=> prod.categoria === id)
                    res(productos)
                }
                
            }, 2000)
        })
        promesa
            .then((resultado) => {
                setListItem(resultado)
            })
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