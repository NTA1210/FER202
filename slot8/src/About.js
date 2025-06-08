import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function About() {
  return (
    <div>
      <Card className="text-center">
        <Card.Header>About me</Card.Header>
        <Card.Body>
          <Card.Title>Nguyễn Tuấn Anh</Card.Title>
          <Card.Text>
            Hello everyone! I'am Nguyễn Tuấn Anh, 20 years old. I'm a student of
            FPT University majoring in Software Engineering.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default About;
