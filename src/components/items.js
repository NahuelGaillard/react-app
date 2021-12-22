import { Link } from "react-router-dom";


const Items = ({producto}) => {
    return (
            <div id={producto.id} className="card col-2">
                <h5 className="card-title text-center">{producto.nombre}</h5>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpue_kSPskwcncXROttpQ3McfClYJNTOjgfw&usqp=CAU" className="card-img-top" alt="..."/>
                <div className="card-body text-center">
                    <p className="card-text ">{producto.descripcion}</p>
                    {/* <button className="w-100 mt-2" onClick="">Agregar</button> */}
                    <Link className="nav-Link" to={`../item/${producto.id}`}>Ver Más</Link>
                </div>
            </div>
    )
}

export default Items;
