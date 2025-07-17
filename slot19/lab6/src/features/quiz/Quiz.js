import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectAnswer,
  nextQuestion,
  prevQuestion,
  goToQuestion,
  submitQuiz,
  resetQuiz,
} from "./quizSlice";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  Form,
  Alert,
  Modal,
} from "react-bootstrap";

const Quiz = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { questions, currentQuestionIndex } = useSelector(
    (state) => state.quiz
  );
  const question = questions[currentQuestionIndex];
  const [showAlert, setShowAlert] = useState(false);
  const [showEndAlert, setShowEndAlert] = useState(false);
  const [showResetModal, setShowResetModal] = useState(false);

  const handleSelect = (answer) => {
    dispatch(selectAnswer({ questionId: question.id, answer }));
  };

  const handleSubmit = () => {
    const hasUnanswered = questions.some((q) => !q.selectedAnswer);
    if (hasUnanswered) {
      setShowAlert(true);
    } else {
      dispatch(submitQuiz());
      navigate("/result");
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      dispatch(nextQuestion());
    } else {
      const hasUnanswered = questions.some((q) => !q.selectedAnswer);
      if (hasUnanswered) {
        setShowAlert(true);
      } else {
        setShowEndAlert(true);
      }
    }
  };

  const handleResetConfirm = () => {
    dispatch(resetQuiz());
    setShowResetModal(false);
  };

  return (
    <Container className="mt-4">
      {showAlert && (
        <Alert variant="danger" onClose={() => setShowAlert(false)} dismissible>
          Please answer all questions before submitting the quiz.
        </Alert>
      )}
      {showEndAlert && (
        <Alert
          variant="success"
          onClose={() => setShowEndAlert(false)}
          dismissible
        >
          You have reached the end of the quiz and answered all questions.
          Please click Submit to finish.
        </Alert>
      )}

      <Card className="text-center">
        <Card.Header as="h3">JavaScript Quiz</Card.Header>
        <Card.Body>
          <Card.Title>
            <strong>Q.{currentQuestionIndex + 1}</strong> {question.question}
          </Card.Title>

          <Row className="mt-3">
            {question.options.map((opt, idx) => (
              <Col md={6} key={idx} className="mb-2">
                <Card bg="light">
                  <Card.Body>
                    <Form.Check
                      type="radio"
                      name={`q${question.id}`}
                      label={opt}
                      checked={question.selectedAnswer === opt}
                      onChange={() => handleSelect(opt)}
                    />
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          <div className="mt-4">
            <Button
              variant="primary"
              onClick={() => dispatch(goToQuestion(0))}
              className="me-2"
              disabled={currentQuestionIndex === 0}
            >
              First
            </Button>
            <Button
              variant="primary"
              onClick={() => dispatch(prevQuestion())}
              className="me-2"
              disabled={currentQuestionIndex === 0}
            >
              Prev
            </Button>
            <Button variant="primary" onClick={handleNext} className="me-2">
              Next
            </Button>
            <Button
              variant="primary"
              onClick={() => dispatch(goToQuestion(questions.length - 1))}
            >
              Last
            </Button>
          </div>

          <div className="mt-3">
            <Button
              variant="info"
              onClick={() => navigate("/quizzes")}
              className="me-2"
            >
              Quiz
            </Button>
            <Button
              variant="warning"
              onClick={() => setShowResetModal(true)}
              className="me-2"
            >
              Reset
            </Button>
            <Button
              variant="info"
              onClick={() => navigate("/review")}
              className="me-2"
            >
              Review
            </Button>
            <Button variant="success" onClick={handleSubmit}>
              Submit
            </Button>
          </div>
        </Card.Body>
      </Card>

      <Modal show={showResetModal} onHide={() => setShowResetModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Reset</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to reset your quiz answers?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowResetModal(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleResetConfirm}>
            Reset
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Quiz;
