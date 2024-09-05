import { useContext } from "react"
import { CounterContext } from "../context/Context"


function Counter() {
    const counter = useContext(CounterContext)
  return (
      <div>
          <button onClick={() => counter.setValue(counter.value + 1)}>Increment</button>
          <button onClick={() => counter.setValue(counter.value - 1)}>Decrement</button>
      </div>
  )
}
export default Counter