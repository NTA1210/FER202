import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Card, Alert, Spinner, Container } from "react-bootstrap";

import { useSelector, useDispatch } from "react-redux";
import { register } from "../actions/userActions";
import { toast } from "sonner";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [formState, setFormState] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });

  const [error1, setError1] = useState(null);
  const { user, loading, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError1(null);

    if (formState.password !== formState.confirmPassword) {
      setError1("Passwords do not match.");
      return;
    }

    if (formState.password.length < 6) {
      setError1("Password must be at least 6 characters.");
      return;
    }

    if (!formState.terms) {
      setError1("Please accept the terms and conditions.");
      return;
    }

    dispatch(register(formState.email, formState.password));
  };

  useEffect(() => {
    if (user) {
      toast.success("Login successfully");
      navigate("/");
    } else if (error) {
      toast.error(error);
    }
  }, [user, error, navigate]);

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <Card style={{ width: "100%", maxWidth: "400px" }}>
        <Card.Body>
          <h3 className="text-center mb-4">Sign up an account</h3>

          {error1 && <Alert variant="danger">{error1}</Alert>}

          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={formState.email}
                onChange={(e) =>
                  setFormState({ ...formState, email: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                value={formState.password}
                onChange={(e) =>
                  setFormState({ ...formState, password: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formConfirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm password"
                value={formState.confirmPassword}
                onChange={(e) =>
                  setFormState({
                    ...formState,
                    confirmPassword: e.target.value,
                  })
                }
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formTerms">
              <Form.Check
                type="checkbox"
                label="I agree to the terms and conditions"
                checked={formState.terms}
                onChange={(e) =>
                  setFormState({ ...formState, terms: e.target.checked })
                }
              />
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              disabled={loading}
              className="w-100"
            >
              {loading ? (
                <>
                  <Spinner animation="border" size="sm" className="me-2" />
                  Registering
                </>
              ) : (
                "Register"
              )}
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default RegisterPage;
