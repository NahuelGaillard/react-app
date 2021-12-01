import CartWidget from "./CartWidget"

const NavBar = () => {
    
      return   ( <nav className="navbar navbar-expand-lg navbar-dark bg-dark row justify-content-between">
                    <a className="navbar-brand" href="./index.html"><h1>Proyecto React</h1></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse d-block" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-link active" href="./index.html">Inicio <span className="sr-only">(current)</span></a>
                            <a className="nav-link" href="./index.html">Productos</a>
                            <a className="nav-link" href="./index.html">Nosotros</a>
                            <CartWidget/>
                        </div>  
                    </div>
                </nav>
               
                
      )}

export default NavBar;