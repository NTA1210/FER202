import React, { useState } from "react";
import {
  Container,
  Table,
  Form,
  Button,
  Modal,
  Row,
  Col,
  InputGroup,
  Badge,
} from "react-bootstrap";
import { Search } from "lucide-react";
import AdminTableRow from "../components/AdminTableRow";
import { articles as mockArticles, categories } from "../utils/mockData";

const AdminPage = () => {
  const [articles, setArticles] = useState(mockArticles);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortOrder, setSortOrder] = useState("latest");
  const [articleToDelete, setArticleToDelete] = useState(null);

  const filteredArticles = articles
    .filter((a) => a.title.toLowerCase().includes(searchQuery.toLowerCase()))
    .filter((a) =>
      selectedCategory === "all" ? true : a.categoryId === selectedCategory
    )
    .sort((a, b) => {
      if (sortOrder === "latest")
        return new Date(b.publishDate) - new Date(a.publishDate);
      else return new Date(a.publishDate) - new Date(b.publishDate);
    });

  const handleDelete = () => {
    setArticles((prev) => prev.filter((a) => a.id !== articleToDelete.id));
    setArticleToDelete(null);
  };

  return (
    <Container className="py-5">
      <h2 className="mb-4">Manage Articles</h2>

      {/* Filter Bar */}
      <Row className="align-items-center mb-4">
        <Col md={4} className="mb-2">
          <InputGroup>
            <InputGroup.Text>
              <Search size={16} />
            </InputGroup.Text>
            <Form.Control
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </InputGroup>
        </Col>

        <Col md={4} className="mb-2">
          <Form.Select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="all">All Categories</option>
            {categories.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
          </Form.Select>
        </Col>

        <Col md={4} className="mb-2">
          <Form.Select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="latest">Newest First</option>
            <option value="oldest">Oldest First</option>
          </Form.Select>
        </Col>
      </Row>

      {/* Articles Table */}
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
          {filteredArticles.map((article) => (
            <AdminTableRow
              key={article.id}
              article={article}
              onDelete={setArticleToDelete}
            />
          ))}
        </tbody>
      </Table>

      {/* Delete Confirmation Modal */}
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
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default AdminPage;
