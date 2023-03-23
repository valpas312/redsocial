import { Box } from '@chakra-ui/react'
import React from 'react'

const Comment = ({id, body}) => {
  return <Box key={id}>
    {body}
  </Box>
}

export default Comment