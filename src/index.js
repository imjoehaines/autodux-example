import React from 'react'
import logger from 'redux-logger'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'

import reducer from './ducks'
import UserCard from './UserCard'

const store = createStore(reducer, applyMiddleware(logger))

render(
  <Provider store={store}>
    <UserCard />
  </Provider>,
  document.getElementById('root')
)
