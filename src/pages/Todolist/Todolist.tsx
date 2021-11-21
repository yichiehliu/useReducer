import React, { useState, useReducer } from 'react'

import { Page, PageContent } from '@components/Page'
import { Todo } from './Todo'

export const ACTION = {
  ADD_TODO: 'ADD_TODO',
  DELETE_TODO: 'DELETE_TODO',
  TOGGLE_TODO: 'TOGGLE_TODO',
  RESET_TODO: 'RESET_TODO',
}

const initialTodos = []

function init() {
  return initialTodos
}

function reducer(todos, action) {
  switch (action.type) {
    case ACTION.ADD_TODO:
      return [...todos, newTodo(action.payload.todoName)]
    case ACTION.TOGGLE_TODO:
      return todos.map(todo => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete }
        }
        return todo
      })
    case ACTION.DELETE_TODO:
      return todos.filter(todo => todo.id !== action.payload.id)
    case ACTION.RESET_TODO:
      return init()
    default:
      return todos
  }
}

function newTodo(todoName) {
  return { id: Date.now(), todoName: todoName, complete: false }
}

const Todolist: React.FC = () => {
  const [todoName, setTodoName] = useState('')
  const [todos, dispatch] = useReducer(reducer, initialTodos, init)

  function handleSubmit(e) {
    e.preventDefault()
    dispatch({ type: ACTION.ADD_TODO, payload: { todoName: todoName } })
    setTodoName('')
  }
  console.log(todos)

  return (
    <>
      <Page>
        <PageContent>
          <form onSubmit={handleSubmit}>
            <input type="text" value={todoName} onChange={e => setTodoName(e.target.value)} />
            <button type="submit">submit</button>
          </form>
          {todos.map(todo => {
            return <Todo key={todo.id} todo={todo} dispatch={dispatch} />
          })}
          <br />
          <br />
          <button onClick={() => dispatch({ type: ACTION.RESET_TODO })}>RESET TODOS</button>
        </PageContent>
      </Page>
    </>
  )
}

export default Todolist
