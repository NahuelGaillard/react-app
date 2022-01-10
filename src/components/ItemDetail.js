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
              <div className="card col-4 m-auto text-center">
                  <h2 className="tituloProducto">{producto.Nombre}</h2>
                  <img src={producto.Imagen} className="card-img-top"  alt="..."/>
                  <p className="font-weight-bold"> Precio: ${producto.Valor}</p>
                  <hr></hr>
                  <p>Descripcion: {producto.Modelo}</p>
                  {cantidadCarrito === undefined ? <ItemCount onEvent={contador} cantidad={producto.stock} inicial={1}/>: <Botones/>}
              </div>
      </>
  )
}

export default ItemDetails