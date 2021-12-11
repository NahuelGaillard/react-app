import Header from "./components/Header";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";

const saludo = "Bienvenido"

const App = () => { 
  return ( 
            <BrowserRouter>
              <Header/>
              <Routes>
                <Route path="/" element={<ItemListContainer saludo={saludo} />}/>
                <Route path="/categoria/:id" element={<ItemDetailContainer/>}/>
                <Route path="/item/:id" element={<ItemDetailContainer/>}/>
              </Routes>
            </BrowserRouter>  
  )
}

export default App;
 