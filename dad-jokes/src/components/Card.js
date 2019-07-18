import React from "react";
import styled from "styled-components";
import Box from './Box';

const Card = props => (
  <Box
    {...props}
    bg={'lightvioletblue'}
    color={'white'}
    width={[ 1, 1/2, 3/4 ]} 
    p={[ 1, 2, 3, 4 ]}
    mx={[ 'auto' ]}
    my={[ 1,2 ]}
    fontSize={[ 1, 2, 3, 4 ]}
    justifyContent="center"
    css={{
      maxWidth: "1024px",
    }}
  />
);

export default Card;