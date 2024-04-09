import {  useNavigate } from "react-router-dom"
import {  useContext } from "react"
import { CartContext } from "../App"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.css';
import totalPrice from "./functions/totalPrice";
import { Container } from "react-bootstrap";

function NavBar({ setSelectedCat }) {
  const {cart, setCart} = useContext(CartContext)
  const navigate =useNavigate()
  const handleClick = (eventKey) => {
    setSelectedCat(eventKey)
    navigate("/categories")
   }
  return (
      <Navbar collapseOnSelect expand="lg" bg="primary" data-bs-theme='dark'>
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
        <Nav.Link onClick={() => navigate("/")}>Home</Nav.Link>
            <NavDropdown  title="Categories" onSelect={handleClick}>
                <NavDropdown.Item onClick={handleClick} eventKey={"electronics"}>Electronics</NavDropdown.Item>
                <NavDropdown.Item onClick={handleClick} eventKey={"jewelery"}>Jewelery</NavDropdown.Item>
                <NavDropdown.Item onClick={handleClick} eventKey={"men's clothing"}>Men's Clothing</NavDropdown.Item>
                <NavDropdown.Item onClick={handleClick} eventKey={"women's clothing"}>Women's clothing</NavDropdown.Item>
              </NavDropdown>
            <Nav.Link onClick={() => navigate("/cart")}>Cart</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link disabled>${totalPrice(cart)}</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar