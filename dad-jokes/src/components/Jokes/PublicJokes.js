import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import JokeFormPublic from './JokeForm'
import { getJokes, handleDelete, handleUpdate } from '../../actions'

const JokeStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    padding: 32px;
    background: #fff;
    border-radius: 6px;
    /* height: 300px; */
    margin: 1rem auto;
    position: relative;
    width: 350px;
    
    background-color: lightgray;
`

const H1 = styled.h1`
    text-align: center;
`

const UserMsg = styled.p`
    text-align: center;
`

const PublicJokes = (props) => {
    useEffect(() => {
        props.getJokes()
    }, [])
    var userMsg = localStorage.getItem('current_username') ? 'logged in as ' + localStorage.getItem('current_username') : 'no one logged in'

    return (
        <div>
            <H1>Public Dad Jokes</H1>
            <UserMsg>{userMsg}</UserMsg>
            {console.log(props.jokes)}
            {props.jokes.map(joke => (
                <JokeStyled key={joke.id}>
                    <p><strong>Joke: </strong>{joke.joke_text}</p>
                    {/* <p><strong>Public?: </strong>{joke.public}</p> */}
                    <p><strong>Added By User: </strong>{joke.username}</p>

                    {joke.user_id == localStorage.getItem('current_userId') ?
                        <div id="buttonGroup">
                            <button id="Edit" name={joke.id} type="button" onClick={handleUpdate}>Edit</button>
                            <button id="Delete" name={joke.id} type="button" onClick={handleDelete}>Delete</button>
                        </div>
                        : null
                    }
                </JokeStyled>
            ))}
        </div>
    )
}

const mapStateToProps = state => ({
    jokes: state.jokes,
})

export default connect(
    mapStateToProps,
    { getJokes }
)(PublicJokes)