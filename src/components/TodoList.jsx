import React from 'react'
import { FaEraser } from 'react-icons/fa'
import { TodoUpdate } from './TodoUpdate'

const TodoList = ({ todos,
                    handleCompleteTodo, 
                    handleDeleteTodo, 
                    handleUpdateTodo }) => {
  return (
    <ul>
        {
          todos.map(todo => 
            {
              return (
              <li key={todo.id}>
                <span onClick={() => handleCompleteTodo(todo.id)}>
                  <label className={`container-done ${todo.done ? 'active' : ''}`}>

                  </label>
                </span>

                <TodoUpdate todo={todo} handleUpdateTodo={handleUpdateTodo} />

                <button className='btn-delete' onClick={() => handleDeleteTodo(todo.id)} >
                  <FaEraser />
                </button>
              </li>
              )
            })
        }
    </ul>
  )
}

export default TodoList