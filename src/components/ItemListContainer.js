import Items from "./items"

const ItemListContainer = ({saludo}) => {
    return (
        <section>
            <h2>{saludo}</h2>
            <Items/>  
        </section>
    )
}

export default ItemListContainer;
