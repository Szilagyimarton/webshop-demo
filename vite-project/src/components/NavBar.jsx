import { Link } from "react-router-dom"
import ShowCategories from "./ShowCategories"
import {  useState } from "react"

import './NavBar.css'


function NavBar({ setSelectedCat }) {
  const [showCats,setShowCats] = useState(false)

  return (
    <div className="navBar">
     <Link to="/">Home</Link>
     <Link to="/categories" onMouseEnter={() => setShowCats(true)}>Categories</Link>
     <Link to="/cart">Cart</Link>
     <ShowCategories showCats={showCats} setShowCats={setShowCats}  setSelectedCat={setSelectedCat}/> 
    </div>
  )
}

export default NavBar