import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Form, Button, Alert, Modal } from 'react-bootstrap';
import PropTypes from 'prop-types';
import axios from 'axios';

const Login = ({ setUser }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.get('http://localhost:3001/UserAccounts');
      const users = response.data;
      
      const user = users.find(u => 
        u.username === username && 
        u.password === password && 
        u.status === 'active'
      );
      
      if (user) {
        setUser(user);
        setShowSuccess(true);
        setTimeout(() => {
          setShowSuccess(false);
          navigate('/laptops');
        }, 2000);
      } else {
        setShowError(true);
        setTimeout(() => setShowError(false), 3000);
      }
    } catch (error) {
      console.error('Login error:', error);
      setShowError(true);
      setTimeout(() => setShowError(false), 3000);
    }
  };

  return (
    <Container className="mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="text-center mb-4">Login</h2>
              
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    placeholder="Enter username"
                  />
                </Form.Group>
                
                <Form.Group className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    placeholder="Enter password"
                  />
                </Form.Group>
                
                <Button variant="primary" type="submit" className="w-100">
                  Login
                </Button>
              </Form>
              
              {showError && (
                <Alert variant="danger" className="mt-3">
                  Invalid username or password!
                </Alert>
              )}
            </div>
          </div>
        </div>
      </div>
      
      <Modal show={showSuccess} onHide={() => setShowSuccess(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Login Successful</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Welcome, {username} login Successful!
        </Modal.Body>
      </Modal>
    </Container>
  );
};

Login.propTypes = {
  setUser: PropTypes.func.isRequired,
};

export default Login;
