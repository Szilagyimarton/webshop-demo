
function RemoveItemFromCart(product, cart, setCart) {
 
  const filteredProducts = cart.filter(el => el.item.id !== product.id)
 if(filteredProducts.length === 0){
   setCart([])
}else{
   setCart(filteredProducts)
 }
}

export default RemoveItemFromCart