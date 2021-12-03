import Items from "./items"

const ItemListContainer = ({saludo}) => {
    return (
        <section className="">
            <h2 className="text-center">{saludo}</h2>
            <div className="row p-3 justify-content-around bg-danger">   
                <Items/>  
                <Items/>  
                <Items/>  
            </div>
        </section>
    )
}

export default ItemListContainer;