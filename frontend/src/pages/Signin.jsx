import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from "react-router-dom";
function Signin() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
     const navigate = useNavigate();
    async function signin() {
        try {
            const res = await axios.post(
                "http://localhost:3000/api/v1/user/signin",
                {
                    email: email,
                    password: password
                },
                { withCredentials: true }

            )
            console.log("success", res.data);
            setEmail("")
            setPassword("")
            navigate("/addtodo")
        } catch (error) {
            console.error("Error", error.response?.data || error.message);
        }

    }
    function Register(){
        navigate("/signup")
    }
    return (
        <div className='flex justify-center h-full items-center' >
            <div>
                <h2 className='text-4xl m-6'>Signin</h2>
                <input className='rounded-lg p-2 m-2 border-2 border-slate-400' type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='email' /><br />
                <input className='rounded-lg p-2 m-2 border-2 border-slate-400' type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='password' /><br />
                <button className='rounded-lg p-2 m-2 border-2 hover:bg-blue-600 bg-blue-500 text-white border-blue-500' onClick={signin}>Signin</button>
                  <button className='rounded-lg p-2 m-2 border-2 hover:bg-blue-600 bg-blue-500 text-white border-blue-500' onClick={Register}>Register</button>
            </div>
        </div>
    )
}

export default Signin
