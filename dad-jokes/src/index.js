import React from 'react'
// import { Route } from 'react-router-dom'
// import { connect } from 'react-redux'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import rootReducer from './reducers'
import { ThemeProvider } from 'styled-components'
import theme from './theme'

export default props =>
  <ThemeProvider theme={theme}>
    {props.children}
  </ThemeProvider>

const store = createStore(rootReducer, applyMiddleware(thunk, logger))

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>
    </ThemeProvider>,
    document.getElementById('root')
)