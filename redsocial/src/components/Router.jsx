import { BrowserRouter, Routes, Route } from "react-router-dom";

import React from "react";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NotFound from "../pages/NotFound";
import Perfil from "../pages/Perfil";
import Post from "../pages/Post";
import Chats from "../pages/Chats";
import AddChats from "../pages/AddChats";
import Chat from "../pages/Chat";
import EditChat from "../pages/EditChat";
import EditPost from "../pages/EditPost";

import NavBar from "./NavBar";

import useElement from "../hooks/useElement";
import AddPost from "../pages/AddPosts";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={useElement(<Home />, <Login />)} />
          <Route
            path="/posts/add"
            element={useElement(<AddPost />, <Login />)}
          />
          <Route
            path="/posts/:post"
            element={useElement(<Post />, <Login />)}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/chats" element={useElement(<Chats />, <Login />)} />
          <Route
            path="/chats/:chat"
            element={useElement(<Chat />, <Login />)}
          />
          <Route
            path="/chats/add"
            element={useElement(<AddChats />, <Login />)}
          />
          <Route path="/perfil" element={useElement(<Perfil />, <Login />)} />
          <Route path="*" element={<NotFound />} />

          <Route path="/edit/chat/:chat" element={useElement(<EditChat/>, <Login/>)} />
          <Route path="/edit/post/:post" element={useElement(<EditPost/>, <Login/>)} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;