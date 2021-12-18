import Header from "./components/Header";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import CartWidget from "./components/CartWidget";

const saludo = "Bienvenido"

const App = () => { 
  return ( 
            <BrowserRouter>
              <Header/>
              <Routes>
                <Route path="/" element={<ItemListContainer saludo={saludo} />}/>
                <Route path="/categoria/:id" element={<ItemListContainer saludo="Productos"/>}/>
                <Route path="/item/:id" element={<ItemDetailContainer/>}/>
                <Route path="/cart" element={<CartWidget/>}/>
              </Routes>
            </BrowserRouter>  
  )
}

export default App;
 