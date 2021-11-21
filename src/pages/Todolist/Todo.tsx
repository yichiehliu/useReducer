import React from 'react'
import { ACTION } from './Todolist'
export const Todo = ({ todo, dispatch }) => {
  console.log('todo', todo.todoName)
  return (
    <>
      <div>
        <span style={{ color: todo.complete ? 'green' : '#000' }}>{todo.todoName}</span>
        <button onClick={() => dispatch({ type: ACTION.TOGGLE_TODO, payload: { id: todo.id } })}>
          TOGGLE
        </button>
        <button onClick={() => dispatch({ type: ACTION.DELETE_TODO, payload: { id: todo.id } })}>
          DELETE
        </button>
      </div>
      <br />
    </>
  )
}
