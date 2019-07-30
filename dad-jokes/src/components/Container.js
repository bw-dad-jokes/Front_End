// React-based extension
import React from "react";
//import styled from "styled-components";
import Box from './Box';

const Container = props => (
  <Box
    {...props}
    display='flex'
    flexDirection={'column'}
    bg='green4'
    width={[ 1 ]}
    justifyContent={"center"}
    css={{
    }}
  />
);

export default Container;
