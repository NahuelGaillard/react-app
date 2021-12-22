import CartWidget from "./CartWidget"
import { NavLink } from "react-router-dom";

const NavBar = () => {
    
      return   ( <nav className="navbar navbar-expand-lg navbar-dark bg-dark row justify-content-between">
                    <NavLink className="navbar-brand"  to="/"><h1>Proyecto React</h1></NavLink>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse d-block justify-content-left" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <NavLink className="nav-Link" to="/">Inicio <span className="sr-only">(current)</span></NavLink>
                            <NavLink className="nav-Link" to="/categoria/1">Productos 1</NavLink>
                            <NavLink className="nav-Link" to="/categoria/2">Productos 2</NavLink>
                            <CartWidget/>
                        </div>  
                    </div>
                </nav>
      )}

export default NavBar;