import React, { useState } from 'react'
import axios from "axios"
function Signin() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    async function signin() {
        try {
            const res = await axios.post(
                "http://localhost:3000/api/v1/user/signin",
                {
                    email: email,
                    password: password
                }
            )
            console.log("success", res.data);
            setEmail("")
            setPassword("")
        } catch (error) {
            console.error("Error", error.res?.data || error.message);
        }

    }
    return (
        <div className='flex justify-center h-full align-center' >
            <div>
                <h2 className='text-4xl m-6'>Signin</h2>
                <input className='rounded-lg p-2 m-2 border-2 border-slate-400' type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='email' /><br />
                <input className='rounded-lg p-2 m-2 border-2 border-slate-400' type='text' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='password' /><br />
                <button className='rounded-lg p-2 m-2 border-2 hover:bg-blue-600 bg-blue-500 text-white border-blue-500' onClick={signin}>Signin</button>
            </div>
        </div>
    )
}

export default Signin
