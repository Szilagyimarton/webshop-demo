import { Link } from "react-router-dom"
import ShowCategories from "./ShowCategories"
import {  useContext, useState } from "react"
import { CartContext } from "../App"
import totalPrice from "./functions/totalPrice"

import './NavBar.css'


function NavBar({ setSelectedCat }) {
  const [showCats,setShowCats] = useState(false)
  const {cart, setCart} = useContext(CartContext)

  return (
    <div className="navBar">
     <Link to="/">Home</Link>
     <Link to="/categories" onMouseEnter={() => setShowCats(true)}>Categories</Link>
     <Link to="/cart">Cart</Link>
     <ShowCategories showCats={showCats} setShowCats={setShowCats}  setSelectedCat={setSelectedCat}/> 
     <p className="totalNavbar">Total: {totalPrice(cart)}$</p>
    </div>
  )
}

export default NavBar