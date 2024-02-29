import RemoveItemFromCart from "./functions/RemoveItemFromCart"
import { CartContext } from "../App"
import { useContext, useState } from "react"
import handleQuantity from "./functions/handleQuantity"
import {  Button, ListGroup } from "react-bootstrap"

function CartElement({product}) {
const { cart, setCart} = useContext(CartContext)
const [quant, setQuantity] = useState(1)
   
  return (
   /*  <div className="cartElement">
      <h4>{product.item.title}</h4>
      <h5>{product.item.price}$</h5>
      <div className="quantityCart">
        <button className="minus" onClick={(e) => handleQuantity(e,cart,setCart,product.item)}>-</button>
        <p>{product.quantity}</p>
        <button className="plus" onClick={(e) => handleQuantity(e,cart,setCart,product.item)}>+</button>
      </div>
      <span className="material-symbols-outlined" onClick={() => removeItemFromCart(product.item,cart,setCart)}>remove_shopping_cart</span>
    </div> */
   
      /*  <div className="cartElement">
         <h4>{product.item.title}</h4>
         <h5>{product.item.price}$</h5>
         <div className="quantityCart">
           <button className="minus" onClick={(e) => handleQuantity(e,cart,setCart,product.item)}>-</button>
           <p>{product.quantity}</p>
           <button className="plus" onClick={(e) => handleQuantity(e,cart,setCart,product.item)}>+</button>
         </div>
         <span className="material-symbols-outlined" onClick={() => removeItemFromCart(product.item,cart,setCart)}>remove_shopping_cart</span>
       </div> */
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
        <Button variant="outline-secondary" onClick={(e) => handleQuantity(e, cart, setCart, product.item,setQuantity)}>-</Button>
        <p>{product.quantity}</p>
        <Button variant="outline-secondary" onClick={(e) => handleQuantity(e, cart, setCart, product.item, setQuantity)}>+</Button>
   
        <span className="material-symbols-outlined" onClick={() => RemoveItemFromCart(product.item, cart, setCart)}>delete</span>
      </div>
      </ListGroup.Item>
      </div>
  )
}

export default CartElement