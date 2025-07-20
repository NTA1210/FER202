import React, { useState, useEffect } from "react";
import {
  Container,
  Table,
  Form,
  Button,
  Modal,
  Row,
  Col,
  InputGroup,
  NavDropdown,
  Dropdown,
} from "react-bootstrap";
import { Search } from "lucide-react";
import AdminTableRow from "../components/AdminTableRow";
import { useSelector, useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";
import { searchArticles, deleteArticle } from "../actions/newsActions";
import newsService from "../services/newsService";

const sortOptions = [
  { value: "newest", label: "Latest" },
  { value: "oldest", label: "Oldest" },
];

const AdminPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  // Get query params
  const q = searchParams.get("q") || "";
  const category = searchParams.get("category") || "";
  const page = parseInt(searchParams.get("page")) || 1;
  const sort = searchParams.get("sort") || "";

  // Local states
  const [searchTerm, setSearchTerm] = useState(q);
  const [categories, setCategories] = useState([]);
  const [articleToDelete, setArticleToDelete] = useState(null);

  const { news, loading, error, pagination } = useSelector(
    (state) => state.news
  );
  const dispatch = useDispatch();

  // Fetch articles mỗi khi filter/search thay đổi
  useEffect(() => {
    dispatch(searchArticles({ q, category, page, sort }));
    setSearchTerm(q); // đồng bộ input khi query thay đổi từ bên ngoài
  }, [q, category, page, sort, articleToDelete, dispatch]);

  // Fetch categories
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

  // Tìm kiếm bài viết
  const handleSubmitSearch = (e) => {
    e.preventDefault();
    const query = new URLSearchParams(searchParams);

    if (searchTerm.trim()) {
      query.set("q", searchTerm.trim());
    } else {
      query.delete("q");
    }
    query.set("page", 1);
    setSearchParams(query);
  };

  // Chọn category từ dropdown
  const handleCategoryClick = (category) => {
    const query = new URLSearchParams(searchParams);
    if (category) {
      query.set("category", category);
    } else {
      query.delete("category");
    }
    query.set("page", 1);
    setSearchParams(query);
  };

  // Chọn sắp xếp
  const handleChangeSort = (newSort) => {
    const query = new URLSearchParams(searchParams);
    query.set("sort", newSort);
    query.set("page", 1);
    setSearchParams(query);
  };

  // Chuyển trang
  const handleChangePage = (newPage) => {
    const query = new URLSearchParams(searchParams);
    query.set("page", newPage);
    setSearchParams(query);
  };

  const handleDelete = async (id) => {
    try {
      dispatch(deleteArticle(id)); // ✅ đợi xóa xong
      setArticleToDelete(null);
      toast.success("Deleted successfully");
    } catch (error) {
      toast.error(error?.message || "Delete failed");
    }
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  return (
    <Container className="py-5">
      <Row className="align-items-center mb-4">
        <Col>
          <h2 className="mb-0">Manage Articles</h2>
        </Col>
        <Col className="text-end">
          <Button variant="success" onClick={() => navigate("/admin/create")}>
            Create News
          </Button>
        </Col>
      </Row>

      {/* Filter Bar */}
      <Row className="align-items-center mb-4">
        <Col md={6} className="mb-2">
          <Form onSubmit={handleSubmitSearch}>
            <InputGroup>
              <InputGroup.Text>
                <Search size={16} />
              </InputGroup.Text>
              <Form.Control
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Button variant="primary" type="submit">
                Search
              </Button>
            </InputGroup>
          </Form>
        </Col>

        <Col md={4} className="mb-2">
          <Dropdown
            title="Category"
            className="w-100 border rounded"
            style={{ height: "38px" }}
            align={{ sm: "end" }}
          >
            <Dropdown.Toggle
              variant="text"
              id="dropdown-basic"
              className="w-100 bg-white text-start"
            >
              {category ? category : "All Categories"}
            </Dropdown.Toggle>
            <Dropdown.Menu
              style={{ maxHeight: "300px", width: "100%", overflowY: "auto" }}
            >
              <Dropdown.Item onClick={() => handleCategoryClick("")}>
                All Categories
              </Dropdown.Item>
              {categories.map((cat, idx) => (
                <Dropdown.Item
                  key={idx}
                  onClick={() => handleCategoryClick(cat)}
                  style={{ textTransform: "capitalize" }}
                >
                  {cat}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </Col>

        <Col md={2} className="mb-2">
          <NavDropdown
            title={`Sort ${sort ? "by: " + sort : ""}`}
            className="border border-1 w-auto p-2 align-self-end rounded fw-semibold d-flex justify-content-start align-items-center bg-white"
            style={{ height: "38px" }}
            align={{ sm: "end" }}
          >
            {sortOptions.map((option) => (
              <NavDropdown.Item
                key={option.value}
                onClick={() => handleChangeSort(option.value)}
              >
                {option.label}
              </NavDropdown.Item>
            ))}
          </NavDropdown>
        </Col>
      </Row>

      {/* Table */}
      {loading ? (
        <LoadingSpinner message="Đang tải dữ liệu..." />
      ) : (
        <>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Category</th>
                <th>Author</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {news.map((article) => (
                <AdminTableRow
                  key={article.article_id}
                  article={article}
                  onDelete={() => setArticleToDelete(article)}
                />
              ))}
            </tbody>
          </Table>

          {/* Pagination đơn giản */}
          <div className="d-flex justify-content-center mt-4">
            {Array.from({ length: pagination.totalPages || 1 }, (_, index) => (
              <Button
                key={index + 1}
                className="mx-1"
                variant={
                  pagination.page === index + 1 ? "primary" : "outline-primary"
                }
                onClick={() => handleChangePage(index + 1)}
              >
                {index + 1}
              </Button>
            ))}
          </div>
        </>
      )}

      {/* Modal xác nhận xóa */}
      <Modal
        show={!!articleToDelete}
        onHide={() => setArticleToDelete(null)}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete{" "}
          <strong>{articleToDelete?.title}</strong>?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setArticleToDelete(null)}>
            Cancel
          </Button>
          <Button
            variant="danger"
            onClick={() => handleDelete(articleToDelete.article_id)}
          >
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default AdminPage;
