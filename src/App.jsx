import { useState } from 'react'
import './App.css'
import Reader from './component/Reader'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Reader />
  )
}

export default App
