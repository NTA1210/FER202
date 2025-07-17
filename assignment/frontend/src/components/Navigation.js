import React, { useState, useEffect } from "react";
import {
  Navbar,
  Nav,
  Container,
  Dropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { Search, Menu, X } from "lucide-react";

import newsService from "../services/newsService";

const Navigation = () => {
  const [expanded, setExpanded] = useState(false);
  const [categories, setCategories] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  // Fetch danh mục từ BE
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await newsService.getAllCategories();
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);

  // Cập nhật giá trị input từ URL nếu có
  useEffect(() => {
    const currentQ = searchParams.get("q") || "";
    setSearchText(currentQ);
  }, [searchParams]);

  // Submit tìm kiếm
  const handleSubmitSearch = (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    const input = form.elements.q;
    const queryValue = input.value.trim();

    const query = new URLSearchParams(searchParams);
    query.set("q", queryValue);

    navigate(`/search?${query.toString()}`);
    setExpanded(false);
  };

  // Chọn category từ dropdown
  const handleCategoryClick = (category) => {
    const query = new URLSearchParams(searchParams);
    console.log(query.toString());

    query.set("category", category);
    query.set("page", 1); // reset về trang đầu tiên
    navigate(`/search?${query.toString()}`);
    setExpanded(false);
  };

  return (
    <Navbar expand="md" className="py-2 shadow bg-white" expanded={expanded}>
      <Container className="d-flex justify-content-between align-items-center">
        {/* Logo */}
        <Navbar.Brand as={Link} to="/" className="fw-bold fs-4 text-gradient">
          NewsHub
        </Navbar.Brand>

        {/* Toggle cho mobile */}
        <Navbar.Toggle
          aria-controls="main-navbar"
          onClick={() => setExpanded((prev) => !prev)}
        >
          {expanded ? <X size={24} /> : <Menu size={24} />}
        </Navbar.Toggle>

        <Navbar.Collapse
          id="main-navbar"
          className="d-md-flex justify-content-end align-items-center"
        >
          {/* Dropdown category */}
          <Dropdown title="Category" id="basic-nav-dropdown">
            <Dropdown.Toggle variant="text" id="dropdown-basic">
              Category
            </Dropdown.Toggle>
            <Dropdown.Menu style={{ maxHeight: "300px", overflowY: "auto" }}>
              <Dropdown.Item
                key={categories.length}
                onClick={() => handleCategoryClick("")}
                style={{ textTransform: "capitalize" }}
              >
                All Categories
              </Dropdown.Item>
              {categories.map((category, index) => (
                <Dropdown.Item
                  key={index}
                  onClick={() => handleCategoryClick(category)}
                  style={{ textTransform: "capitalize" }}
                >
                  {category}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>

          {/* Nav links */}
          <Nav className="me-3 d-flex align-items-md-center">
            <Nav.Link as={Link} to="/" onClick={() => setExpanded(false)}>
              Latest
            </Nav.Link>
            <Nav.Link as={Link} to="/admin" onClick={() => setExpanded(false)}>
              Admin
            </Nav.Link>
          </Nav>

          {/* Search bar */}
          <Form className="d-flex" onSubmit={handleSubmitSearch}>
            <div className="position-relative">
              <FormControl
                type="search"
                placeholder="Search articles..."
                className="py-2 px-5 rounded-pill"
                name="q"
                defaultValue={searchParams.get("q") || ""}
              />
              <Search
                size={18}
                className="position-absolute top-50 start-0 translate-middle-y ms-3 text-muted"
              />
            </div>
            <Button type="submit" className="d-none">
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
