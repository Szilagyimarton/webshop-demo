import { useContext, useEffect, useState } from 'react'
import { CartContext } from '../App'
import CartElement from './CartElement'
import { useNavigate } from 'react-router'
import totalPrice from './functions/totalPrice'

import './Cart.css'

function Cart() {
const { cart, setCart} = useContext(CartContext)
const [checkout, setCheckout] = useState(false)
const [cartIsEmpty, setCartIsEmpty] = useState(true)
const navigate = useNavigate()

if(checkout) navigate("/checkout")
const total = totalPrice(cart)
useEffect(() => {
   if(cart.length === 0){
     setCartIsEmpty(true)
    }else{
      setCartIsEmpty(false)
    }
},[cart])

const handleCheckout = () => {
  if(cartIsEmpty){
   return
  }else{
       setCheckout(true)
  }
}
console.log(cart.length)
  
return (
    <div className='cart'>
      <div className='cartElements'>
        <h3>Your orders:</h3>
        {cart.map((el,i) =><CartElement key={i} product={el} />)}
      </div>
      <div className='totalPrice'>
        <p>Total: {total}$ </p>
      </div>
      <div className='goToCheckOut'>
        <p className='error' style={{visibility: cartIsEmpty ? "visible" : "hidden"}}>Your cart is empty!</p>
        <button onClick={handleCheckout}>Go To Checkout</button>
      </div>
      </div>
  )
}

export default Cart