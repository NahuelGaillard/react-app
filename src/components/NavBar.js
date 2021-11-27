
const NavBar = () => {
    
      return    <nav class="navbar navbar-expand-lg navbar-dark bg-dark row justify-content-between">
                    <a class="navbar-brand" href="./index.html">Proyecto React</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse d-block" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <a class="nav-link active" href="./index.html">Inicio <span class="sr-only">(current)</span></a>
                            <a class="nav-link" href="#">Productos</a>
                            <a class="nav-link" href="#">Nosotros</a>
                        </div>
                    </div>
                </nav>
}

export default NavBar;