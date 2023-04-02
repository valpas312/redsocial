import React, {useContext} from 'react'
import {contexto} from '../App'
import { Box, Text } from '@chakra-ui/react'

const Perfil = () => {

    const [user, setUser] = useContext(contexto)

    console.log(user)

  return <Box
    w="100%"
    h="100%"
    display="flex"
    flexDirection="column"
    justifyContent="center"
    alignItems="center"
    gap="1rem"
    textAlign="center"
  >
    <Text
      fontSize="3xl"
      fontWeight="bold"
      textAlign="center"
      mt="2rem"
      mb="2rem"
    >Perfil</Text>
    <Box
      h="100%"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      gap="1rem"
      textAlign="center"
      shadow="md"
      borderWidth="1px"
      borderRadius="md"
      p="1rem"
    >
      <Text>ID: {user._id}</Text>
      <Text>Nombre: {user.name}</Text>
      <Text>Correo: {user.email}</Text>
    </Box>
  </Box>
}

export default Perfil