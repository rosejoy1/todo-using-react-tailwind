import React, { useState } from 'react'
import TodoForm from './Todoform'
import {v4 as uuidv4} from 'uuid';
import Todo from './Todo';
import EditTodoForm from './EditTodo';
uuidv4();

function TodoWrapper() {
    const [todos,setTodos]=useState([])
    const addTodo=todo=>{
        setTodos([...todos,{id:uuidv4(),task:todo,completed:false,isEditing:false}])
        console.log(todos);
    }
    const toggleComplete=(id)=>{
        setTodos(todos.map(todo=>todo.id===id ? {
            ...todo, completed: !todo.completed

        }:todo))
    }

    const deleteTodo=(id)=>{
        setTodos(todos.filter(todo=> todo.id !== id))
    }
    const editTodo=(id)=>{
        setTodos(todos.map(todo=> todo.id === id ?{
            ...todo, isEditing: !todo.isEditing
        }:todo
        ))

    }
    const editTask=(task,id)=>{
        setTodos(todos.map(todo=>todo.id === id ? {
            ...todo,task,isEditing: !todo.isEditing
        }:todo
        ))

    }
  return (
    <div className=" mx-auto mt-5">
    <h1 className="text-center text-3xl text-red-500 font-bold mb-5">TODO LIST</h1>
    <div className=" border shadow mt-4 rounded bg-yellow-50  p-4">
        <TodoForm addTodo={addTodo} />
        {todos.map((todo, index) => (
            todo.isEditing ? (
                <EditTodoForm key={todo.id} editTodo={editTask} task={todo} />
            ) : (
                <Todo
                    key={todo.id}
                    task={todo}
                    toggleComplete={toggleComplete}
                    deleteTodo={deleteTodo}
                    editTodo={editTodo}
                />
            )
        ))}
    </div>
</div>
  )
}

export default TodoWrapper