import React from 'react'
import { useQuery } from 'react-query'
import { useAxiosChats } from '../hooks/useAxios'
import { Link } from 'react-router-dom'
import { Button, Spinner, Text } from '@chakra-ui/react'
import ContainerStyled from '../components/styles/ContainerStyled'
import CardsContainer from '../components/styles/CardsContainer'
import AlertMsg from '../components/AlertMsg'

const Chats = () => {

    const { data, isLoading, isError } = useQuery('chats', () => useAxiosChats
    .get('chats')
    .then(res => res.data)
    )

    console.log(data)

  return <>
    <Text
        fontSize="3xl"
        fontWeight="bold"
        textAlign="center"
        mt="2rem"
        mb="2rem"
    >Chats</Text>
    <ContainerStyled>
        {isLoading && <Spinner />}
        {data
        ? data.map(chat => (
            <CardsContainer>
            <Button as={Link} to={`/chats/${chat._id}`}>
                {chat.name}
            </Button>
            </CardsContainer>
        ))
        : isError && (
            <AlertMsg status="error" msg="There was an error fetching the data" />
        )}
        {data && data.length === 0 && <p>No chats yet</p>}
        {data && (
        <Button 
        as={Link} to="/chats/add"
        colorScheme="teal"
        variant="outline"
        >
            Add Chat
        </Button>
        )}
    </ContainerStyled>
  </>
}

export default Chats