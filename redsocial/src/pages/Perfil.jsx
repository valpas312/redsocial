import React, {useContext} from 'react'
import {contexto} from '../App'
import { Text } from '@chakra-ui/react'
import ContainerStyled from '../components/styles/ContainerStyled'
import CardsContainer from '../components/styles/CardsContainer'

const Perfil = () => {

    const [user, setUser] = useContext(contexto)

    console.log(user)

  return <ContainerStyled>
    <Text
      fontSize="3xl"
      fontWeight="bold"
      textAlign="center"
      mt="2rem"
      mb="2rem"
    >Perfil</Text>
    <CardsContainer>
      <Text>ID: {user._id}</Text>
      <Text>Nombre: {user.name}</Text>
      <Text>Correo: {user.email}</Text>
    </CardsContainer>
  </ContainerStyled>
}

export default Perfil