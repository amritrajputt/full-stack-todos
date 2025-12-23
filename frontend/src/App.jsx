import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import TodoItem from './components/TodoItem'
import TodoList from './components/TodoList'
import axios from 'axios'

function App() {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  async function addtodo() {
    try {
      const res = await axios.post(
        "http://localhost:3000/api/v1/todo/addtodo", {
        title: title,
        description: description,
      },
      { withCredentials: true }
      )
      console.log("Added:", response.data);
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
    }
  }
  return (
    <>
      <div className='flex justify-center align-middle'>
        <div >
          <h2 className='text-4xl p-6 m-2'>Add todo</h2>
          <input className="rounded-lg p-2 mb-3 w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder='title' /><br />
          <textarea className="rounded-lg p-2 mb-3 w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder='description' />
          <button className="rounded-lg p-2 mb-3 bg-blue-500 text-white border  border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" onClick={addtodo}>Add-todo</button>
        </div>
      </div>
      <TodoItem />
      <TodoList />
      
    </>
  )
}

export default App
