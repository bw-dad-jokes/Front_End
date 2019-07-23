import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import axios from 'axios'
import JokeForm from './JokeForm'
import '../../index.css'
import JokeStyled from './JokeStyled'
import { getJokesPrivate, addJoke, deleteJoke, updateJoke, handleDelete, handleUpdate, setJokeToForm } from '../../actions'
import {
    Div,
    Header,
    Footer,
    Main,
    Section,
    Article,
    H1,
    H2,
    H3,
    H4,
    p
  } from "styled-system-html";

const Options = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: darkgray;
`

const Button = styled.button`
  margin: 5px;
  height: 30px;
  border-radius: 5px;
`
const UserMsg = styled.p`
    text-align: center;
`

const DummyEl = styled.div`
    display: hidden;
`

const PrivateJokes = (props) => {
    useEffect(() => {
        props.getJokesPrivate()
    }, [])

    var userMsg = localStorage.getItem('current_username') ? 'logged in as ' + localStorage.getItem('current_username') : 'no one logged in'

    return (
        <Div>
            <H1 textAlign='center'>Private Dad Jokes</H1>
            <UserMsg>{userMsg}</UserMsg>
            <JokeForm addJoke={props.addJoke} editJoke={props.handleUpdate} />
            {/* <Options>
                <Button id="userJokesBtn" type="button">View All your Jokes</Button>
                <Button id="allJokesBtn" type="button">View your Public Jokes</Button>
                <Button id="allJokesBtn" type="button">View your Private Jokes</Button>
            </Options> */}
            {props.jokes.map(joke => (

                <JokeStyled key={joke.id} className={joke.user_id == localStorage.getItem('current_userId') ? "" : "hideOthersJokes"}>

                    <div>
                        <p id={"jokeText" + joke.id.toString()}><strong>Joke: </strong>{joke.joke_text}</p>
                        <p id={"jokePublic" + joke.id.toString()} name={joke.public.toString()}><strong>Public?: </strong>{joke.public ? ' True' : ' False'}</p>

                        <p id={"jokePrivate" + joke.id.toString()} name={joke.private.toString()}><strong>Private?: </strong>{joke.private ? ' True' : ' False'}</p>
                        <p id={"jokeUser" + joke.id.toString()} name={joke.username}><strong>Added By User: </strong>{joke.username}</p>
                    </div>


                    {joke.user_id == localStorage.getItem('current_userId') ?
                        <div id="buttonGroup">
                            <button id="Edit" name={joke.id} type="button" onClick={setJokeToForm}>Edit</button>
                            <button id="Delete" name={joke.id} type="button" onClick={handleDelete}>Delete</button>
                        </div>
                        : null
                    }
                </JokeStyled>

            ))
            }
        </Div >
    )
}

const mapStateToProps = state => ({
    jokes: state.jokes,
})

export default connect(
    mapStateToProps,
    { getJokesPrivate, addJoke, deleteJoke, updateJoke }
)(PrivateJokes)