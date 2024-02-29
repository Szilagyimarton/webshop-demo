import { useContext, useEffect, useState } from 'react'
import { CartContext } from '../App'
import CartElement from './CartElement'
import { useNavigate } from 'react-router'
import totalPrice from './functions/totalPrice'

import './Cart.css'
import { Button, ListGroup } from 'react-bootstrap'

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
   navigate("/")
  }else{
     setCheckout(true)
  }
}
  
return (
    <div className='cart'>
      <div className='cartElements'>
        <h3>Your orders:</h3>
        <ListGroup as="ol" numbered>
          {cart.map((el,i) =><CartElement key={i} product={el} />)}
        </ListGroup>
      </div>
      <div className='totalPrice'>
        <p>Total: {total}$ </p>
      </div>
      <div className='goToCheckOut'>
        <p className='error' style={{visibility: cartIsEmpty ? "visible" : "hidden"}}>Your cart is empty!</p>
        <Button variant="primary" onClick={handleCheckout}>{cartIsEmpty ? "Back to the shop" :  "Go To Checkout"}</Button>
      </div>
      </div>
  )
}

export default Cart