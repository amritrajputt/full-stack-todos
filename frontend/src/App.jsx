import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import TodoItem from './components/TodoItem'
import TodoList from './components/TodoList'
import axios from 'axios'
import Home from './pages/Home'
import { Outlet } from "react-router-dom";
function App() {
  
  return (
    <>
 
    <Outlet/>
    </>
  )
}

export default App
