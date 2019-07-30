import React from "react";
//import styled from "styled-components";
import Box from './Box';
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

const Nav = props => (
  <Box
    {...props}
    display={'flex'}
    flexDirection={'row'}
    justifyContent={'space-evenly'}
    alignItems={'center'}
    flexWrap={'no-wrap'}
    justifyItems={'space-around'}
  />
);

export default Nav;
