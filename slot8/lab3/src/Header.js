import {
  Container,
  Row,
  Col,
  Nav,
  Navbar,
  Form,
  Button,
} from "react-bootstrap";

function Header() {
  return (
    <Container fluid className="bg-gray">
      <Row className="px-6 py-2 d-flex justify-content-between align-items-center">
        <Col md={8} className="d-flex gap-4 align-items-center text-white">
          <div className="title">
            <h2>Pizza House</h2>
          </div>
          <Navbar expand="lg" variant="dark" className="menu">
            <Nav className="fs-5">
              <Nav.Link href="/" className="nav-link active">
                Home
              </Nav.Link>
              <Nav.Link href="/" className="nav-link">
                About Us
              </Nav.Link>
              <Nav.Link href="/" className="nav-link">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar>
        </Col>
        <Col md={4}>
          <Form className="d-flex" role="search">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="danger" type="submit">
              <i className="bi bi-search"></i>
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Header;
