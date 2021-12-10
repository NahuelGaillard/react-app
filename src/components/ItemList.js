import Items from "./items";


const ItemList = ({productos, children}) => {
    return (
            <>
            {productos.map((elemento) =>{
                return (
                <Items greeting={elemento}/>)
            })}
            </>
    )
}

export default ItemList;


/* {props.map( ind => 
                <div key={ind.id}
                    id={ind.id}
                    nombre={ind.nombre}
                    descripcion={ind.descripcion} */