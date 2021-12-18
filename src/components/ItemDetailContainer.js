import ItemDetails from "./ItemDetail"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const Data = () => [
    { nombre: "producto 1", id:1, descripcion: "producto 1", precio: 1500},
    { nombre: "producto 2", id:2, descripcion: "producto 2", precio: 1300},
    { nombre: "producto 3", id:3, descripcion: "producto 3", precio: 1800},
    { nombre: "producto 4", id:4, descripcion: "producto 4", precio: 1100}
]

fetch('https://fakestoreapi.com/products')
.then(res=>res.json())
.then(json=>console.log(json))




const ItemDetailContainer = () => {

    const {id} = useParams()
    const [ListItem, setListItem] = useState ([])

    useEffect(() => {
        const promesa = new Promise((res) =>{
            setTimeout(() => {
                res(Data)
            }, 2000)
        })
        promesa
            .then((resultado) => {
                setListItem(resultado)
            })
        }, [ListItem]);

    return (
        <>
            <h2 className="text-center m-5">Productos</h2>
            <ItemDetails productos={ListItem} />
        </>
    )
}

export default ItemDetailContainer;

