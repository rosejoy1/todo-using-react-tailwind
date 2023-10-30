import React, { useState } from 'react'

function Todoform({addTodo}) {
    const [value,setValue]=useState("")
    const handleSubmit=(e)=>{
        e.preventDefault()
        addTodo(value)
        setValue("")

    }
  return (
    <>
    <form action="" onSubmit={handleSubmit} className="p-5 bg-yellow-50">
        <div className="flex items-center shadow rounded p-5">
            <input
                className="form-input mr-2 p-2 rounded bg-gray-100 border border-gray-400 focus:outline-none focus:ring focus:border-blue-400"
                value={value}
                type="text"
                placeholder="Enter a task ..."
                onChange={(e) => setValue(e.target.value)}
            />
            <button type="submit" className="bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-700 focus:outline-none focus:ring focus:border-blue-400">
                Add
            </button>
        </div>
    </form>
</>


  )
}

export default Todoform