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

const App = props => (
    <div className="App">
      <Container>
        <NavBar width={[1]}/>
        <Route path="/login" component={LoginForm} />
        <Route path="/signup" component={RegisterForm} />
        <Route exact path="/" component={PublicJokes} />
        <PrivateRoute exact path="/private" component={PrivateJokes} />
      </Container>
      </div>
);

const mapStateToProps = state => ({
  error: state.error
});

export default connect(mapStateToProps)(App);
