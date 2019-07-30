import React, { useState } from "react";
//import styled from "styled-components";
import Box from "../Box";
//import Card from "../Card";
import Button from '../Button'
// import { Spring } from "react-spring";
import theme from '../../theme'
import {
  system,
  color,
  space,
  layout,
  typography,
  flexbox,
  grid,
  background,
  border,
  shadow,
  textStyle,
  colorStyle,
  buttonStyle
} from "styled-system";
import {
  Div,
  Header,
  Input,
  TextArea,
  Label,
  Form,
  Footer,
  Main,
  Section,
  Article,
  H1,
  H2,
  H3,
  H4
} from "styled-system-html";


const JokeForm = props => {
  // const [name, setName] = useState('')
  var [joke_text, setJokeText] = useState("");
  var [user_id, setAddedBy] = useState("");
  var [isPublic, setPublic] = useState("");
  var [isPrivate, setPrivate] = useState("");

  const clearForm = () => {
    // setName('')
    setJokeText("");
    setAddedBy("");
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log("hit add joke button");
    user_id = localStorage.getItem("current_userId");
    if (document.getElementById("publicCheck").checked) {
      isPublic = true;
      console.log("set public to true");
    } else {
      isPublic = false;
      console.log("set public to false");
    }

    if (document.getElementById("privateCheck").checked) {
      isPrivate = true;
      console.log("set private to true");
    } else {
      isPrivate = false;
      console.log("set private to false");
    }
    // Check to see if user left both options unchecked, set to public by default
    if (
      !document.getElementById("privateCheck").checked &&
      !document.getElementById("publicCheck").checked
    ) {
      isPublic = true;
      console.log(
        "user did not choose public or private, set to default public"
      );
    }
    user_id = Number(user_id);
    console.log("user_id is " + user_id);
    props.addJoke({ joke_text, isPublic, isPrivate, user_id });

    clearForm();
  };

  return (
    <Box 
    {...props}
    >
      <Form id="jokeForm" onSubmit={handleSubmit} {...props}
    bg='blue3'
    display={"flex"}
    padding={[1]}
    fontSize={[ 3, 4 ]}
    border='solid'
    borderColor='blue4'
    borderWidth={'1rem'}
    borderRadius={6}
    flexDirection={"column"}
    justifyContent={"center"}
    alignItems={"center"}
    width={[1/4,1/3,1/2,3/4]}
    mx="auto"
    maxWidth={'550px'}
    >
        <Label {...props}>Joke:{` `}</Label>
        <TextArea
          id="joke"
          type="text"
          placeholder="Yo mamma so ..."
          {...props}
          onChange={e => setJokeText(e.target.value)}
        />
        <Label {...props}>
          Public Joke:{` `}
          <Input id="publicCheck" type="checkbox" name="public" />
        </Label>
        <Label {...props}>
          Private Joke:{` `}
          <Input id="privateCheck" type="checkbox" name="private" />
        </Label>
        <Button {...props}id="jokeFormButton" type="submit" value="Add Joke">
          Add Joke
        </Button>
      </Form>
    </Box>
  );
};

export default JokeForm;
