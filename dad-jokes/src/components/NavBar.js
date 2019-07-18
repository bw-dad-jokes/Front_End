import React from 'react'
import styled from 'styled-components';

const Nav = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
    height: 50px;
    padding: 5px;
    align-items: center;
    background-color: darkgrey;
`

const NavLink = styled.a`
    text-decoration: none;
    color: white;

`

const logout = () => {
    localStorage.clear();
    setTimeout(window.location.href = 'http://localhost:3000/', 3000);
}

const NavBar = (props) => {

    return (
        <Nav>
            <NavLink href='http://localhost:3000/'>Home</NavLink>
            <NavLink href='http://localhost:3000/login'>Login</NavLink>
            <NavLink href='http://localhost:3000/signup'>Sign Up</NavLink>
            <NavLink onClick={logout} href='#'>Log Out</NavLink>


        </Nav >
    )
}

export default NavBar