import { Box } from '@chakra-ui/react'
import React from 'react' 

const Comment = ({id, body}) => {

  const limit = 50

  return <Box key={id}>
    {
      body.length > limit ?
      <p>{body.slice(0, limit)}...</p>
      :
      <p>{body}</p>
    }
  </Box>
}

export default Comment