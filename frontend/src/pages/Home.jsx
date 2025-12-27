import React, { useState, useEffect, useRef } from 'react'
import TodoItem from '../components/TodoItem'
import TodoList from '../components/TodoList'
import axios from 'axios'
import Context from '../context/Context'

function Home() {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [todos, setTodos] = useState([]);
    const inputRef = useRef()


    useEffect(() => {
        inputRef.current.focus()
    }, [])

    useEffect(() => {
        async function fetchTodos() {
            try {
                const res = await axios.get(
                    "http://localhost:3000/api/v1/user/all",
                    { withCredentials: true }
                );

                setTodos(res.data.todos);
                console.log("Todos fetched");
            } catch (err) {
                console.error(err.response?.data || err.message);
            }
        }
        fetchTodos();
    }, []);

    async function addtodo() {
        try {
            const res = await axios.post(
                "http://localhost:3000/api/v1/todo/addtodo", {
                title: title,
                description: description,
            },
                { withCredentials: true }
            )
            setTodos([...todos, res.data.todo])
            setTitle("")
            setDescription("")
            inputRef.current.focus()
        } catch (error) {
            console.error("Error:", error.response?.data || error.message);
        }

    }

    async function deletetodo(id) {
        try {
            await axios.delete(
                `http://localhost:3000/api/v1/todo/deletetodo/${id}`,
                { withCredentials: true }
            );

            console.log("Todo deleted:", id);
            setTodos(todos.filter(todo => todo._id != id))
        } catch (err) {
            console.error(err.response?.data || err.message);
        }
    }

    async function updatetodo(id, newTitle) {
        const res = await axios.patch(
            `http://localhost:3000/api/v1/todo/updatetodo/${id}`,
            { title: newTitle },
            { withCredentials: true }
        );

        setTodos(
            todos.map(todo =>
                todo._id === id ? res.data.updatedTodo : todo
            )
        );
    }

    return (
        <>
            <div className='flex justify-center items-center'>
                <div >
                    <h2 className='text-4xl p-6 m-2'>Add todo</h2>
                    <input ref={inputRef} className="rounded-lg p-2 mb-3 w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder='title' /><br />
                    <textarea className="rounded-lg p-2 mb-3 w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder='description' />
                    <button className="rounded-lg p-2 mb-3 bg-blue-500 text-white border  border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" onClick={addtodo}>Add-todo</button>
                </div>
            </div>

            <Context.Provider
                value={{
                    todos,
                    onDelete: deletetodo,
                    onUpdate: updatetodo,
                }}
            >
                <TodoList />
            </Context.Provider>
        </>
    )
}

export default Home
