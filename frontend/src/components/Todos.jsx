import React from 'react'

function Todos({ todos }) {
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
            {
                todos.map((todo) => {
                    return (
                        <div key={todo._id}>
                            <h2>{todo.title}</h2>
                            <h2>{todo.description}</h2>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Todos
