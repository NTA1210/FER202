import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card, Button, Form, InputGroup } from 'react-bootstrap';
import axios from 'axios';
import { FaSearch } from 'react-icons/fa';

const LaptopList = () => {
  const [laptops, setLaptops] = useState([]);
  const [filteredLaptops, setFilteredLaptops] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchLaptops();
  }, []);

  const fetchLaptops = async () => {
    try {
      const response = await axios.get('http://localhost:3001/Laptops');
      setLaptops(response.data);
      setFilteredLaptops(response.data);
    } catch (error) {
      console.error('Error fetching laptops:', error);
    }
  };

  const handleSearch = () => {
    if (searchTerm.trim() === '') {
      setFilteredLaptops(laptops);
    } else {
      const filtered = laptops.filter(laptop =>
        laptop.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
        laptop.model.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredLaptops(filtered);
    }
  };

  const handleViewDetails = (id) => {
    navigate(`/laptops/${id}`);
  };

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <Container className="mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>Laptop List</h1>
        <Button variant="outline-danger" onClick={handleLogout}>
          Logout
        </Button>
      </div>

      <Row className="mb-4">
        <Col md={8}>
          <InputGroup style={{ borderRadius: '0.5rem', border: '1.5px solid #d0d7de', overflow: 'hidden', background: '#fff' }}>
            <InputGroup.Text style={{ background: 'transparent', border: 'none', paddingLeft: '1rem' }}>
              <FaSearch style={{ color: '#888', fontSize: '1.1rem' }} />
            </InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Search by brand or model..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ border: 'none', boxShadow: 'none', background: 'transparent', padding: '0.75rem 1rem' }}
            />
            <Button 
              variant="primary" 
              onClick={handleSearch}
              style={{ 
                borderRadius: '0.5rem',
                margin: '0.3rem',
                padding: '0.5rem 1.25rem',
                fontWeight: 'bold',
                border: 'none',
                transition: 'background 0.2s',
                boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
              }}
              onMouseOver={e => e.currentTarget.style.background = '#0056b3'}
              onMouseOut={e => e.currentTarget.style.background = '#0d6efd'}
            >
              Search
            </Button>
          </InputGroup>
        </Col>
      </Row>

      <Row>
        {filteredLaptops.map(laptop => (
          <Col key={laptop.id} md={3} lg={3} className="mb-4">
            <Card className="h-100">
              <Card.Img 
                variant="top" 
                src={laptop.image} 
                alt={`${laptop.brand} ${laptop.model}`}
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <Card.Body className="d-flex flex-column align-items-start">
                <Card.Title>{laptop.brand} {laptop.model}</Card.Title>
                <Card.Text>
                  <strong>Year:</strong> {laptop.year}<br />
                  <strong>Price:</strong> {laptop.price}
                </Card.Text>
                <Button 
                  variant="primary" 
                  className="mt-auto"
                  size="sm"
                  onClick={() => handleViewDetails(laptop.id)}
                >
                  View Details
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {filteredLaptops.length === 0 && (
        <Row>
          <Col>
            <div className="text-center mt-4">
              <p>No laptops found matching your search criteria.</p>
            </div>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default LaptopList;
