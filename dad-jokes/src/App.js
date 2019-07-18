import React from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import NavBar from './components/NavBar'

import LoginForm from './components/LoginReg/LoginForm'
import RegisterForm from './components/LoginReg/RegisterForm'
import Jokes from './components/Jokes/Jokes'
import PrivateRoute from './components/PrivateRoute'

function App(props) {
  return (
    <div className="App">
      <NavBar />
      {props.error && <p>{props.error}</p>}
      <Route path="/login" component={LoginForm} />
      <Route path="/signup" component={RegisterForm} />
      <PrivateRoute exact path="/" component={Jokes} />
    </div>
  )
}

const mapStateToProps = state => ({
  error: state.error,
})

export default connect(mapStateToProps)(App)