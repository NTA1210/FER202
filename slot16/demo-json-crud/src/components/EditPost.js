import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Form, Button, Alert, Container } from "react-bootstrap";
import PropTypes from "prop-types";

const EditPost = () => {
  const { id } = useParams(); // Lấy id từ URL
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [status, setStatus] = useState("");

  // Lấy dữ liệu bài viết hiện có
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/posts/${id}`);
        setTitle(res.data.title);
        setContent(res.data.content);
      } catch (error) {
        console.error("Lỗi khi lấy bài viết:", error);
        setStatus("Không thể tải bài viết.");
      }
    };

    fetchPost();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !content) {
      setStatus("Vui lòng nhập đầy đủ tiêu đề và nội dung.");
      return;
    }

    const updatedPost = { title, content };

    try {
      await axios.put(`http://localhost:3000/posts/${id}`, updatedPost);
      setStatus("Cập nhật thành công!");
      navigate("/posts");
    } catch (error) {
      console.error("Lỗi khi cập nhật:", error);
      setStatus("Xảy ra lỗi khi cập nhật bài viết.");
    }
  };

  return (
    <Container className="mt-4" style={{ maxWidth: "600px" }}>
      <h2>✏️ Chỉnh sửa bài viết</h2>
      {status && <Alert variant="info">{status}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Tiêu đề</Form.Label>
          <Form.Control
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Nhập tiêu đề mới"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Nội dung</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Nhập nội dung mới"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          💾 Cập nhật
        </Button>
      </Form>
    </Container>
  );
};

// Validate nếu cần
EditPost.propTypes = {
  id: PropTypes.string,
};

export default EditPost;
