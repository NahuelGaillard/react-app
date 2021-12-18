import { useState } from "react"


const ItemCount = ({onEvent}) => {
 
    
const [contador, setContador] = useState(0)
const stockDisponible = 8

    const aumentarContador = () => {
        if (contador === stockDisponible) {
        }
        else {
            setContador(contador + 1)
        }
    }

    const reducirContador = () => {
        if (contador === 0) {
        }
        else {
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
            <button onClick={() =>onEvent(contador)}>Agregar</button>
        </>
    )
}

export default ItemCount;







