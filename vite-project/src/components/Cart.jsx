import { useContext, useEffect, useState } from 'react'
import { CartContext } from '../App'
import CartElement from './CartElement'
import { useNavigate } from 'react-router'
import totalPrice from './functions/totalPrice'

function Cart() {
const { cart, setCart} = useContext(CartContext)
const [checkout, setCheckout] = useState(false)
const navigate = useNavigate()

if(checkout) navigate("/checkout")
const total = totalPrice(cart)
  
return (
    <div className='cart'>
      <div className='cartElements'>
        {cart.map((el,i) =><CartElement key={i} product={el} />)}
      </div>
      <div className='totalPrice'>
        <p>Total: {total } </p>
      </div>
      <div className='goToCheckOut'>
        <button onClick={() => setCheckout(true)}>Go To Checkout</button>
      </div>
      </div>
  )
}

export default Cart