import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './copmponents/Header/Header'
import Products from './copmponents/Products/Products'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Header></Header>
        <Products></Products>
       </div>
    </>
  )
}

export default App
