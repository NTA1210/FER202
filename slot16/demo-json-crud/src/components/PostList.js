import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import {
  Button,
  Card,
  Container,
  Row,
  Col,
  Spinner,
  Alert,
} from "react-bootstrap";

const PostList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const res = await axios.get("http://localhost:3000/posts");
      setData(res.data);
    } catch (error) {
      console.error("Lỗi khi lấy dữ liệu:", error);
      setStatus("Không thể tải dữ liệu bài viết.");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa bài viết này không?")) {
      try {
        await axios.delete(`http://localhost:3000/posts/${id}`);
        setData(data.filter((post) => post.id !== id));
        setStatus("Đã xóa bài viết thành công!");
      } catch (error) {
        console.error("Lỗi khi xóa bài viết:", error);
        setStatus("Xảy ra lỗi khi xóa bài viết.");
      }
    }
  };

  if (loading) {
    return (
      <Container className="text-center mt-5">
        <Spinner animation="border" />
        <p>Đang tải bài viết...</p>
      </Container>
    );
  }

  return (
    <Container className="mt-4">
      <h2>📚 Danh sách bài viết</h2>
      <Button as={Link} to="/create" className="mb-4" variant="success">
        ➕ Tạo bài viết mới
      </Button>

      {status && <Alert variant="info">{status}</Alert>}

      {data.length === 0 ? (
        <Alert variant="warning">Hiện chưa có bài viết nào.</Alert>
      ) : (
        <Row xs={1} md={2} lg={3} className="g-4">
          {data.map((post) => (
            <Col key={post.id}>
              <Card>
                <Card.Body>
                  <Card.Title>{post.title}</Card.Title>
                  <Card.Text>{post.content}</Card.Text>
                  <Button
                    as={Link}
                    to={`/edit/${post.id}`}
                    variant="outline-primary"
                    className="me-2"
                  >
                    ✏️ Sửa
                  </Button>
                  <Button
                    variant="outline-danger"
                    onClick={() => handleDelete(post.id)}
                  >
                    🗑️ Xóa
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default PostList;
