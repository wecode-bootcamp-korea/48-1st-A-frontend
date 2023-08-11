import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Join_info from "./pages/Join/Join_info";
import Login from "./pages/Login";
import Join_done from "./pages/Join/Join_done";
import Post_add from "./pages/Post/Post_add";
import Post_detail from "./pages/Post/Post_detail";
import Post_editing from "./pages/Post/Post_editing";
import Post_list from "./pages/Post/Post_list";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/join-info" element={<Join_info />} />
        <Route path="/join-done" element={<Join_done />} />
        <Route path="/post-add" element={<Post_add />} />
        <Route path="/post-detail" element={<Post_detail />} />
        <Route path="/post-editing" element={<Post_editing />} />
        <Route path="/post-list" element={<Post_list />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
