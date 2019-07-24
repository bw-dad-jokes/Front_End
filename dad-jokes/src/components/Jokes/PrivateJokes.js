import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
//import axios from "axios";
import JokeForm from "./JokeForm";
//import '../../index.css'
import JokeStyled from "./JokeStyled";
import Button from "../Button";
import {
  getJokesPrivate,
  addJoke,
  deleteJoke,
  updateJoke,
  handleDelete,
  handleUpdate,
  setJokeToForm
} from "../../actions";
import {
  Div,
  Header,
  H1,
  p
} from "styled-system-html";

// const Options = styled.div`
//     display: flex;
//     flex-direction: row;
//     justify-content: center;
//     background-color: darkgray;
// `

// const Button = styled.button`
//   margin: 5px;
//   height: 30px;
//   border-radius: 5px;
// `
const UserMsg = styled.p`
  text-align: center;
`;

// const DummyEl = styled.div`
//   display: hidden;
// `;

const PrivateJokes = props => {
  useEffect(() => {
    props.getJokesPrivate();
  }, []);

  var userMsg = localStorage.getItem("current_username")
    ? "logged in as " + localStorage.getItem("current_username")
    : "no one logged in";

  return (
    <Div>
      <Header
        {...props}
        border="solid"
        borderColor="green6"
        borderWidth={"1rem"}
        bg="green3"
      >
        <H1
          fontSize={[5, 6]}
          fontWeight="bold"
          textAlign="center"
          color="green9"
        >
          Private Dad Jokes
        </H1>
      </Header>
      <UserMsg>{userMsg}</UserMsg>
      <JokeForm addJoke={props.addJoke.jokes} editJoke={props.handleUpdate} />
      {/* <Div
        {...props}
        display={"flex"}
        flexDirection={"row"}
        justifyContent='space-around'
        border='solid'
        borderColor='blue2'
        borderWidth='0.5rem'
        borderRadius='0.5rem'
        mx={'1rem'}
        my={'1rem'}
        p={[2]}
        bg="blue4"
        width={'.75'}
        fontSize={[1, 2, 3, 4]}
      >
        <Button id="userJokesBtn" type="button">
          View All your Jokes
        </Button>
        <Button id="allJokesBtn" type="button">
          View your Public Jokes
        </Button>
        <Button id="allJokesBtn" type="button">
          View your Private Jokes
        </Button>
      </Div> */}
      {props.jokes.map(joke => (
        <JokeStyled
          key={joke.id}
          className={
            joke.user_id === localStorage.getItem("current_userId")
              ? ""
              : "hideOthersJokes"
          }
        >
          <Div>
            <p id={"jokeText" + joke.id.toString()}>
              <strong>Joke: </strong>
              {joke.joke_text}
            </p>
            <p
              id={"jokePublic" + joke.id.toString()}
              name={joke.public.toString()}
            >
              <strong>Public?: </strong>
              {joke.public ? " True" : " False"}
            </p>

            <p
              id={"jokePrivate" + joke.id.toString()}
              name={joke.private.toString()}
            >
              <strong>Private?: </strong>
              {joke.private ? " True" : " False"}
            </p>
            <p id={"jokeUser" + joke.id.toString()} name={joke.username}>
              <strong>Added By User: </strong>
              {joke.username}
            </p>
          </Div>

          {joke.user_id === localStorage.getItem("current_userId") ? (
            <Div id="buttonGroup">
              <Button
                id="Edit"
                name={joke.id}
                type="button"
                onClick={setJokeToForm}
              >
                Edit
              </Button>
              <Button
                id="Delete"
                name={joke.id}
                type="button"
                onClick={handleDelete}
              >
                Delete
              </Button>
            </Div>
          ) : null}
        </JokeStyled>
      ))}
    </Div>
  );
};

const mapStateToProps = state => ({
  jokes: state.jokes
});

export default connect(
  mapStateToProps,
  { getJokesPrivate, addJoke, deleteJoke, updateJoke }
)(PrivateJokes);
