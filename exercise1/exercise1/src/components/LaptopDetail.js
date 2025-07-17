import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Row, Col, Card, Button, Alert } from "react-bootstrap";
import axios from "axios";

const LaptopDetail = () => {
  const { id } = useParams();
  const [laptop, setLaptop] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchLaptopDetail = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/Laptops/${id}`);
        setLaptop(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching laptop detail:", error);
        setError(true);
        setLoading(false);
      }
    };

    fetchLaptopDetail();
  }, [id]);

  const handleBackToList = () => {
    navigate("/laptops");
  };

  if (loading) {
    return (
      <Container className="mt-4">
        <div className="text-center">
          <p>Loading...</p>
        </div>
      </Container>
    );
  }

  if (error || !laptop) {
    return (
      <Container className="mt-4">
        <Alert variant="danger">
          <h4>404 - Laptop Not Found</h4>
          <p>The laptop with ID {id} could not be found.</p>
          <Button variant="primary" onClick={handleBackToList}>
            Back to Laptop List
          </Button>
        </Alert>
      </Container>
    );
  }

  return (
    <Container className="mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>Laptop Details</h1>
      </div>

      <Row className="justify-content-center">
        <Col md={6}>
          <Card>
            <Card.Img
              variant="top"
              src={laptop.image}
              alt={`${laptop.brand} ${laptop.model}`}
              style={{ height: "400px", objectFit: "cover" }}
            />
            <Card.Body className="text-start">
              <Card.Title className="mb-3">
                {laptop.brand} {laptop.model}
              </Card.Title>
              <Card.Text>
                <strong>Brand:</strong> {laptop.brand}
                <br />
                <strong>Model:</strong> {laptop.model}
                <br />
                <strong>Year:</strong> {laptop.year}
                <br />
                <strong>Price:</strong> {laptop.price}
                <br />
                <strong>Description:</strong> This is a high-quality{" "}
                {laptop.brand} {laptop.model}
                laptop from {laptop.year}, featuring premium build quality and
                excellent performance for both work and entertainment purposes.
              </Card.Text>
              <Button
                variant="secondary"
                onClick={handleBackToList}
                className="mt-3"
              >
                Back to List
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default LaptopDetail;
