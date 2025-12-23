import React, { useState } from 'react'

function TodoItem({id, title }) {

    const [updatedtitle, setUpdatedTitle] = useState("")
    const [deletetitle, setDeletedTitle] = useState("")

    async function updatetodo() {
    try {
      await axios.patch(
        `http://localhost:3000/api/v1/todo/updatetodo/${id}`,
        { title: "Updated title" },
        { withCredentials: true }
      );

      console.log("Todo updated:", id);
    } catch (err) {
      console.error(err.response?.data || err.message);
    }

    }
    async function deletetodo() {
  try {
      await axios.delete(
        `http://localhost:3000/api/v1/todo/deletetodo/${id}`,
        { withCredentials: true }
      );

      console.log("Todo deleted:", id);
    } catch (err) {
      console.error(err.response?.data || err.message);
    }
    }
    return (
        <div className='flex justify-center'>
            <div>{title}</div> <span><button className="rounded-lg p-2 mb-3 bg-blue-500 text-white border  border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" onClick={updatetodo}>edit</button></span>
            <span><button className="rounded-lg p-2 mb-3 bg-blue-500 text-white border  border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" onClick={deletetodo} >delete</button></span>
        </div>
    )
}

export default TodoItem
