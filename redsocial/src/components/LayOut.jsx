import React from 'react'
import NavBar from './NavBar'
import Router from './Router'

const LayOut = ({children}) => {
  return <>
    <Router/>
    <NavBar/>
    {children}
  </>
}

export default LayOut