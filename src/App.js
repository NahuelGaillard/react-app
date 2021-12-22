import { BrowserRouter, Route, Routes } from "react-router-dom";
import CustonProvider from "./components/CardContext";

import CartWidget from "./components/CartWidget";
import Header from "./components/Header";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";



const saludo = "Bienvenido"


const App = () => { 
  return ( 
            <BrowserRouter>
              <CustonProvider>
                <Header/>
                <Routes>
                  <Route path="/" element={<ItemListContainer saludo={saludo} />}/>
                  <Route path="/categoria/:id" element={<ItemListContainer saludo="Productos"/>}/>
                  <Route path="/item/:id" element={<ItemDetailContainer/>}/>
                  <Route path="/cart" element={<CartWidget/>}/>
                </Routes>
              </CustonProvider>
              
            </BrowserRouter>  
  )
}

export default App;
 