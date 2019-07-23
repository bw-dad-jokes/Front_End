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
    borderWidth={[2]}
    borderColor={'blue2'}
    borderRadius={[6]}
    textDecoration={'none'}
    display={'flex'}
    flexDirection={'row'}
    justifyContent={'center'}
    color={'white'}
    fontSize={[ 0, 1, 2, 3, 4 ]}
    p={[ 0,1 ]}
    mx={[ 0,1,2 ]}
  />
);

export default NavLink;