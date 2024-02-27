import removeItemFromCart from "./functions/removeItemFromCart"
import { CartContext } from "../App"
import { useContext } from "react"
import handleQuantity from "./functions/handleQuantity"

function CartElement({product}) {
const { cart, setCart} = useContext(CartContext)
   
  return (
    <div className="cartElement">
      <h4>{product.item.title}</h4>
      <h5>{product.item.price}$</h5>
      <div className="quantity">
        <button className="minus" onClick={(e) => handleQuantity(e,cart,setCart,product.item)}>-</button>
        <p>{product.quantity}</p>
        <button className="plus" onClick={(e) => handleQuantity(e,cart,setCart,product.item)}>+</button>
      </div>
      <span className="material-symbols-outlined" onClick={() => removeItemFromCart(product.item,cart,setCart)}>remove_shopping_cart</span>
    </div>
  )
}

export default CartElement