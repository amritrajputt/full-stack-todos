import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainContainer from './components/MainContainer'
import Todos from './components/Todos'
import Signup from './components/Signup'
import Signin from './components/Signin'

function App() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    fetch("url")
      .then(async (res) => {
        const json = await res.json
        setTodos(json.todos)
      })
  }, [])
  return (
    <>
      <Signup />
      
    </>
  )
}

export default App
