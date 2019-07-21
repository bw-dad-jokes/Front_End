import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import axios from 'axios'
import JokeForm from './JokeForm'
import '../../index.css'
import { getJokesPrivate, addJoke, deleteJoke, updateJoke, handleDelete, handleUpdate } from '../../actions'

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
    // console.log('trying to find where the jokes are ' + JSON.stringify(props.jokes))

    //const testJokes = props.jokes.map(joke => joke.user_id == localStorage.getItem('current_userId'));
    // const filteredJokes = props.jokes.filter(joke.user_id == localStorage.getItem('current_userId'))
    //console.log(testJokes)
    return (
        <div>
            <H1>Private Dad Jokes</H1>
            <UserMsg>{userMsg}</UserMsg>
            <JokeForm addJoke={props.addJoke} />
            {/* <Options>
                <Button id="userJokesBtn" type="button">View All your Jokes</Button>
                <Button id="allJokesBtn" type="button">View your Public Jokes</Button>
                <Button id="allJokesBtn" type="button">View your Private Jokes</Button>
            </Options> */}
            {props.jokes.map(joke => (

                <JokeStyled key={joke.id} className={joke.user_id == localStorage.getItem('current_userId') ? "" : "hideOthersJokes"}>

                    <div>
                        <p><strong>Joke: </strong>{joke.joke_text}</p>
                        <p><strong>Public?: </strong>{joke.public ? ' True' : ' False'}</p>

                        <p><strong>Private?: </strong>{joke.private ? ' True' : ' False'}</p>
                        <p><strong>Added By User: </strong>{joke.username}</p>
                    </div>


                    {joke.user_id == localStorage.getItem('current_userId') ?
                        <div id="buttonGroup">
                            <button id="Edit" name={joke.id} type="button" onClick={updateJoke(joke)}>Edit</button>
                            <button id="Delete" name={joke.id} type="button" onClick={handleDelete}>Delete</button>
                        </div>
                        : null
                    }
                </JokeStyled>

            ))
            }
        </div >
    )
}

const mapStateToProps = state => ({
    jokes: state.jokes,
})

export default connect(
    mapStateToProps,
    { getJokesPrivate, addJoke, deleteJoke, updateJoke }
)(PrivateJokes)