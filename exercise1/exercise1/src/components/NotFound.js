import React from 'react';
import { Container, Alert, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/laptops');
  };

  return (
    <Container className="mt-5">
      <div className="text-center">
        <Alert variant="warning">
          <h1>404 - Page Not Found</h1>
          <p>The page you are looking for does not exist.</p>
          <Button variant="primary" onClick={handleGoHome}>
            Go to Laptop List
          </Button>
        </Alert>
      </div>
    </Container>
  );
};

export default NotFound;
