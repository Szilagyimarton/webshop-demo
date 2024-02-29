import { BrowserRouter, Route, Routes } from "react-router-dom";

import './App.css'
import Home from "./components/Home";
import Categories from "./components/Categories";
import Cart from "./components/Cart";
import NavBar from "./components/NavBar";
import { createContext, useEffect, useState } from "react";
import Checkout from "./components/Checkout";

export const CartContext = createContext()
function App() {
  const [products, setProducts] = useState(null)
  const [selectedCat,setSelectedCat] = useState()
  const [cart, setCart] = useState([])
  console.log(cart)

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data =>{ 
        setProducts(data)
      })
  }, [])

  return (
    <>
    <CartContext.Provider value={{cart,setCart}} >
     <BrowserRouter >
     <NavBar setSelectedCat={setSelectedCat}/>
      <Routes>
        <Route path="/"  element={<Home products={products}/>}/>
         <Route path="/categories"  element={<Categories products={products} selectedCat={selectedCat}/>}/>
         <Route path="/cart"  element={<Cart/>}/> 
         <Route path="/checkout" element={<Checkout/>}/>
      </Routes>
    </BrowserRouter>
         </CartContext.Provider>
    </>
  )
}

export default App
