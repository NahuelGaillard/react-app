import Items from "./items";


const ItemList = ({productos}) => {
    return (
            <>
                {productos.map((producto, i) =>{
                    return (
                    <Items key={i} producto={producto}/>)
                })}
            </>
    )
}

export default ItemList;
