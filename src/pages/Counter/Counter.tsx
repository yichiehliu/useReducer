import React, { useState } from 'react'

import { Page, PageContent } from '@components/Page'

export const Counter: React.FC = () => {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(prevCount => prevCount + 1)
  }

  const decrement = () => {
    setCount(prevCount => prevCount - 1)
  }
  return (
    <>
      <Page>
        <PageContent>
          <button onClick={decrement}>-</button>
          <span>{count}</span>
          <button onClick={increment}>+</button>
        </PageContent>
      </Page>
    </>
  )
}

export default Counter
