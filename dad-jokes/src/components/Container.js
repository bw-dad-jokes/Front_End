// React-based extension
import React from "react";
import styled from "styled-components";
import Box from './Box';
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

const Container = props => (
  <Box
    {...props}
    display='flex'
    flexDirection={'column'}
    overflow='none'
    bg='seagreen'
    width={[ 1 ]} 
    p={[ 1 ]}
    fontSize={[ 1, 2, 3, 4 ]}
    justifyContent={"center"}
    css={{
    }}
  />
);

export default Container;
