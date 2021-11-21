import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { GlobalStyle } from './styles'

import Counter from '@pages/Counter'
import CounterReducer from '@pages/CounterReducer'
import Todolist from '@pages/Todolist'
import NotFound from '@pages/NotFound'

const App: React.FC = () => (
  <>
    <GlobalStyle />
    <Router>
      <Switch>
        <Route exact path="/counter">
          <Counter />
        </Route>
        <Route exact path="/reducer">
          <CounterReducer />
        </Route>
        <Route exact path="/todolist">
          <Todolist />
        </Route>
        <Route exact path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  </>
)
export default App
