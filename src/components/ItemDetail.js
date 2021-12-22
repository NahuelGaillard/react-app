import ItemCount from "./ItemCount"
import { context } from "./CardContext";

const ItemDetails = ({productos}) => {
const contador = (params) => {
    console.log(params);
}
const agregarProducto = () => {
  console.log(context);
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
                <button onClick={agregarProducto} >Comprar</button>
                <ItemCount onEvent={contador}/>
            </div>
          )
    
        })}
    </>
)
}

export default ItemDetails