import React from "react";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import Container from "react-bootstrap/Container";
import Navigation from "./components/Navigation";
import HomePage from "./pages/HomePage";
import ArticlePage from "./pages/ArticlePage";
import AdminPage from "./pages/AdminPage";
import SearchPage from "./pages/SearchPage";
import CreateArticlePage from "./pages/CreateArticlePage";
import EditArticlePage from "./pages/EditArticlePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Test from "./components/Test";
import { Navigate } from "react-router-dom";

import { useLocation } from "react-router-dom";

import "./App.css";

const PrivateRoute = ({ children, allowedRoles }) => {
  const isAuthenticated = localStorage.getItem("user"); // hoặc "isLogin" tùy bạn

  const location = useLocation();
  return isAuthenticated ? (
    allowedRoles.includes(JSON.parse(isAuthenticated).role) ? (
      children
    ) : (
      <Navigate to="/" state={{ from: location }} />
    )
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
};

export default function App() {
  const location = useLocation();
  const hideNavbar = ["/login", "/register"].includes(location.pathname);

  return (
    <div className="d-flex flex-column min-vh-100 bg-light">
      {!hideNavbar && <Navigation />}
      <Container as="main" className="pt-4 flex-grow-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/article/:id" element={<ArticlePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/test" element={<Test />} />
          <Route
            path="/admin"
            element={
              <PrivateRoute allowedRoles={["admin"]}>
                <AdminPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/admin/create"
            element={
              <PrivateRoute allowedRoles={["admin"]}>
                <CreateArticlePage />
              </PrivateRoute>
            }
          />
          <Route
            path="/admin/edit/:id"
            element={
              <PrivateRoute allowedRoles={["admin"]}>
                <EditArticlePage />
              </PrivateRoute>
            }
          />
        </Routes>
      </Container>
      <Toaster position="top-right" />
    </div>
  );
}
