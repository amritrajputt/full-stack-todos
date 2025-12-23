import React, { useEffect, useState } from 'react'
import axios from "axios";
import TodoItem from './TodoItem';
function TodoList() {
    const [todos, setTodos] = useState([]);

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

    return (
        <div>
            {todos.map(todo => (
                <TodoItem
                    key={todo._id}
                    id={todo._id}
                    title={todo.title}
                />
            ))}
        </div>
    )
}

export default TodoList
