import { useState } from "react"


const ItemCount = () => {
    
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
                <button onClick={aumentarContador}>+</button>
                <p>Cantidad: {contador}</p>
                <button onClick={reducirContador}>-</button>
            </div>    
        </>
    )
}

export default ItemCount;







