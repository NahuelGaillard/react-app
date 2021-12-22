import ItemCount from "./ItemCount"

const ItemDetails = ({productos}) => {
const padre = (params) => {
    console.log(params);
}

 return (
     <>
        {productos.map((producto, i) =>{
          return (
            <div key={i} className="card col-4 m-auto">
                <h2 className="tituloProducto">{producto.nombre}</h2>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpue_kSPskwcncXROttpQ3McfClYJNTOjgfw&usqp=CAU" className="card-img-top"  alt="..."/>
                <p> Precio: ${producto.precio}</p>
                <hr></hr>
                <p>Descripcion: {producto.descripcion}</p>
                <button onClick={console.log(padre)}>Comprar</button>
                <ItemCount onEvent={padre}/>
            </div>
          )
    
})}
</>
)


    // return (
    //     <>
            
    //     </>
    // )
}

export default ItemDetails