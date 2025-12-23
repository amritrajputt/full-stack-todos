import React, { useState } from 'react'
import axios from "axios"
function Signup() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function signup() {
        const data = {
            name,
            email,
            password
        }
        console.log(data);
        
    }
    return (
        <div className='flex justify-center h-full align-center' >
            <div>
                <h2 className='text-4xl m-6'>Signup</h2>
                <input className='rounded-lg p-2 m-2 border-2 border-slate-400' type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='name' /> <br />
                <input className='rounded-lg p-2 m-2 border-2 border-slate-400' type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='email' /><br />
                <input className='rounded-lg p-2 m-2 border-2 border-slate-400' type='text' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='password' /><br />
                <button className='rounded-lg p-2 m-2 border-2 hover:bg-blue-600 bg-blue-500 text-white border-blue-500' onClick={signup}>Signup</button>
            </div>
        </div>
    )
}

export default Signup
