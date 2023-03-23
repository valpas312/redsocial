import { BrowserRouter, Routes, Route } from 'react-router-dom';

import React from 'react'
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import NotFound from '../pages/NotFound';
import Perfil from '../pages/Perfil';
import Post from '../pages/Post';

import NavBar from './NavBar';

import useElement from '../hooks/useElement';

const Router = () => {
  return <>
    <BrowserRouter>
        <NavBar/>
        <Routes>
            <Route path="/" element={ useElement(<Home/>, <Login/>) } />
            <Route path="/:post" element={ useElement(<Post/>, <Login/>) } />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/perfil" element={useElement(<Perfil/>, <Login/>)} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    </BrowserRouter>
  </>
}

export default Router