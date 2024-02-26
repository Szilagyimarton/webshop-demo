import Dialog from '@mui/material/Dialog';
import { useNavigate } from 'react-router';
import { CartContext } from '../App';
import { useContext } from 'react';

function CheckoutModal({open, setShowModal, state}) {
  const navigate = useNavigate()
  const {cart, setCart} = useContext(CartContext)
  const handleSend = () => {
    setShowModal(false)
    setCart([])
    navigate("/")
  }
  const handleBack = () => {
    setShowModal(false)
  }
  return (
    <Dialog open={open}>
      <h1>Summary:</h1>
      <h2>Delivery details </h2>
      <ul className='deliveryData'>
        <li>First Name: {state.firstName}</li>
        <li>Last Name: {state.lastName}</li>
        <li>Country: {state.country}</li>
        <li>ZIP: {state.zip}</li>
        <li>Address: {state.address}</li>
      </ul>
      <h3>Your products</h3>
      <ul className='orderedProducts'>{cart.map((el,i) => <li key={i}>{el.item.title} x {el.quantity}</li>)}</ul>

      <button onClick={handleSend }>Send</button>
      <button onClick={handleBack }>Back</button>
    </Dialog>
  )
}

export default CheckoutModal