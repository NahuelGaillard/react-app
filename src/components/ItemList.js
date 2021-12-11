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
