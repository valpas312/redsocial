import React from 'react'
import { useQuery } from 'react-query'
import { useAxiosPosts } from '../hooks/useAxios'
import { Link } from 'react-router-dom'
import { Box, Spinner, Alert, AlertIcon, Link as ChakraLink } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'

const Chat = () => {

  const { chat } = useParams()

  return <>
    <h1>Chat {chat}</h1>
  </>
}

export default Chat