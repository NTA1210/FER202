import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import Container from "react-bootstrap/Container";
import Navigation from "./components/Navigation";
import HomePage from "./pages/HomePage";
import ArticlePage from "./pages/ArticlePage";
import AdminPage from "./pages/AdminPage";
import SearchPage from "./pages/SearchPage";
import CreateArticlePage from "./pages/CreateArticlePage";
import EditArticlePage from "./pages/EditArticlePage";
import Test from "./components/Test";

import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column min-vh-100 bg-light">
        <Navigation />
        <Container as="main" className="pt-4 flex-grow-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/article/:id" element={<ArticlePage />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/admin/create" element={<CreateArticlePage />} />
            <Route path="/admin/edit/:id" element={<EditArticlePage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/test" element={<Test />} />
          </Routes>
        </Container>
        <Toaster position="top-right" />
      </div>
    </BrowserRouter>
  );
}
