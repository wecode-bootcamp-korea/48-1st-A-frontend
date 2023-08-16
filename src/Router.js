import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import JoinInfo from './pages/Join/JoinInfo';
import Login from './pages/Login/Login';
import JoinDone from './pages/Join/JoinDone';
import PostAdd from './pages/Post/PostAdd/PostAdd';
import PostDetail from './pages/Post/PostDetail/PostDetail';
import PostEditing from './pages/Post/PostEditing/PostEditing';
import PostList from './pages/Post/PostList/PostList';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/join-info" element={<JoinInfo />} />
        <Route path="/join-done" element={<JoinDone />} />
        <Route path="/post-add" element={<PostAdd />} />
        <Route path="/post-detail" element={<PostDetail />} />
        <Route path="/post-editing" element={<PostEditing />} />
        <Route path="/post-list" element={<PostList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
