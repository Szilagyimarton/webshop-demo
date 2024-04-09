import RemoveItemFromCart from "./functions/RemoveItemFromCart"
import { CartContext } from "../App"
import { useContext, useState } from "react"
import handleQuantity from "./functions/handleQuantity"
import {  Button, ListGroup } from "react-bootstrap"

function CartElement({product}) {
const { cart, setCart} = useContext(CartContext)
const [quant, setQuantity] = useState(1)
   
  return (
 
        <div className="cartElement">
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-center"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">{product.item.title}</div>
          {product.item.price * product.quantity}$
        </div>
       
      <div className="quantityCart">
        <Button variant="outline-danger" onClick={(e) => handleQuantity(e, cart, setCart, product.item,setQuantity)}>-</Button>
        <p>{product.quantity}</p>
        <Button variant="outline-primary" onClick={(e) => handleQuantity(e, cart, setCart, product.item, setQuantity)}>+</Button>
   
        <span  className="material-symbols-outlined" onClick={() => RemoveItemFromCart(product.item, cart, setCart)}>delete</span>
      </div>
      </ListGroup.Item>
      </div>
  )
}

export default CartElement