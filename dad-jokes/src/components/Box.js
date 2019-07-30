// import React from "react";
import styled from 'styled-components'
import { system, color, space, layout, typography, flexbox, grid, background, border, shadow, textStyle, colorStyle, buttonStyle } from 'styled-system';

const Box = styled.div`
${system({
  boxSizing: 'border-box',
  fontWeight: {
    property: 'fontWeight',
    scale: 'fontWeights',
  },
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
`
export default Box;