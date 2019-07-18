import React from "react";
import styled from "styled-components";
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

const textDecoration = system({
  prop: "textDecoration",
  cssProperty: "textDecoration"
});

const Link = styled.a`
  ${system({
    textDecoration: true,
    fontWeight: {
      property: "fontWeight",
      scale: "fontWeights"
    }
  })},
  ${space}
  ${layout}
  ${color}
  ${typography}
  ${flexbox}
  ${grid}
  ${background}
  ${border}
  ${shadow}
  ${textStyle}
  ${colorStyle}
  ${buttonStyle}
`;

export default Link;
