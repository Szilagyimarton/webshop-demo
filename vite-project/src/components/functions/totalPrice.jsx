export default function totalPrice (cart) {
 return cart.reduce((prev,curr) => prev + (curr.item.price * curr.quantity),0) 
}