import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import {
  Form,
  Button,
  Container,
  Row,
  Col,
  Card,
  Spinner,
  Alert,
} from "react-bootstrap";

import { useSelector, useDispatch } from "react-redux";
import { login } from "../actions/userActions";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";

const LoginPage = () => {
  const navigate = useNavigate();

  const [formState, setFormState] = useState({
    email: "",
    password: "",
    // remember: false,
  });
  const { user, loading, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormState({
      ...formState,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(login(formState.email, formState.password));
  };
  useEffect(() => {
    if (user) {
      toast.success("Login successfully");
      navigate("/");
    } else if (error) {
      toast.error(error);
    }
  }, [user, error, navigate]);
  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <Row className="w-100" style={{ maxWidth: "400px" }}>
        <Col>
          <Card>
            <Card.Body>
              <h2 className="text-center mb-4">Login</h2>
              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter password"
                    name="password"
                    value={formState.password}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                {/* <Form.Group className="mb-3" controlId="formRemember">
                  <Form.Check
                    type="checkbox"
                    label="Ghi nhớ đăng nhập"
                    name="remember"
                    checked={formState.remember}
                    onChange={handleChange}
                  />
                </Form.Group> */}
                <Button
                  variant="primary"
                  type="submit"
                  disabled={loading}
                  className="w-100"
                >
                  {loading ? <Spinner animation="border" size="sm" /> : "Login"}
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
