import React from 'react'
import { useQuery } from 'react-query'
import { useAxiosPosts } from '../hooks/useAxios'
import { Link } from 'react-router-dom'
import { Box, Spinner, Alert, AlertIcon, Link as ChakraLink } from '@chakra-ui/react'

const Chats = () => {

    const { data, isLoading, isError } = useQuery('chats', () => useAxiosPosts
    .get('chats')
    .then(res => res.data))

  return <>
    <Box
        w="100vw"
        display="flex"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        gap="2rem"
        flexWrap="wrap"
        >
        {isLoading && <Spinner />}
        {data
        ? data.map(chat => (
            <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap="1rem"
            w="30%"
            h="30%"
            p="1rem"
            border="1px solid black"
            borderRadius="5px"
            key={chat.id}
            >
            <ChakraLink as={Link} to={`/chats/${chat.id}`}>
                {chat.name}
            </ChakraLink>
            </Box>
        ))
        : isError && (
            <Alert status="error">
            <AlertIcon />
            There was an error fetching the data
            </Alert>
        )}
        {data && data.length === 0 && <p>No chats yet</p>}
        {data && (
        <ChakraLink as={Link} to="/chats/add">
            Add Chat
        </ChakraLink>
        )}
    </Box>
  </>
}

export default Chats