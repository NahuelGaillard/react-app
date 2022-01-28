import { useState } from "react"

const ItemCount = ({onEvent, cantidad, inicial}) => {
    
const [contador, setContador] = useState(inicial)

    const aumentarContador = () => {
        if (contador < cantidad) {
            setContador(contador + 1)
        }
    }

    const reducirContador = () => {
        if (contador > inicial) {
            setContador(contador - 1)
        }
  
    }

    return (
        <>
            <div className="d-flex justify-content-between border border-dark">
                <button onClick={reducirContador}>-</button>
                <p>Cantidad: {contador}</p>
                <button onClick={aumentarContador}>+</button>
            </div>
            <button className="m-1" onClick={() =>onEvent(contador)}>Agregar</button>
        </>
    )
}

export default ItemCount;







