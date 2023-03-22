import React from 'react'
import Posts from './Posts'
import { BoxStyled } from '../components/StyledChakra'

const Home = () => {
  return <BoxStyled>
    <h1>Home</h1>
    <Posts/>
  </BoxStyled>
}

export default Home