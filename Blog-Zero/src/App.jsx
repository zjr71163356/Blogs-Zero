import { useState } from 'react'
import Home from './components/Home/Home'
import Header from "./components/Header/Header";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Home/>
    </>
  )
}

export default App
