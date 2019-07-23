import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import NavBar from "./components/NavBar";
import styled from "styled-components";
import Container from "./components/Container";
import LoginForm from "./components/LoginReg/LoginForm";
import RegisterForm from "./components/LoginReg/RegisterForm";
import PublicJokes from "./components/Jokes/PublicJokes";
import PrivateJokes from "./components/Jokes/PrivateJokes";
import PrivateRoute from "./components/PrivateRoute";
import { ThemeProvider } from "styled-components";
import theme from "./theme";

const err = styled.p`
  text-align: center;
  color: red;
`;

const App = props => (
    <ThemeProvider theme={theme}>
      <Container width={[1]}>
        <NavBar width={[1]}/>
        {/* Here we could display the user that is logged in and/or a message stating that user is not logged in */}
        {props.error && <err>{props.error}</err>}
        {/* if logged in, display name */}

        {/* <p>{props.state.loggedIn ? 'logged in as ' + localStorage.getItem('current_username') : 'no one logged in'}</p> */}
        <Route path="/login" component={LoginForm} />
        <Route path="/signup" component={RegisterForm} />
        <Route exact path="/" component={PublicJokes} />
        <PrivateRoute exact path="/private" component={PrivateJokes} />
      </Container>
    </ThemeProvider>
);

const mapStateToProps = state => ({
  error: state.error
});

export default connect(mapStateToProps)(App);
