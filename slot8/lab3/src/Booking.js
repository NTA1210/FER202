import { Container, Form, Button } from "react-bootstrap";

function Booking() {
  return (
    <Container className="mt-4 text-white px-5">
      <h2 className="mb-1 text-center">Book Your Table</h2>
      <Form>
        <div className="row mb-5">
          <div className="col-md-4">
            <Form.Control
              type="text"
              id="name"
              placeholder="Your Name*"
              required
            />
          </div>
          <div className="col-md-4">
            <Form.Control
              type="email"
              id="email"
              placeholder="Your Email*"
              required
            />
          </div>
          <div className="col-md-4">
            <Form.Select id="service">
              <option value="">Select a service</option>
              <option value="dine-in">Dine In</option>
              <option value="takeaway">Takeaway</option>
              <option value="delivery">Delivery</option>
            </Form.Select>
          </div>
        </div>
        <Form.Group className="mb-3">
          <Form.Control
            as="textarea"
            id="comment"
            rows={4}
            placeholder="Please write your comment here"
          />
        </Form.Group>
        <Button variant="warning" type="submit" className="text-white">
          Send Message
        </Button>
      </Form>
    </Container>
  );
}

export default Booking;
