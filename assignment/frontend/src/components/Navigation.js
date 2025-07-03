import React, { useState } from "react";
import {
  Navbar,
  Nav,
  Container,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { Search, Menu, X, ChevronDown } from "lucide-react";
import { categories } from "../utils/mockData";

const Navigation = () => {
  const [expanded, setExpanded] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setSearchQuery("");
      setExpanded(false);
    }
  };

  return (
    <Navbar expand="md" className="py-2 shadow bg-white">
      <Container className="d-flex justify-content-between align-items-center">
        {/* Logo trái */}
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

        {/* Nav + Search */}
        <Navbar.Collapse
          id="main-navbar"
          className="d-md-flex justify-content-end align-items-center"
        >
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
          <Nav className="me-3 d-flex align-items-md-center">
            <Nav.Link as={Link} to="/" onClick={() => setExpanded(false)}>
              Latest
            </Nav.Link>
            <Nav.Link as={Link} to="/admin" onClick={() => setExpanded(false)}>
              Admin
            </Nav.Link>
          </Nav>

          {/* Search Bar */}
          <Form className="d-flex" onSubmit={handleSearch}>
            <div className="position-relative">
              <FormControl
                type="search"
                placeholder="Search articles..."
                className="py-2 px-5 rounded-pill"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
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
