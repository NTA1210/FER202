import { Card, Button, Container, Row } from "react-bootstrap";
import menu1 from "./assets/menu1.jpg";
import menu2 from "./assets/menu2.jpg";
import menu3 from "./assets/menu3.jpg";
import menu4 from "./assets/menu4.jpg";

function Menu() {
  return (
    <Container className="Menu px-5">
      <div className="menu-title text-center text-white">
        <h1>Our Menu</h1>
      </div>
      <Row className="menu-items d-flex justify-content-center gap-2">
        <Card className="p-0">
          <Card.Img variant="top" src={menu1} alt="Delicious pepperoni pizza" />
          <span className="badge position-absolute text-bg-warning fs-5">
            SALE
          </span>
          <Card.Body>
            <Card.Title>Margherita Pizza</Card.Title>
            <Card.Text className="d-flex align-items-center">
              <p className="text-decoration-line-through">$40.00</p>
              <p className="text-warning">$24.00</p>
            </Card.Text>
            <Button variant="danger" className="w-100">
              Buy
            </Button>
          </Card.Body>
        </Card>
        {/*  */}
        <Card className="p-0">
          <Card.Img variant="top" src={menu2} alt="Delicious pepperoni pizza" />
          <Card.Body>
            <Card.Title>Mushroom Pizza</Card.Title>
            <Card.Text className="d-flex align-items-center">
              <p className="text-dark">$24.00</p>
            </Card.Text>
            <Button variant="danger" className="w-100">
              Buy
            </Button>
          </Card.Body>
        </Card>
        {/*  */}
        <Card className="p-0">
          <Card.Img variant="top" src={menu3} alt="Delicious pepperoni pizza" />
          <span className="badge position-absolute text-bg-warning fs-5">
            NEW
          </span>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text className="d-flex align-items-center">
              <p className="text-dark">$25.00</p>
            </Card.Text>
            <Button variant="danger" className="w-100">
              Buy
            </Button>
          </Card.Body>
        </Card>
        {/*  */}
        <Card className="p-0">
          <Card.Img variant="top" src={menu4} alt="Delicious pepperoni pizza" />
          <span className="badge position-absolute text-bg-warning fs-5">
            SALE
          </span>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text className="d-flex align-items-center">
              <p className="text-decoration-line-through">$40.00</p>
              <p className="text-warning">$30.00</p>
            </Card.Text>
            <Button variant="danger" className="w-100">
              Buy
            </Button>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
}

export default Menu;
