import React, {useContext} from 'react'
import {contexto} from '../App'

const Perfil = () => {

    const [user, setUser] = useContext(contexto)

  return <>
    <h1>Perfil</h1>
    <p>{user.name}</p>
    <p>{user.email}</p>
  </>
}

export default Perfil