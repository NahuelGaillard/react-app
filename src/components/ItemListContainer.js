import Items from "./items"
import { useState } from "react"


const Data = () => [
    { nombre: "producto 1", id:"1", descripcion: "producto 1"},
    { nombre: "producto 2", id:"2", descripcion: "producto 2"},
    { nombre: "producto 3", id:"3", descripcion: "producto 3"},
    { nombre: "producto 4", id:"4", descripcion: "producto 4"}
]



const ItemListContainer = ({saludo}) => {
    
    const [ListItem, setListItem] = useState ([])


    const product = (task) => {
        return new Promise ((resolve, reject) =>{
            setTimeout(()=>{
                if (task.length > 0){
                    resolve(setListItem(task))
                    console.log("salio bien");
                    
                }else{
                    reject("Error 404")
                    console.log("salio mal");
                }
            }, 2000)
        })

    }

    product (Data)
        .then(()=>product(Data))
        .catch("Error")


        return(
              <>
                <h2 className="text-center">{saludo}</h2>
                <div className="row p-3 justify-content-around bg-danger">   
                <Items/>
                {ListItem.map( ind => 
                    <card
                        id={ind.id}
                        nombre={ind.nombre}
                        descripcion={ind.descripcion}
                    />)}
                </div>
        </>
        )
}

                













export default ItemListContainer;
