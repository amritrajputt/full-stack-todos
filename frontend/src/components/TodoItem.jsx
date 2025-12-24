import React, { useState } from 'react'

function TodoItem({id, title, onDelete, onUpdate  }) {
    const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(title);
    return (
        <div className='flex justify-center'>
            <div>{title}</div> <span><button className="rounded-lg p-2 mb-3 bg-blue-500 text-white border  border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" onClick={onUpdate}>edit</button></span>
            <span><button className="rounded-lg p-2 mb-3 bg-blue-500 text-white border  border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" onClick={onDelete} >delete</button></span>
        </div>
    )
}

export default TodoItem
