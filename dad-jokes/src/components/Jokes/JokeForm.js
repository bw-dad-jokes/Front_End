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

const JokeForm = props => {
    // const [name, setName] = useState('')
    var [joke_text, setJokeText] = useState('')
    var [user_id, setAddedBy] = useState('')
    var [isPublic, setPublic] = useState('')
    var [isPrivate, setPrivate] = useState('')

    const clearForm = () => {
        // setName('')
        setJokeText('')
        setAddedBy('')
    }

    const handleSubmit = e => {
        e.preventDefault()
        console.log('hit add joke button');
        user_id = localStorage.getItem('current_userId')
        if (document.getElementById('publicCheck').checked) {
            isPublic = true
            console.log('set public to true')
        } else {
            isPublic = false
            console.log('set public to false')
        }

        if (document.getElementById('privateCheck').checked) {
            isPrivate = true
            console.log('set private to true')
        } else {
            isPrivate = false
            console.log('set private to false')
        }
        // Check to see if user left both options unchecked, set to public by default
        if (!document.getElementById('privateCheck').checked && !document.getElementById('publicCheck').checked) {
            isPublic = true;
            console.log('user did not choose public or private, set to default public');
        }
        user_id = Number(user_id)
        console.log('user_id is ' + user_id);
        props.addJoke({ joke_text, isPublic, isPrivate, user_id })

        clearForm()


    }

    return (
        <AddJokeForm id="jokeForm" onSubmit={handleSubmit}>
            <Label>
                Joke:{` `}

            </Label>
            <JokeTextField
                id="joke"
                type="text"
                placeholder="Yo mamma so ..."
                onChange={e => setJokeText(e.target.value)}

            />
            <Label>
                Public Joke:{` `}

                <input
                    id="publicCheck"
                    type="checkbox"
                    name="public"

                />
            </Label>
            <Label>
                Private Joke:{` `}

                <input
                    id="privateCheck"
                    type="checkbox"
                    name="private"

                />
            </Label>
            <Button type="submit" value="Add Joke">Add Joke</Button>
        </AddJokeForm>
    )
}

export default JokeForm