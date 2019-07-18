import React, { useState } from "react";
import styled from "styled-components";
import Box from '../Box';
import Card from '../Card';
import { Image, Heading, Text } from "rebass";


const AddJokeForm = styled.form`
  padding: 32px 0;
  background: #fff;
  border-radius: 6px;
  /* height: 300px; */
  margin: 1rem auto;
  position: relative;
  width: 450px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #4a9eda;
`;

const Input = styled.input`
  height: 30px;
  border-radius: 5px;
  margin: 5px;
  margin-right: 40px;
  padding: 5px;
`;

const JokeTextField = styled.textarea`
  height: 60px;
  width: 172px;
  border-radius: 5px;
  margin: 5px;
  margin-right: 40px;
  padding: 5px;
`;

const Button = styled.button`
  margin-top: 20px;
  height: 30px;
  border-radius: 5px;
  background-color: #a5cfed;
`;

const Label = styled.label`
  width: 350px;
  display: inline-block;
  text-align: right;
`;

const JokeForm = props => {
  const [name, setName] = useState("");
  const [jokeBody, setJokeBody] = useState("");
  const [addedBy, setAddedBy] = useState("");

  const clearForm = () => {
    setName("");
    setJokeBody("");
    setAddedBy("");
  };

  const handleSubmit = e => {
    e.preventDefault();

    props.addJoke({ name, jokeBody, addedBy });
    clearForm();
  };

  return (
    <Box width={[ 1 ]}>
      <AddJokeForm onSubmit={handleSubmit}>
        <Label>
          Name:{` `}
          <Input
            id="name"
            type="text"
            placeholder="Name Your Joke"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </Label>
        <Label>
          Joke:{` `}
          <JokeTextField
            id="joke"
            type="text"
            placeholder="Yo mamma so ..."
            value={jokeBody}
            onChange={e => setJokeBody(e.target.value)}
          />
        </Label>
        <Label>
          Added By:{` `}
          <Input
            id="addedBy"
            type="text"
            placeholder="Who's adding the joke?"
            value={addedBy}
            onChange={e => setAddedBy(e.target.value)}
          />
        </Label>
        <Button variant="primary" value="Add Joke">
          Add Joke
        </Button>
      </AddJokeForm>
    </Box>
  );
};

export default JokeForm;
