import React, { useState } from "react";
import styled from "styled-components";
import Flex from "./Flex";
import NavLink from "./NavLink";
import Box from "./Box";
import Nav from "./Nav";
import {
  system,
  color,
  space,
  layout,
  typography,
  flexbox,
  grid,
  background,
  border,
  shadow,
  textStyle,
  colorStyle,
  buttonStyle
} from "styled-system";

const logout = () => {
  localStorage.clear();
  setTimeout((window.location.href = "http://localhost:3000/"), 3000);
};

const NavBar = props => {
  return (
    <Flex>
      <Nav>
        <NavLink href="http://localhost:3000/login">Login</NavLink>
        <NavLink onClick={logout} href="#">
          Log Out
        </NavLink>
      </Nav>
    </Flex>
  );
};

export default NavBar;
