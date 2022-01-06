import ItemCount from "./ItemCount"
import { context } from "./CardContext";
import { useContext } from "react";
import { useState } from "react/cjs/react.development";
import Botones from "./button";

const ItemDetails = ({producto}) => {
  const {agregarProducto} = useContext(context)


  const [cantidadCarrito, setCantidadCarrito] = useState()

  const contador = (params) => {
    setCantidadCarrito(params)
    agregarProducto(producto, params)
  }

  return (
      <>
              <div className="card col-4 m-auto">
                  <h2 className="tituloProducto">{producto.nombre}</h2>
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpue_kSPskwcncXROttpQ3McfClYJNTOjgfw&usqp=CAU" className="card-img-top"  alt="..."/>
                  <p> Precio: ${producto.precio}</p>
                  <hr></hr>
                  <p>Descripcion: {producto.descripcion}</p>
                  {cantidadCarrito === undefined ? <ItemCount onEvent={contador} cantidad={producto.stock} inicial={1}/>: <Botones/>}
              </div>
      </>
  )
}

export default ItemDetails