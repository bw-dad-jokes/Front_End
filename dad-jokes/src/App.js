import React from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import NavBar from './components/NavBar'
import Container from './components/Container'
import LoginForm from './components/LoginReg/LoginForm'
import Jokes from './components/Jokes/Jokes'
import PrivateRoute from './components/PrivateRoute'
import { ThemeProvider } from 'styled-components'
import theme from './theme'

const App = props => (
  <ThemeProvider theme={theme}>
  <Container width={[ 1 ]}>
    <div className="App">
      <NavBar />
      {props.error && <p>{props.error}</p>}
      <Route path="/login" component={LoginForm} />
      <PrivateRoute exact path="/" component={Jokes} />
    </div>
    </Container>
    </ThemeProvider>
  )

const mapStateToProps = state => ({
  error: state.error,
})

export default connect(mapStateToProps)(App)