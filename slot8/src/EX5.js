import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import logo from "./logo.png";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function EX5() {
  return (
    <>
      <Container
        fluid
        className="p-2 d-flex flex-column align-items-center"
        style={{ height: "300px", background: "#F98900" }}
      >
        <Row>
          <Image src={logo} fluid style={{ height: "240px", width: "auto" }} />
        </Row>
        <Row>
          <Navbar expand="lg" className="fs-5">
            <Container>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="#home" className="text-white">
                    Home
                  </Nav.Link>
                  <Nav.Link href="#about" className="text-white">
                    About
                  </Nav.Link>
                  <Nav.Link href="#contact" className="text-white">
                    Contact
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Row>
      </Container>

      <Container className="p-5">
        <Row className="gap-3">
          <h1>About</h1>
          <p>This is the about section of the website.</p>
        </Row>
        <Row className="gap-3 mt-3">
          <h1>Contact</h1>
          <p>For any inquiries, please contact us at example@example.com.</p>
        </Row>
      </Container>
      {/*  */}
      <Container
        fluid
        className="p-4 d-flex  align-items-center justify-content-center"
        style={{ background: "#FAC875" }}
      >
        <p className="m-0 text-white">@ 2023 Website. All rights reserved.</p>
      </Container>
    </>
  );
}

export default EX5;
