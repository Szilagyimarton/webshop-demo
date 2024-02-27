import { useContext } from 'react'
import './Product.css'
import { CartContext } from '../App'
import removeItemFromCart from './functions/removeItemFromCart.jsx'
import handleQuantity from './functions/handleQuantity.jsx'


function Product({product}) {

const {cart, setCart} = useContext(CartContext)

 let quantity = ""
const isAdded = cart.find(el => {
  if(el.item.id === product.id){
    quantity = el.quantity
    return true
  }
  else return false
})
const addToCart = () => {
  if(!isAdded) setCart(prev => [...prev, {item: product, quantity: 1}])
  else{ 
    removeItemFromCart(product, cart, setCart) 
  }

}

  

  return (
    <div className="product">
      <h1>{product.title}</h1>
      <img src={product.image} alt={product.title} />
      <h2>{product.price}$</h2>
      <p>{product.description}</p>
      <span className="material-symbols-outlined" onClick={addToCart}>{!isAdded  ? "add_shopping_cart" : "remove_shopping_cart"}</span>
      {isAdded ? 
      <div className='quantity'>
        <button className="minus" onClick={(e) => handleQuantity(e, cart, setCart, product)}>-</button>
        <p>{quantity}</p>
        <button className="plus" onClick={(e) => handleQuantity(e, cart, setCart, product)}>+</button>
      </div>
      : null}
    </div>
  )
}


export default Product