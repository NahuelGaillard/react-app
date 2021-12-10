import ItemCount from "./ItemCount"


const Items = (producto) => {
    console.log(producto);
    return (
            <div id={producto.greeting.id} className="card col-2">
                <h5 className="card-title text-center">{producto.greeting.nombre}</h5>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpue_kSPskwcncXROttpQ3McfClYJNTOjgfw&usqp=CAU" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <p className="card-text">{producto.greeting.descripcion}</p>
                    <ItemCount/>
                </div>
            </div>
    )
}

export default Items;
