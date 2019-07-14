import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import JokeForm from './JokeForm'
import { getJokes, addJoke } from '../../actions'

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

const Jokes = (props) => {
    useEffect(() => {
        props.getJokes()
    }, [])

    return (
        <div>
            <H1>Dad Jokes</H1>
            <JokeForm addJoke={props.addJoke} />

            {console.log(props.jokes)}
            {props.jokes.map(joke => (
                <JokeStyled key={joke.id}>
                    <p><strong>Name: </strong>{joke.name}</p>
                    <p><strong>body: </strong>{joke.jokeBody}</p>
                    <p><strong>Added By: </strong>{joke.addedBy}</p>
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
    { getJokes, addJoke }
)(Jokes)