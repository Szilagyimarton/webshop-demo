import { useContext, useReducer, useState } from 'react'
import { CartContext } from '../App'
import totalPrice from './functions/totalPrice'
import CheckoutModal from './CheckoutModal'

import './Checkout.css'

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
  const [ filledForm, setFilledForm] = useState(true)

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
    if(state.checkbox === false || state.firstName === "" || state.lastName === "" || state.country === "" || state.zip === "" || state.address === ""){
      setFilledForm(false)
    }else{
      setFilledForm(true)
      setShowModal(true)
    }
  }
  return (
    <div className='checkout'>
    <div className='cartInfo'>
      <h4>Your products: </h4>
      <ul>{cart.map((el, i) => <li key={i}>{el.item.title} x {el.quantity}</li>)}</ul>
      <p>Total: {totalPrice(cart)}$ </p>
    </div>
    <form className='shippingInfo'>
      <input type='text' id='firstName' name='firstName' placeholder='First Name' onChange={handleInputChange}/>
      <input type='text' id='lastName' name='lastName' placeholder='Last Name' onChange={handleInputChange}/>
      <input type='text' id='country' name='country' placeholder='Country' onChange={handleInputChange}/>
      <input type='text' id='zip' name='zip' placeholder='ZIP' onChange={handleInputChange} />
      <input type='text' id='address' name='address' placeholder='Address' onChange={handleInputChange}/>
      <div className='checkboxDiv'>
        <input type='checkbox' id="checkbox" name='checkbox' onChange={handleCheckbox} required="required"/>
        <label htmlFor="checkbox">I checked my order!</label>
        </div>
      <p className='error' style={{visibility: !filledForm ? "visible" : "hidden"}}>All field is required!</p>
      <button onClick={handleSubmit}>Send</button>
    </form>
      <CheckoutModal open={showModal} setShowModal={setShowModal} state={state}/>
      </div>
  )
}

export default Checkout