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
            }, 2000)
        })
        promesa
            .then((resultado) => {
                setListItem(resultado)
            })
        }, [id]);
    return (
        <>
            <h2 className="text-center m-5">{ListItem.id}</h2>
            <ItemDetails productos={ListItem}/>
        </>
    )
}

export default ItemDetailContainer;

