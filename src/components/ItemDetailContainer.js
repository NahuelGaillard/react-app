import ItemDetails from "./ItemDetail"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Data } from "./Data"




const ItemDetailContainer = () => {

    const {id} = useParams()
    const [ListItem, setListItem] = useState ([])

    useEffect(() => {
        const promesa = new Promise((res) =>{
            setTimeout(() => {
            const productoFiltrados = Data.filter((prod) => prod.id === Number(id) )
                res(productoFiltrados)
            }, 1)
        })
        promesa
            .then((resultado) => {
                setListItem(resultado)
            })
        }, [id]);
    return (
        <>
            {ListItem.length > 0  ? <ItemDetails producto={ListItem[0]}/> : <p>Cargando...</p> }
        </>
    )
}

export default ItemDetailContainer;

