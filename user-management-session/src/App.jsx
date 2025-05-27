import { useState } from 'react'
import './App.css'
import CreateUser from './Components/CreateUser/CreateUser'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CreateUser/>
    </>
  )
}

export default App
