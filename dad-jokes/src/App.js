import React from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import NavBar from './components/NavBar'

import LoginForm from './components/LoginReg/LoginForm'
import RegisterForm from './components/LoginReg/RegisterForm'
import PublicJokes from './components/Jokes/PublicJokes'
import PrivateJokes from './components/Jokes/PrivateJokes'
import PrivateRoute from './components/PrivateRoute'

function App(props) {
  return (
    <div className="App">
      <NavBar />
      {/* Here we could display the user that is logged in and/or a message stating that user is not logged in */}
      {props.error && <p>{props.error}</p>}
      {/* if logged in, display name */}
      <p>{localStorage.getItem('current_username') ? 'logged in as ' + localStorage.getItem('current_username') : 'no one logged in'}</p>
      {/* <p>{props.state.loggedIn ? 'logged in as ' + localStorage.getItem('current_username') : 'no one logged in'}</p> */}
      <Route path="/login" component={LoginForm} />
      <Route path="/signup" component={RegisterForm} />
      <Route exact path="/" component={PublicJokes} />
      <PrivateRoute exact path="/private" component={PrivateJokes} />
    </div>
  )
}

const mapStateToProps = state => ({
  error: state.error,
})

export default connect(mapStateToProps)(App)