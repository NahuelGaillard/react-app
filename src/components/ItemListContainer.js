import ItemList from "./ItemList"
import { useEffect, useState } from "react"


const Data = () => [
    { nombre: "producto 1", id:"1", descripcion: "producto 1"},
    { nombre: "producto 2", id:"2", descripcion: "producto 2"},
    { nombre: "producto 3", id:"3", descripcion: "producto 3"},
    { nombre: "producto 4", id:"4", descripcion: "producto 4"}
]

const ItemListContainer = ({saludo}) => {

    
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
