import Header from "./components/Header";
import ItemListContainer from "./components/ItemListContainer";

const saludo = "Bienvenido"

const App = () => { 
  return ( <>
    <Header/>
    <ItemListContainer saludo={saludo} />
</>
  )
}

export default App;
 