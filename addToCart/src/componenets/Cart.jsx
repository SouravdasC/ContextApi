import { useContext } from "react"
import { CartContext, useCart } from "../context/Cart"


function Cart() {
    // const cart = useContext(CartContext);
    const cart = useCart();
    const total = cart.items.reduce((a, b) => a + b.price, 0)
  return (
      <div>
          <h1>Cart</h1>
          {
              cart && cart.items.map((data, index) => (
                  <li key={index}>
                  {data.name} - {data.price}
              </li>))
          }
          <h5>Bill : $ { total}</h5>
    </div>
  )
}
export default Cart