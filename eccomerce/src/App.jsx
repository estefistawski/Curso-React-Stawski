import './App.css'
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

  return (
    <>
    <BrowserRouter>
     <NavBar />
     <Routes>
     <Route
            path="/"
            element={<ItemListContainer greetings={"Listado de Productos"} />}
          />
     <Route
            path="/category/:categoryId"
            element={<ItemListContainer greetings={"Listado de Productos Filtrados"} />}
          />
      <Route path="/detail/:productId" element={<ItemDetailContainer/>}/>
      
     </Routes>
     </BrowserRouter>
     </>
  );
}

export default App
