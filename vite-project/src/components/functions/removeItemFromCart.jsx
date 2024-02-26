function removeItemFromCart(product, cart, setCart) {

  const filteredProducts = cart.filter(el => el.item.id !== product.id)
  setCart(filteredProducts)
 
}

export default removeItemFromCart