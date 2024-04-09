
import { useNavigate } from 'react-router';
import { CartContext } from '../App';
import { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ListGroup from 'react-bootstrap/ListGroup';



function CheckoutModal({show, setShowModal, state}) {
  const navigate = useNavigate()
  const {cart, setCart} = useContext(CartContext)
  const [send, setSend] = useState(false)
  const handleSend = () => {
    setCart([])
    setSend(true)
    setTimeout(() => {
      setShowModal(false)
      navigate("/")
    },1500)
  }
  const handleBack = () => {
    setShowModal(false)
  }
  return (
    <Modal show={show} size="lg" centered >
      <Modal.Header>
        <Modal.Title>{!send ? "Summary:" : null}</Modal.Title>
        <Modal.Title>{!send ? "Delivery details" : null }</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      {!send ? 
        <ListGroup className='deliveryData'>
        <ListGroup.Item>First Name: {state.firstName}</ListGroup.Item>
        <ListGroup.Item>Last Name: {state.lastName}</ListGroup.Item>
        <ListGroup.Item>Country: {state.country}</ListGroup.Item>
        <ListGroup.Item>ZIP: {state.zip}</ListGroup.Item>
        <ListGroup.Item>Address: {state.address}</ListGroup.Item>
      </ListGroup>
        :
        "Thanks for your order!" }

      {!send ? <><Modal.Title>Your products</Modal.Title><ListGroup className='orderedProducts'>{cart.map((el, i) => <ListGroup.Item key={i}>{el.item.title} x {el.quantity}</ListGroup.Item>)}</ListGroup></>
      : null}
     </Modal.Body>
     <Modal.Footer>
{   !send ?
      <><Button variant='primary' onClick={handleSend}>Send</Button><Button variant="secondary" onClick={handleBack}>Back</Button></> : null}
     </Modal.Footer> 
    </Modal>
  )
}

export default CheckoutModal