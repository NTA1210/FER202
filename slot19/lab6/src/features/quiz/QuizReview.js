import React from "react";
import { useSelector } from "react-redux";
import { Container, Card, Button } from "react-bootstrap";

const QuizReview = () => {
  const { questions } = useSelector((state) => state.quiz);

  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4">Quiz Review</h2>
      {questions.map((q, i) => {
        const isCorrect = q.selectedAnswer === q.correctAnswer;
        return (
          <Card
            key={q.id}
            bg={isCorrect ? "success" : "danger"}
            text="white"
            className="mb-3"
          >
            <Card.Body>
              <Card.Title>
                Q{i + 1}. {q.question}
              </Card.Title>
              <ul>
                {q.options.map((opt, idx) => (
                  <li
                    key={idx}
                    style={{
                      color:
                        opt === q.correctAnswer
                          ? "white"
                          : opt === q.selectedAnswer
                          ? "#ffb3b3"
                          : "#e0e0e0",
                    }}
                  >
                    {opt === q.selectedAnswer && "✓"} {opt}
                  </li>
                ))}
              </ul>
              <Card.Text>
                <strong>Right answer is:</strong> {q.correctAnswer}
              </Card.Text>
            </Card.Body>
          </Card>
        );
      })}

      <Button
        variant="primary"
        onClick={() => (window.location.href = "/quizzes")}
      >
        Retake Quiz
      </Button>
    </Container>
  );
};

export default QuizReview;
