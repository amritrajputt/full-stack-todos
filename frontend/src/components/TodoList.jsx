import React, { useEffect, useState } from 'react'
import axios from "axios";
import TodoItem from './TodoItem';

function TodoList({ todos, setTodos,onDelete, onUpdate }) {
    
    return (
        <div>
            {todos.map(todo => (
                <TodoItem
                    key={todo._id}
                    id={todo._id}
                    title={todo.title}
                    todos={todos}
                    setTodos={setTodos}
                    onDelete={onDelete}
                    onUpdate={onUpdate}
                />
            ))}
        </div>
    )
}

export default TodoList
