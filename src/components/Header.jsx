import React from 'react'
import { FaHashtag } from 'react-icons/fa'

const Header = ({ todosCount, pendingTodos }) => {

  return (
    <>
      <h1>Task</h1>
      <hr />
      <div className="counter-todos">
        <h3>
          <FaHashtag />
           Total Tasks:
          <span> {todosCount} </span>
        </h3>
        <h3>
          <FaHashtag />
          Pending Tasks: 
          <span> {pendingTodos} </span>
        </h3>
      </div>
    </>
  )
}

export default Header