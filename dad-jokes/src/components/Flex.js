import React from "react";
import Box from "./Box";



const Flex = props => (
  <Box
    {...props}
    display={'flex'}
    flexDirection={'row'}
    mx={[ 0 ]}
    p={[ 0, 1, 2 ]}
    bg="blue4"
    fontSize={[1, 2, 3, 4]}
  />
);

export default Flex;
