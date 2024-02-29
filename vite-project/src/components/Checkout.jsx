import { useContext, useReducer, useState } from 'react'
import { CartContext } from '../App'
import totalPrice from './functions/totalPrice'
import CheckoutModal from './CheckoutModal'
import Form from 'react-bootstrap/Form';
import './Checkout.css'
import Button from 'react-bootstrap/Button'
import { ListGroup } from 'react-bootstrap';
import CartElement from './CartElement';
import Alert from 'react-bootstrap/Alert';

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


  const [ alert, setAlert] = useState(false)

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
      setAlert(true)
    }else{
      setAlert(false)
      setShowModal(true)
    }
  }
  return (
    <div className='checkout'>
    <div className='cartInfo'>
      <h4>Your products: </h4>
      <ListGroup as="ol" numbered>{cart.map((el, i) => <CartElement key={i} product={el}/>)}</ListGroup>
      <p>Total: {totalPrice(cart)}$ </p>
    </div>
    <Form className='shippingInfo'>
      <Form.Control type='text' id='firstName' name='firstName' placeholder='First Name' onChange={handleInputChange}/>
      <Form.Control type='text' id='lastName' name='lastName' placeholder='Last Name' onChange={handleInputChange}/>
      <Form.Control type='text' id='country' name='country' placeholder='Country' onChange={handleInputChange}/>
      <Form.Control type='text' id='zip' name='zip' placeholder='ZIP' onChange={handleInputChange} />
      <Form.Control type='text' id='address' name='address' placeholder='Address' onChange={handleInputChange}/>
      <Form.Group className='checkboxDiv'>
        <Form.Check type='checkbox' id="checkbox" name='checkbox' onChange={handleCheckbox} required="required"/>
        <Form.Label htmlFor="checkbox">I checked my order!</Form.Label>
        </Form.Group>
    {  alert?<Alert variant='danger'  onClose={() => setAlert(false)} dismissible >All field is required!</Alert> : null}
      <Button variant="primary" onClick={handleSubmit}>Send</Button>
    
    </Form>
      <CheckoutModal show={showModal} setShowModal={setShowModal} state={state}/>
     </div>
  )
}

export default Checkout