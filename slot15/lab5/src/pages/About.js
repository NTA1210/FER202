import { Container, Row, Col, Card, Image } from "react-bootstrap";

function About() {
  return (
    <Container className="py-5">
      <h2 className="text-success text-center mb-4">About Us</h2>

      <Row className="align-items-center mb-5">
        <Col md={6}>
          <Image src="/images/banner.png" alt="Delicious Food" fluid rounded />
        </Col>
        <Col md={6}>
          <h4 className="text-danger">Our Story</h4>
          <p>
            Welcome to <strong>Foodie Heaven</strong> – a culinary corner
            designed for food lovers! Our mission is to bring you closer to the
            rich flavors of Vietnamese cuisine while helping you explore dishes
            from around the world.
          </p>
          <p>
            From mouth-watering street food to elegant dining, we believe food
            is not just nourishment – it’s an experience worth sharing.
          </p>
        </Col>
      </Row>

      <Row>
        <Col md={4}>
          <Card className="mb-4 shadow-sm border-0">
            <Card.Body>
              <Card.Title className="text-success">
                🌿 Fresh Ingredients
              </Card.Title>
              <Card.Text>
                We value local, seasonal produce that makes every dish flavorful
                and nutritious.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="mb-4 shadow-sm border-0">
            <Card.Body>
              <Card.Title className="text-success">
                🍜 Cultural Recipes
              </Card.Title>
              <Card.Text>
                Learn traditional recipes passed down through generations and
                reimagined for modern taste buds.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="mb-4 shadow-sm border-0">
            <Card.Body>
              <Card.Title className="text-success">
                👩‍🍳 Community First
              </Card.Title>
              <Card.Text>
                We are passionate about sharing food knowledge and engaging with
                chefs, home cooks, and foodies like you.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
