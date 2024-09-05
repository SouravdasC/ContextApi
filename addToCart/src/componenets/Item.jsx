import { useContext } from "react"
import { CartContext, useCart } from "../context/Cart"


function Item({ name, price }) {
    // const cart = useContext(CartContext);
    // console.log(cart);
    const cart = useCart();
    
  return (
      <div>
          <h2>{name}</h2>
          <p>Pirce : ${price}</p>
          <button onClick={() => cart.setItems([...cart.items, {name: name, price: price}])}>Add To Cart</button>
      </div>
  )
}
export default Item