import { useState } from 'react'

import './App.css'
import Item from './componenets/item'
import Cart from './componenets/Cart'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Item name='MacBook' price={100000} />
        <Item name='Pendrive' price={1000} />
        <Item name='Laptop' price={1500000} />
        <Cart />
      </div>
    </>
  )
}

export default App
