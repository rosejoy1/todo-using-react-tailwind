import React from 'react'

function Todo({task,toggleComplete,deleteTodo,editTodo}) {
  return (
    <div>
    <div  className="flex justify-between bg-gray-100  pe-5 ps-5 mt-3 pt-2 pb-3">
        <p
            style={{ width: "83%" }}
            onClick={() => toggleComplete(task.id)}
            className={`cursor-pointer ${task.completed ? 'line-through font-semibold' : ''}`}
        >
            {task.task}
        </p>
        <div className="flex ">
            <button className="text-primary mr-2" onClick={() => editTodo(task.id)}>
                <i className="fa-solid fa-pen-to-square "></i>
            </button>
            <button className="text-danger" onClick={() => deleteTodo(task.id)}>
                <i className="fas fa-trash "></i>
            </button>
        </div>
    </div>
</div>

  )
}

export default Todo