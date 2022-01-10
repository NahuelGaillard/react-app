import { Link } from "react-router-dom";


const Items = ({producto}) => {
    return (
            <div id={producto.id} className="m-1 card col-2">
                <h5 className="card-title text-center">{producto.Nombre}</h5>
                <img src={producto.Imagen} className="card-img-top" alt="..."/>
                <div className="card-body text-center">
                    <p className="card-text ">{producto.Descripcion}</p>
                    <Link className="nav-Link" to={`../item/${producto.id}`}>Ver Más</Link>
                </div>
            </div>
    )
}

export default Items;
