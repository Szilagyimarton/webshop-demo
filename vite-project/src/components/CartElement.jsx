import removeItemFromCart from "./functions/removeItemFromCart"
import { CartContext } from "../App"
import { useContext } from "react"

function CartElement({product}) {
const { cart, setCart} = useContext(CartContext)

const handleQuantity = (e) => {
  if(e.target.className === "minus"){
    
    setCart(cart.map((cartEl) => {
       return cartEl.item.id === product.item.id
      ?
      { ...cartEl, quantity: cartEl.quantity === 1 ? cartEl.quantity : cartEl.quantity -1 }
      :
      cartEl
    }))
  }
  if(e.target.className === "plus"){
    setCart(cart.map((cartEl) => {
      return cartEl.item.id === product.item.id
      ?
      { ...cartEl, quantity: cartEl.quantity + 1 }
      :
      cartEl
    }))
  }
}

  return (
    <div>
      <h1>{product.item.title}</h1>
      <h2>{product.item.price}$</h2>
      <div className="quantity">
        <button className="minus" onClick={handleQuantity}>-</button>
        <p>{product.quantity}</p>
        <button className="plus" onClick={handleQuantity}>+</button>
      </div>
      <span className="material-symbols-outlined" onClick={() => removeItemFromCart(product.item,cart,setCart)}>remove_shopping_cart</span>
    </div>
  )
}

export default CartElement