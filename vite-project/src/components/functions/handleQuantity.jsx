import RemoveItemFromCart from "./RemoveItemFromCart"


export default function handleQuantity  (e,cart,setCart,product,setQuantity)  {   
  if(e.target.innerHTML === "-"){
    setCart(prevCart => {
      const updatedCart = prevCart.map(cartEl => {
        if (cartEl.item.id === product.id && cartEl.quantity === 1) {
          return null
        } else if (cartEl.item.id === product.id) {
          setQuantity(prev => prev -1 )
          return { ...cartEl, quantity: cartEl.quantity - 1 };
        } else {
          return cartEl;
        }
      });
      return updatedCart.filter(cartEl => cartEl !== null);
    });
  }
  if(e.target.innerHTML === "+"){
    setCart(cart.map((cartEl) => {
      if(cartEl.item.id === product.id){
        setQuantity(prev => prev + 1 )
        return { ...cartEl, quantity: cartEl.quantity + 1 }
      }else{
      return cartEl
     }
    }))
  }

}
