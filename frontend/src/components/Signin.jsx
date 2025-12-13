import React, { useState } from 'react';
import MainContainer from './MainContainer';

function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignin = async () => {
        try {
            const res = await fetch("http://localhost:3000/api/v1/user/signin", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email,
                    password
                })
            });

            const data = await res.json();
            console.log(data);
            <MainContainer/>
        } catch (err) {
            console.error("Signup failed", err);
        }
    };

    return (
        <div>
            <h2 className="text-3xl text-pink-500">Signin</h2>

            <input
                className="text-md p-1 m-2 rounded-md"
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
            />

            <br />

            <input
                className="text-md p-1 m-2 rounded-md"
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
            />

            <br />

            <button
                className="text-sm p-1 m-2 rounded-md"
                onClick={handleSignin}
            >
                Sign in
            </button>
        </div>
    );
}

export default Signup;
