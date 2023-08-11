import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import JoinInfo from './pages/Join/Join_info';
import Login from './pages/Login';
import JoinDone from './pages/Join/Join_done';
import PostAdd from './pages/Post/Post_add';
import PostDetail from './pages/Post/Post_detail';
import PostEditing from './pages/Post/Post_editing';
import PostList from './pages/Post/Post_list';

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
