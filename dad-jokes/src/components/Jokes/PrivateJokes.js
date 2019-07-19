import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import JokeFormPrivate from './JokeFormPrivate'
import { getJokesPrivate, addJokePrivate } from '../../actions'

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

const PrivateJokes = (props) => {
    useEffect(() => {
        props.getJokesPrivate()
    }, [])

    return (
        <div>
            <H1>Private Dad Jokes</H1>
            <JokeFormPrivate addJoke={props.addJokePrivate} />

            {console.log(props.jokes)}
            {props.jokes.map(joke => (
                <JokeStyled key={joke.id}>
                    <p><strong>Joke: </strong>{joke.joke_text}</p>
                    {/* <p><strong>Public?: </strong>{joke.public}</p> */}
                    <p><strong>Added By User: </strong>{joke.user_id}</p>
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
    { getJokesPrivate, addJokePrivate }
)(PrivateJokes)