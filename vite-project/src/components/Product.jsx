import { useContext, useEffect, useState } from 'react'
import './Product.css'
import { CartContext } from '../App'

import handleQuantity from './functions/handleQuantity.jsx'
import Button from 'react-bootstrap/Button';


function Product({product}) {
  const {cart, setCart} = useContext(CartContext)
  const [isAdded, setIsAdded] = useState(false)
  const [quantity, setQuantity] = useState(null)

  useEffect(() => {
    const found = cart.some(el => el.item.id === product.id);
    cart.find(el => {
      if(el.item.id === product.id){
        console.log(el)
        setQuantity(el.quantity)
      }
    })
    setIsAdded(found);
  },[cart,product.id])

  const addToCart = () => {
    if(!isAdded) setCart(prev => [...prev, {item: product, quantity: 1}])
  }
    return (
      <div className="product">
        <h1>{product.title}</h1>
        <img src={product.image} alt={product.title} />
        <h2>{product.price}$</h2>
        <p>{product.description}</p>
        <div className='quantity'>
        {!isAdded 
        ? 
          <Button variant="primary" onClick={addToCart}>Add</Button>
        :
           <><Button variant='outline-danger' onClick={e => handleQuantity(e,cart,setCart,product,setQuantity)}>-</Button><p>{quantity}</p><Button variant='outline-primary' onClick={e => handleQuantity(e, cart, setCart, product,setQuantity)}>+</Button></>
          }
          </div>
        </div>
    )
}


export default Product