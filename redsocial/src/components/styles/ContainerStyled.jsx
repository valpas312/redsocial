import { Box } from "@chakra-ui/react";

import React from 'react'

const ContainerStyled = ({children}) => {
  return <Box
    w="100%"
    h="100%"
    display="flex"
    flexDirection="column"
    justifyContent="center"
    alignItems="center"
    textAlign="center"
    flexWrap="wrap"
    gap="1rem"
  >
    {children}
  </Box>
}

export default ContainerStyled