import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Box from "../Box";
import Card from "../Card";
import { Spring } from "react-spring";

const JokeStyled = props => (
  <Card>
  <Box
    {...props}
    display={"flex"}
    bg='blue4'
    padding={[1,2]}
    fontSize={[ 3, 4 ]}
    border='solid'
    borderColor='blue3'
    borderWidth={'1rem'}
    borderRadius={6}
    flexDirection={"column"}
    justifyContent={"center"}
    alignItems={"center"}
    width={[1]}
    mx="auto"
    css={{
      maxWidth: "350px"
    }}
  />
  </Card>
);

export default JokeStyled;
