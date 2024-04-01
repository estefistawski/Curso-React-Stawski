import './App.css'
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartProvider } from './contexto/ContextoCarrito';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import ErrorPage from './components/ErrorPage/ErrorPage';

function App() {

  return (
    <>
    <BrowserRouter>
    <CartProvider>
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
      <Route path='/*' element={<ErrorPage/>}/>
      <Route path='/cart' element={<Cart/>} />
      <Route path='/checkout' element={<Checkout/>} />
      
     </Routes>
     </CartProvider>
     </BrowserRouter>
     </>
  );
}

export default App
