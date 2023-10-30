import React, { useState } from 'react'

function EditTodo({editTodo,task}) {
    const [value,setValue]=useState(task.task)
    const handleSubmit=(e)=>{
        e.preventDefault()
        editTodo(value, task.id)
        setValue("")

    }
  return (
<>
    <form action="" onSubmit={handleSubmit} className="p-3 flex justify-between">
        <input
            className="form-input flex-grow mr-2 p-2 rounded border border-gray-400 focus:outline-none focus:ring focus:border-blue-400"
            value={value}
            type="text"
            placeholder="Update task"
            onChange={(e) => setValue(e.target.value)}
        />
        <button
            type="submit"
            className="bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-700 focus:outline-none focus:ring focus:border-blue-400"
        >
            Save
        </button>
    </form>
</>

  )
}

export default EditTodo