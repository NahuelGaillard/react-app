import ItemDetails from "./ItemDetail"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { db } from "./Firebase/firebase"
import { collection, getDoc, doc } from "firebase/firestore"


const ItemDetailContainer = () => {

    const [ListItem, setListItem] = useState ([])
    const {id} = useParams()

    const getItem = async () => {
        const productosCollection = collection(db, "Productos")
        const referencia = doc(productosCollection, id)
        const documento = await getDoc(referencia)
        setListItem({ ...documento.data(), id: documento.id})
}


    useEffect(() => {
       setTimeout(() => {
        getItem()
           
       }, 200);
    }, []);

    return (
        <>
            {ListItem.length < 0  ? <ItemDetails producto={ListItem}/> : <p>Cargando...</p> }
            <div className="row p-3 justify-content-around bg-danger">   

            <ItemDetails producto={ListItem}/>
            </div>

        </>
    )
}

export default ItemDetailContainer;

