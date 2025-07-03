import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { Form, Button, Alert, Container } from "react-bootstrap";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [status, setStatus] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Kiểm tra rỗng
    if (!title || !content) {
      setStatus("Vui lòng nhập đầy đủ tiêu đề và nội dung.");
      return;
    }

    const newPost = { title, content };

    try {
      await axios.post("http://localhost:3000/posts", newPost);
      setStatus("Bài viết đã được tạo thành công!");
      // Reset form
      setTitle("");
      setContent("");
      // Chuyển hướng về danh sách
      navigate("/posts");
    } catch (error) {
      console.error("Lỗi khi tạo bài viết:", error);
      setStatus("Xảy ra lỗi khi tạo bài viết.");
    }
  };

  return (
    <Container className="mt-4" style={{ maxWidth: "600px" }}>
      <h2>📝 Tạo bài viết mới</h2>
      {status && <Alert variant="info">{status}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Tiêu đề</Form.Label>
          <Form.Control
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Nhập tiêu đề bài viết"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Nội dung</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Nhập nội dung bài viết"
          />
        </Form.Group>

        <Button variant="success" type="submit">
          ✅ Tạo bài viết
        </Button>
      </Form>
    </Container>
  );
};

// Validate props nếu cần
CreatePost.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
};

export default CreatePost;
