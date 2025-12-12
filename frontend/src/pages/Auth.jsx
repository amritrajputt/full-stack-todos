import React, { useState } from 'react'

function Auth() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const signup = async () => {

    }

    return (
        <div>
            <h1 className='text-3xl'>Signup</h1>
            <input className='p-1 m-3 rounded-md' type="text" placeholder='name' /><br />
            <input className='p-1 m-3 rounded-md' type="text" placeholder='email' /><br />
            <input className='p-1 m-3 rounded-md' type="text" placeholder='password' /><br />
            <button className='p-1 m-3 border-width: 5px rounded-md' onClick={signup}>Signup</button>
        </div>
    )
}

export default Auth
