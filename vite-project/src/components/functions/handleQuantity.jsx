export default function handleQuantity  (e,cart,setCart,product)  {
  if(e.target.className === "minus"){
    
    setCart(cart.map((cartEl) => {
       return cartEl.item.id === product.id
      ?
      { ...cartEl, quantity: cartEl.quantity === 1 ? cartEl.quantity : cartEl.quantity -1 }
      :
      cartEl
    }))
  }
  if(e.target.className === "plus"){
    setCart(cart.map((cartEl) => {
      console.log(product.id)
      return cartEl.item.id === product.id
      ?
      { ...cartEl, quantity: cartEl.quantity + 1 }
      :
      cartEl
    }))
  }
}