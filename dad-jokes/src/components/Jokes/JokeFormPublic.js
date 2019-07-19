import React, { useState } from 'react'
import styled from 'styled-components';

const AddJokeForm = styled.form`
    padding: 32px 0;
    background: #fff;
    border-radius: 6px;
    /* height: 300px; */
    margin: 1rem auto;
    position: relative;
    width: 350px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: lightgray;
`

// const Input = styled.input`
//   height: 30px;
//   border-radius: 5px;
//   margin: 5px;
//   margin-right: 40px;
//   padding: 5px;
// `

const JokeTextField = styled.textarea`
    height: 100%;
    width: 100%;
    border-radius: 5px;
    margin: 5px;
    margin-right: 0px;
    padding: 5px;
`

const Button = styled.button`
  margin-top: 20px;
  height: 30px;
  border-radius: 5px;

`

const Label = styled.label`
  width: 350px;
  display: inline-block;
  text-align: center;
`

const JokeFormPublic = props => {
    // const [name, setName] = useState('')
    const [joke_text, setJokeText] = useState('')
    const [user_id, setAddedBy] = useState('')

    const clearForm = () => {
        // setName('')
        setJokeText('')
        setAddedBy('')
    }

    const handleSubmit = e => {
        e.preventDefault()

        props.addJoke({ joke_text, user_id })
        clearForm()


    }

    return (
        <AddJokeForm onSubmit={handleSubmit}>
            {/* <Label>
                Name:{` `}
                <Input
                    id="name"
                    type="text"
                    placeholder="Name Your Joke"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
            </Label> */}
            <Label>
                Joke:{` `}

            </Label>
            <JokeTextField
                id="joke"
                type="text"
                placeholder="Yo mamma so ..."
                value={joke_text}
                onChange={e => setJokeText(e.target.value)}
            />
            {/* <Label>
                Added By:{` `}
                <Input
                    id="addedBy"
                    type="text"
                    placeholder="Who's adding the joke?"
                    value={user_id}
                    onChange={e => setAddedBy(e.target.value)}
                />
            </Label> */}
            <Button type="submit" value="Add Joke">Add Public Joke</Button>
        </AddJokeForm>
    )
}

export default JokeFormPublic