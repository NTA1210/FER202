import React from "react";
import { useSelector } from "react-redux";
import { Container, Row, Col, Card } from "react-bootstrap";

const QuestionStatus = () => {
  const { questions } = useSelector((state) => state.quiz);

  return (
    <Container className="mt-4">
      <h2 className="text-center">Quiz Review</h2>
      <Row className="mt-3">
        {questions.map((q, idx) => (
          <Col md={3} sm={6} xs={12} key={q.id} className="mb-3">
            <Card bg={q.selectedAnswer ? "success" : "warning"} text="dark">
              <Card.Body className="text-center">
                <Card.Title>Question No {idx + 1}</Card.Title>
                <Card.Text>
                  <strong>
                    {q.selectedAnswer ? "Answered" : "Not Answered"}
                  </strong>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default QuestionStatus;
