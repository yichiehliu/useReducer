import React, { useState, useReducer } from 'react'

import { Page, PageContent } from '@components/Page'

const initialCount = 0

function init(initialCnt) {}

function reducer(state, action) {
  switch (action.type) {
  }
}

const CounterReducer: React.FC = () => {
  // const [count, setCount] = useState(0)
  const [state, dispatch] = useReducer(reducer, initialCount, init)

  const increment = () => {}

  const decrement = () => {}

  const reset = () => {}

  return (
    <>
      <Page>
        <PageContent>
          <button onClick={decrement}>-</button>
          <span>{0}</span>
          <button onClick={increment}>+</button>
          <br />
          <button onClick={reset}>RESET</button>
        </PageContent>
      </Page>
    </>
  )
}

export default CounterReducer
