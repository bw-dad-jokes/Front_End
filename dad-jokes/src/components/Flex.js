import React from "react";
import styled from "styled-components";
import Box from "./Box";
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

const Flex = props => (
  <Box
    {...props}
    display={'flex'}
    flexDirection={'row'}
    mx={[ 1 ]}
    bg="skyblue"
    width={[ '96%' ]}
    p={[1, 2, 3, 4]}
    fontSize={[1, 2, 3, 4]}
    css={{
      fontWeight: "bold",
    }} 
  />
);

export default Flex;
