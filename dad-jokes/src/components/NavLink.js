import React from "react";
import styled from "styled-components";
import Link from './Link';
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

const NavLink = props => (
  <Link
  {...props}
    border={'solid'}
    borderColor={'white'}
    borderRadius={[6]}
    width={[ 1/6 ]}
    textDecoration={'none'}
    display={'flex'}
    justifyContent={'center'}
    color={'white'}
    fontSize={[ 3, 4, 5 ]}
    p={[ 2,3 ]}
    mx={[ 2,3 ]}
    css={{
      fontWeight: "bold",
    }} 
  />
);

export default NavLink;