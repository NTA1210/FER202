import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Post from "./components/Post";
import PostDetail from "./components/PostDetail";
import Login from "./components/Login";
import Navigation from "./components/Navigation";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/posts"
          element={
            <PrivateRoute>
              <Post />
            </PrivateRoute>
          }
        />
        <Route path="/post/:id" element={<PostDetail />} />
      </Routes>
    </div>
  );
}

export default App;
