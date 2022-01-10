import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import CustomProvider from "./components/CardContext";
import Cart from "./components/Cart";
import Header from "./components/Header";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import 'react-toastify/dist/ReactToastify.css';





const App = () => { 
    
  const saludo = "Bienvenido"
  
  return ( 
            <BrowserRouter>
              <CustomProvider>
                <Header/>
                <Routes>
                  <Route path="/" element={<ItemListContainer saludo={saludo} />}/>
                  <Route path="/categoria/:id" element={<ItemListContainer saludo="Productos"/>}/>
                  <Route path="/item/:id" element={<ItemDetailContainer/>}/>
                  <Route path="/Cart" element={<Cart/>}/>
                </Routes>
                <ToastContainer/>
              </CustomProvider>
            </BrowserRouter>  
  )
}

export default App;
 