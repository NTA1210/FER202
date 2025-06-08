import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";

import logo from "./logo.png";

function Card() {
  return (
    <Container className="border rounded p-3">
      <Row>
        <Col>
          <Image src={logo} />
        </Col>
        <Col>
          <Row>
            <h1>HOAI NGUYEN - FPT DA NANG</h1>
          </Row>
          <Row className="">
            <p>Mobile: 0982827763</p>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Card;
