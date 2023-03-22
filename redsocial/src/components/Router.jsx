import { BrowserRouter, Routes, Route } from 'react-router-dom';

import React from 'react'
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import NotFound from '../pages/NotFound';

import NavBar from './NavBar';

const Router = () => {
  return <>
    <BrowserRouter>
        <NavBar/>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    </BrowserRouter>
  </>
}

export default Router