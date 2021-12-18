import ItemCount from "./ItemCount"

const ItemDetails = (props) => {

const padre = (params) => {
    console.log("Soy el padre");
    console.log("params:", params);
}

    return (
        <>
            <div className="card col-4 m-auto">
                <h2 className="tituloProducto">{props.nombre}</h2>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpue_kSPskwcncXROttpQ3McfClYJNTOjgfw&usqp=CAU" className="card-img-top"  alt="..."/>
                <p> Precio: ${props.precio}</p>
                <hr></hr>
                <p>Descripcion: {props.descripcion}</p>
                <ItemCount onEvent={padre}/>
            </div>
        </>
    )
}

export default ItemDetails