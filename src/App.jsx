import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Car from '../CarProject/Car'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Car/>
    </>
  )
}

export default App
