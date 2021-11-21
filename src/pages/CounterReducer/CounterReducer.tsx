import React, { useState } from 'react'

import { Page, PageContent } from '@components/Page'

const CounterReducer: React.FC = () => {
  const [count, setCount] = useState(0)

  const increment = () => {}

  const decrement = () => {}

  return (
    <>
      <Page>
        <PageContent>
          <button onClick={decrement}>-</button>
          <span>{count}</span>
          <button onClick={increment}>+</button>
          <br />
        </PageContent>
      </Page>
    </>
  )
}

export default CounterReducer
