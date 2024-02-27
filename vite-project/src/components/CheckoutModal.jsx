import Dialog from '@mui/material/Dialog';
import { useNavigate } from 'react-router';
import { CartContext } from '../App';
import { useContext } from 'react';
import { Button, DialogTitle, List, ListItem } from '@mui/material';

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
    <Dialog open={open} sx={{width:2000}}>
      <DialogTitle>Summary:</DialogTitle>
      <DialogTitle>Delivery details </DialogTitle>
      <List className='deliveryData'>
        <ListItem>First Name: {state.firstName}</ListItem>
        <ListItem>Last Name: {state.lastName}</ListItem>
        <ListItem>Country: {state.country}</ListItem>
        <ListItem>ZIP: {state.zip}</ListItem>
        <ListItem>Address: {state.address}</ListItem>
      </List>
      <DialogTitle>Your products</DialogTitle>
      <List className='orderedProducts'>{cart.map((el,i) => <ListItem key={i}>{el.item.title} x {el.quantity}</ListItem>)}</List>

      <Button onClick={handleSend }>Send</Button>
      <Button onClick={handleBack }>Back</Button>
    </Dialog>
  )
}

export default CheckoutModal