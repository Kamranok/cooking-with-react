import React, { useState, useContext } from 'react'
import { ThemeContext } from '../App'

export default function CounterHooks({ initialCount }) {
  const [count, setCount] = useState(initialCount)
  const style = useContext(ThemeContext)

  const decrement = () => setCount(prevCount => prevCount - 1)
  const increment = () => setCount(prevCount => prevCount + 1)
  return (
    <>
      <button style={style} onClick={increment}>-</button>
      <span>{count}</span>
      <button style={style} onClick={decrement}>+</button>
    </>
  )
}