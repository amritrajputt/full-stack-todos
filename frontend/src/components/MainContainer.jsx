import React, { useState } from 'react'

function MainContainer() {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const addtodo =async () => {
        try {
                    const res = await fetch("http://localhost:3000/api/v1/todo/addtodo", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            title,
                            description
                        })
                    });
        
                    const data = await res.json();
                    console.log(data);
                    
                } catch (err) {
                    console.error("Todo not added", err);
                }
     }
     
    return (
        <div>
            <h2 className='text-3xl text-pink'>Add todos</h2>

            <input className='text-md p-1 m-2 rounded-md' onChange={(e) => {
                const value = e.target.value
                setTitle(e.target.value)
            }} type="text" placeholder='title' />

            <br />


            <input className='text-md p-1 m-2 rounded-md' onChange={(e) => {
                const value = e.target.value
                setTitle(e.target.value)
            }} type="text" placeholder='description' />

            <br />


            <button className='text-sm p-1 m-2 rounded-md' 
               onClick={addtodo}>Add a todo</button>
        </div>
    )
}

export default MainContainer;
