import React, { useContext, useReducer, useState } from 'react'
import { CartContext } from '../App'
import totalPrice from './functions/totalPrice'
import CheckoutModal from './CheckoutModal'

const initalState = {
  firstName : "" ,
  lastName: "" ,
  country: "",
  zip: "",
  address: "",
  checkbox: false
}

const reducer = (state,action) => {
  switch(action.type){
    case "handleInputText":
      return {
        ...state,
        [action.field] : action.payload

      }
    case "checkbox":
      return {
        ...state,
        checkbox: !state.checkbox

      }
  }
}

function Checkout() {

  const { cart, setCart } = useContext(CartContext)
  const [ state, dispatch] = useReducer(reducer,initalState)
  const [showModal, setShowModal] = useState(false)

  const handleInputChange = (e) => {
    dispatch({
      type: "handleInputText",
      field: e.target.name,
      payload: e.target.value
    })
  }

  const handleCheckbox = () => {
    dispatch({
      type: "checkbox"
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setShowModal(true)
  }
  return (
    <div className='checkout'>
    <div className='cartInfo'>
      <ul>Your products: {cart.map((el, i) => <li key={i}>{el.item.title} x {el.quantity}</li>)}</ul>
      <p>Total: {totalPrice(cart)}$ </p>
    </div>
    <form className='shippingInfo'>
      <input type='text' id='firstName' name='firstName' placeholder='First Name' onChange={handleInputChange}/>
      <input type='text' id='lastName' name='lastName' placeholder='Last Name' onChange={handleInputChange}/>
      <input type='text' id='country' name='country' placeholder='Country' onChange={handleInputChange}/>
      <input type='text' id='zip' name='zip' placeholder='ZIP' onChange={handleInputChange} />
      <input type='text' id='address' name='address' placeholder='Address' onChange={handleInputChange}/>
      <input type='checkbox' id="checkbox" name='checkbox' onChange={handleCheckbox} />
      <button onClick={handleSubmit}>Send</button>
    </form>
      <CheckoutModal open={showModal} setShowModal={setShowModal} state={state}/>
      </div>
  )
}

export default Checkout