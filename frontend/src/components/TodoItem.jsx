import React, { useState, useRef, useEffect, useContext } from 'react'
import Context from '../context/Context';

function TodoItem({ id, title }) {
    const [isEditing, setIsEditing] = useState(false);
    const [newTitle, setNewTitle] = useState(title);
    const inputRef = useRef(null);
    const { onDelete, onUpdate } = useContext(Context);

    useEffect(() => {
        if (isEditing && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isEditing]);

    return (
        <div className='flex justify-center'>
            {isEditing ? (
                <>
                    <input className="rounded-lg p-2 mb-3 mr-5 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        ref={inputRef}
                        value={newTitle}
                        onChange={(e) => setNewTitle(e.target.value)}
                    />
                    <button className="rounded-lg p-2 mb-3 bg-blue-500 text-white border  border-gray-300  focus:outline-none focus:ring-2 focus:ring-blue-500" onClick={() => {
                        onUpdate(id, newTitle)
                        setIsEditing(false)
                    }}>Save</button>
                </>
            ) : (
                <div >
                    <span className='p-10'>{title}</span>
                    <button className="rounded-lg p-2 mb-3 bg-blue-500 text-white border  border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" onClick={() => setIsEditing(true)}>Edit</button>
                </div >
            )
            }
            <button className="rounded-lg p-2 mb-3 bg-blue-500 text-white border  border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" onClick={() => onDelete(id)}>Delete</button>
        </div>
    )
}

export default TodoItem
