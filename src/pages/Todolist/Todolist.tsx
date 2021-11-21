import React, { useState, useReducer } from 'react'

import { Page, PageContent } from '@components/Page'
import { Todo } from './Todo'

const initialTodos = []

function init() {}

function reducer(todos, action) {
  switch (action.type) {
  }
}

const Todolist: React.FC = () => {
  return (
    <>
      <Page>
        <PageContent></PageContent>
      </Page>
    </>
  )
}

export default Todolist
