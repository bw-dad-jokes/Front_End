import React from "react";
import Box from "./Box";



const Flex = props => (
  <Box
    {...props}
    display={'flex'}
    flexDirection={'row'}
    mx={[ 0 ]}
    p={[ 0, 1, 2, 3, 4 ]}
    bg="blue4"
    width={[ 1 ]}
    fontSize={[1, 2, 3, 4]}
    css={{
      fontWeight: "bold",
    }} 
  />
);

export default Flex;
