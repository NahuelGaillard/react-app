import CartWidget from "./CartWidget"
import { NavLink } from "react-router-dom";

const NavBar = () => {
    
      return   ( <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <NavLink className="navbar-brand"  to="/"><h1>Proyecto React</h1></NavLink>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <NavLink className="nav-Link m-1" to="/">Inicio <span className="sr-only">(current)</span></NavLink>
                            <NavLink className="nav-Link m-1" to="/categoria/Anillos">Anillos</NavLink>
                            <NavLink className="nav-Link m-1" to="/categoria/Dijes">Dijes</NavLink>
                            <CartWidget/>
                        </div>  
                    </div>
                </nav>
      )}

export default NavBar;