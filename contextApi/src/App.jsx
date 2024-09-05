import { useState, useContext } from 'react'
import './App.css'
import Counter from './components/Counter'
import { CounterContext } from './context/Context'

function App() {
  
  const CounterState = useContext(CounterContext)
// console.log(CounterState)
  return (
    <>
      <div>
        <h1>Counter is { CounterState.value }</h1>
        <Counter />
      </div>
    </>
  )
}

export default App
