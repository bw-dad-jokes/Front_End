import React, { useState } from "react";
import styled from "styled-components";
import Flex from "./Flex";
import NavLink from "./NavLink";
import Box from "./Box";
import Nav from "./Nav";
import {
  Div,
  Header,
  Input,
  Footer,
  Main,
  Section,
  Article,
  H1,
  H2,
  H3,
  H4
} from "styled-system-html";

const logout = () => {
  localStorage.clear();
  setTimeout((window.location.href = "http://localhost:3000/"), 3000);
};

// const Search = styled.input`
//     border-radius: 4px;
// `

const NavBar = (props) => {
  return (
    <Flex {...props} >
      <Nav>
      <NavLink {...props} href='http://localhost:3000/'>Public Jokes</NavLink>
            <NavLink {...props} href='http://localhost:3000/private'>Private Jokes</NavLink>
            <NavLink {...props} href='http://localhost:3000/login'>Login</NavLink>
            <NavLink {...props} href='http://localhost:3000/signup'>Sign Up</NavLink>
            <NavLink {...props} onClick={logout} href='#'>Log Out</NavLink>
            <Input id="search" placeholder="Search" type='text'></Input>
      </Nav>
    </Flex>
  );
};

export default NavBar;
