import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import JokeForm from './JokeForm'
import { getJokesPrivate, getJokes, addJoke, updateJoke, deleteJoke } from '../../actions'
import Card from '../Card';

const H1 = styled.h1`
    text-align: center;
    font-weight: 700;
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
                <Card key={joke.id} borderRadius={ 6 }>
                    <p><strong>Name: </strong>{joke.name}</p>
                    <p><strong>body: </strong>{joke.jokeBody}</p>
                    <p><strong>Added By: </strong>{joke.addedBy}</p>
                </Card>
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