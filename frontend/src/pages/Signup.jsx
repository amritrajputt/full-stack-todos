import React, { useState, useRef, useEffect } from 'react'
import axios from "axios"
import { useNavigate } from "react-router-dom";
function Signup() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const inputRef = useRef()

    useEffect(() => {
        inputRef.current.focus()
    }, [])

    const navigate = useNavigate();
    async function signup() {
        try {
            const res = await axios.post(
                "http://localhost:3000/api/v1/user/signup",
                {
                    name: name,
                    email: email,
                    password: password
                }
            )
            console.log("success", res.data);
            setName("")
            setEmail("")
            setPassword("")
            navigate("/signin")
        } catch (error) {
            console.error("Error", error.res?.data || error.message);
        }
    }
    function redirect() {
        navigate("/signin")
    }
    return (
        <div className='flex justify-center h-full align-center' >
            <div>
                <h2 className='text-4xl m-6'>Signup</h2>
                <input ref={inputRef} className='rounded-lg p-2 m-2 border-2  focus:outline-none focus:ring-2 focus:ring-blue-500' type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='name' /> <br />
                <input className='rounded-lg p-2 m-2 border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500' type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='email' /><br />
                <input className='rounded-lg p-2 m-2 border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500' type='text' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='password' /><br />
                <button className='rounded-lg p-2 m-2 border-2 hover:bg-blue-600 bg-blue-500 text-white border-blue-500' onClick={signup}>Signup</button>
                <button className='rounded-lg p-2 m-2 border-2 hover:bg-blue-600 bg-blue-500 text-white border-blue-500' onClick={redirect}>Already an user</button>

            </div>
        </div>
    )
}

export default Signup
