import React, { useState } from 'react'
import { connect } from 'react-redux'
import { reg } from '../../actions'
import styled from 'styled-components';

const RegFormStyled = styled.form`
    padding: 32px 0;
    background: #fff;
    border-radius: 6px;
    /* height: 300px; */
    margin: 1rem auto;
    position: relative;
    width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: lightgray;
`

const Input = styled.input`
  height: 30px;
  border-radius: 5px;
  margin: 5px;
  margin-right: 40px;
  padding: 5px;
`

const Button = styled.button`
  margin-top: 20px;
  height: 30px;
  width: 100px;
  border-radius: 5px;

`

const Label = styled.label`
  width: 360px;
  display: inline-block;
  text-align: right;
`

const H1 = styled.h1`
    text-align: center;
`

const RegisterForm = (props) => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    const handleRegisterSubmit = async e => {
        e.preventDefault()
        await props.reg({ username, password, email })
        await props.history.push('/')
    }

    const isLoggedIn = localStorage.getItem('auth_token')

    const checkLogin = () => {
        if (isLoggedIn) {

        }
    }

    // Name and Email validation Function.
    const validation = () => {
        var name = document.getElementById("name").value;
        var age = document.getElementById('age').value;
        var email = document.getElementById("email").value;
        var emailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (name === '' || email === '') {
            alert("Please fill all fields...!!!!!!");
            return false;
        } else if (!(email).match(emailReg)) {
            alert("Invalid Email...!!!!!!");
            return false;
        } else if (isNaN(age) || age === '') {
            alert("Please use only numbers for age!");
            console.log('age is not a number!');
            return false;
        } else {
            return true;
        }
    }



    return (
        <div>
            <H1>Dad Jokes</H1>

            <RegFormStyled onSubmit={e => handleRegisterSubmit(e)}>
                <H1>Register</H1>
                <Label>
                    Username:{` `}
                    <Input
                        type="text"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                        placeholder="Username"
                    />
                </Label>
                <Label>
                    Password:{` `}
                    <Input
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        placeholder="Password"
                    />
                </Label>
                <Label>
                    Email:{` `}
                    <Input
                        type="text"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder="Email"
                    />
                </Label>
                <Button type="submit" value="Register">Register</Button>
            </RegFormStyled>
        </div>
    )
}

export default connect(null, { reg })(RegisterForm)


