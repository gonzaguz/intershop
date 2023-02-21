
import React from 'react'
import "./App.css"
import NavBar from "./components/NavBar"
import Inicio from "./components/Inicio"
import Cart from "./components/Cart"
import ItemDetailContainer from './components/ItemDetailContainer'
import ItemListContainer from "./components/ItemListContainer"
import { BrowserRouter, Routes, Route} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route exact path="/" element={<Inicio />}/>
      <Route exact path="/productos" element={<ItemListContainer />}/>
      <Route exact path='/category/:categoryId' element={<ItemListContainer />}/>
      <Route exact path='/detalle/:detalleId' element={<ItemDetailContainer />}/>
      <Route exact path="/cart" element={<Cart />}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
