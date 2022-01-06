import ItemList from "./ItemList"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Data } from "./Data"

// import { db } from "./Firebase/firebase"
// import { collection, doc, getDocs,  } from "firebase/firestore"


const ItemListContainer = ({saludo}) => {


    const [ListItem, setListItem] = useState ([])
    const {id} = useParams()

    // useEffect(() =>{
    //     const itemsCollection = collection(db, "productos");
    //     getDocs(itemsCollection).then ((res) => {
    //         if (res.size === 0) {
    //             console.log("no resultados");
    //         }
    //         setListItem(res.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
    //     })
    // })


    useEffect(() => {


        // const productos = collection(db,"Productos")
        // const promesa = getDocs(productos)

            // setTimeout(()=> {
            //     if (id === undefined) {
            //         res(productos)
                    
            //     // }else{
            //     //     const productos = productos.filter((prod) => prod.categoria === id)
            //     //     res(productos)
            //     // }, 2000)
            // })
            // promesa
            // .then ((resultado)=>{
            //     resultado.forEach(doc=>{
            //         setListItem(doc.data())
            //         console.log(ListItem);
            //     })
            // })
         



        const promesa = new Promise((res) =>{
            setTimeout(() => {
                if (id === undefined) {
                    res(Data)
                }else{
                    const productos = Data.filter((prod)=> prod.categoria === id)
                    res(productos)
                }
                
            }, 2)
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