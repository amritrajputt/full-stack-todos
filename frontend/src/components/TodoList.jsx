import React, { useEffect, useState } from 'react'
import axios from "axios";
import TodoItem from './TodoItem';
import { useContext } from 'react';
import Context from '../context/Context';

function TodoList() {
    const {todos}= useContext(Context)
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
