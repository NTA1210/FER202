import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { Form, Button, Alert, Container } from "react-bootstrap";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      setMessage("Vui lòng nhập username và password");
      return;
    }

    try {
      const res = await axios.get("http://localhost:3000/useraccounts");
      const user = res.data.find(
        (u) => u.username === username && u.password === password
      );
      if (user) {
        alert(`Login successfully with username: ${username}`);
        navigate("/posts");
      } else {
        setMessage("Thông tin đăng nhập không đúng.");
      }
    } catch (error) {
      console.error("Lỗi đăng nhập:", error);
      setMessage("Đã xảy ra lỗi.");
    }
  };

  return (
    <Container className="mt-5" style={{ maxWidth: "400px" }}>
      <h2>Đăng nhập</h2>
      {message && <Alert variant="danger">{message}</Alert>}
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3">
          <Form.Label>Tên đăng nhập</Form.Label>
          <Form.Control
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Nhập username"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Mật khẩu</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Nhập mật khẩu"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Đăng nhập
        </Button>
      </Form>
    </Container>
  );
};

Login.propTypes = {
  username: PropTypes.string,
  password: PropTypes.string,
};

export default Login;
