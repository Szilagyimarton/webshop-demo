import { Link, useNavigate } from "react-router-dom"
import ShowCategories from "./ShowCategories"
import {  useContext, useState } from "react"
import { CartContext } from "../App"
import totalPrice from "./functions/totalPrice"
import Button from "react-bootstrap/esm/Button"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

//import './NavBar.css'
import 'bootstrap/dist/css/bootstrap.css';



function NavBar({ setSelectedCat }) {

  const {cart, setCart} = useContext(CartContext)
  const navigate =useNavigate()
  const handleClick = (eventKey) => {
    setSelectedCat(eventKey)
    navigate("/categories")
   }
  return (
    <Navbar bg="primary" data-bs-theme="dark" className="justify-content-center">
      <Nav > 
       <Nav.Link onClick={() => navigate("/")}>Home</Nav.Link>
        <NavDropdown  title="Categories" onSelect={handleClick}>
          <NavDropdown.Item onClick={handleClick} eventKey={"electronics"}>Electronics</NavDropdown.Item>
          <NavDropdown.Item onClick={handleClick} eventKey={"jewelery"}>Jewelery</NavDropdown.Item>
          <NavDropdown.Item onClick={handleClick} eventKey={"men's clothing"}>Men's Clothing</NavDropdown.Item>
          <NavDropdown.Item onClick={handleClick} eventKey={"women's clothing"}>Women's clothing</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link onClick={()=> navigate("/cart")}>Cart</Nav.Link>
 {/*        <Nav.Link className="totalNavbar" disabled>Total: {totalPrice(cart)}$</Nav.Link>    */}
      </Nav> 
      </Navbar>
 
  )
}

export default NavBar