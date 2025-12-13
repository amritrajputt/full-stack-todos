import React, { useState } from 'react';

function Signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = async () => {
        try {
            const res = await fetch("http://localhost:3000/api/v1/user/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name,
                    email,
                    password
                })
            });

            const data = await res.json();
            console.log(data);
        } catch (err) {
            console.error("Signup failed", err);
        }
    };

    return (
        <div>
            <h2 className="text-3xl text-pink-500">Signup</h2>

            <input
                className="text-md p-1 m-2 rounded-md"
                type="text"
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
            />

            <br />

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
                onClick={handleSignup}
            >
                Signup
            </button>
        </div>
    );
}

export default Signup;
