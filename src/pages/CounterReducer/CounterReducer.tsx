import React, { useState, useReducer } from 'react'

import { Page, PageContent } from '@components/Page'

const ACTION = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement',
  RESET: 'reset',
}

const initialCount = 0

function init(initialCnt) {
  return { count: initialCnt }
}

function reducer(state, action) {
  switch (action.type) {
    case ACTION.INCREMENT:
      return { count: state.count + 1 }
    case ACTION.DECREMENT:
      return { count: state.count - 1 }
    case ACTION.RESET:
      return init(action.payload)
    default:
      return state
  }
}

const CounterReducer: React.FC = () => {
  // const [count, setCount] = useState(0)
  const [state, dispatch] = useReducer(reducer, initialCount, init)

  const increment = () => {
    dispatch({ type: ACTION.INCREMENT })
  }

  const decrement = () => {
    dispatch({ type: ACTION.DECREMENT })
  }

  const reset = () => {
    dispatch({ type: ACTION.RESET, payload: initialCount })
  }

  console.log(state)
  return (
    <>
      <Page>
        <PageContent>
          <button onClick={decrement}>-</button>
          <span>{state.count}</span>
          <button onClick={increment}>+</button>
          <br />
          <button onClick={reset}>RESET</button>
        </PageContent>
      </Page>
    </>
  )
}

export default CounterReducer
