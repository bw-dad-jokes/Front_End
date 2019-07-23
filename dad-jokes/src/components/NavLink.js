import React from "react";
import styled from "styled-components";
import Link from './Link';
// import {
//   system,
//   color,
//   space,
//   layout,
//   typography,
//   flexbox,
//   grid,
//   background,
//   border,
//   shadow,
//   textStyle,
//   colorStyle,
//   buttonStyle
// } from "styled-system";

const NavLink = props => (
  <Link
  {...props}
    border={'solid'}
    borderColor={'white'}
    borderRadius={[6]}
    width={[ 1/8 ]}
    textDecoration={'none'}
    display={'flex'}
    flexDirection={'row'}
    justifyContent={'center'}
    color={'white'}
    fontSize={[ 1, 2, 3, 4 ]}
    p={[ 1, 2]}
    mx={[ 1 ]}
    css={{
      fontWeight: "bold",
    }} 
  />
);

export default NavLink;