import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import JokeStyled from './JokeStyled'
import Button from '../../components/Button'
import JokeFormPublic from './JokeForm'
import { getJokes, handleDelete, handleUpdate, setJokeToForm } from '../../actions'
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
    H4
  } from "styled-system-html";

const PublicJokes = (props) => {
    useEffect(() => {
        props.getJokes()
    }, [])
    var userMsg = localStorage.getItem('current_username') ? 'logged in as ' + localStorage.getItem('current_username') : 'no one logged in'

    return (
        <Div>
            <Header border='solid' borderColor='green6' borderRadius={6} borderWidth={'1rem'} bg='green3'>
            <H1 fontSize={[5,6]} fontWeight="bold" textAlign='center' color='green9'>Public Dad Jokes</H1>
            </Header>
            <H4 fontSize={[2]} textAlign='center'>{userMsg}</H4>
            {console.log(props.jokes)}
            {props.jokes.map(joke => (
                <JokeStyled key={joke.id} >
                    <p><strong>Joke: </strong>{joke.joke_text}</p>
                    {/* <p><strong>Public?: </strong>{joke.public}</p> */}
                    <p><strong>Added By User: </strong>{joke.username}</p>

                    {joke.user_id == localStorage.getItem('current_userId') ?
                        <div id="buttonGroup">
                            <button id="Edit" name={joke.id} type="button" onClick={setJokeToForm}>Edit</button>
                            <Button id="Delete" name={joke.id} type="button" onClick={handleDelete}>Delete</Button>
                        </div>
                        : null
                    }
                </JokeStyled>
            ))}
        </Div>
    )
}

const mapStateToProps = state => ({
    jokes: state.jokes,
})

export default connect(
    mapStateToProps,
    { getJokes }
)(PublicJokes)