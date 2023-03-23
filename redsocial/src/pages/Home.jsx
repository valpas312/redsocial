import React from 'react'
import Posts from './Posts'
import { BoxStyled } from '../components/StyledChakra'

const Home = () => {
  return <BoxStyled>
    <h1>Welcome!</h1>
    <Posts/>
  </BoxStyled>
}

export default Home