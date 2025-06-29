import { useReducer } from "react";
import questions from "../data/question";
import { Button } from "react-bootstrap";
import "../styles/Quiz.css";

const initialState = {
  index: 0,
  answer: null,
  showResult: false,
  correctCount: 0,
};

function quizReducer(state, action) {
  switch (action.type) {
    case "select":
      return { ...state, answer: action.payload };
    case "next":
      const isCorrect = state.answer === questions[state.index].correct;

      const nextIndex = state.index + 1;
      const done = nextIndex === questions.length;

      return {
        ...state,
        index: done ? state.index : nextIndex,
        answer: null,
        showResult: done,
        correctCount: isCorrect ? state.correctCount + 1 : state.correctCount,
      };
    case "restart":
      return initialState;
    default:
      return state;
  }
}

function Quiz() {
  const [state, dispatch] = useReducer(quizReducer, initialState);
  const { index, answer, showResult, correctCount } = state;

  const currentQ = questions[index];

  if (showResult) {
    return (
      <div className="container mt-5 text-center">
        <h2 className="text-success">🎉 Quiz Completed!</h2>
        <p>
          You got <strong>{correctCount}</strong> out of{" "}
          <strong>{questions.length}</strong> correct.
        </p>
        <Button variant="primary" onClick={() => dispatch({ type: "restart" })}>
          Restart Quiz
        </Button>
      </div>
    );
  }

  return (
    <div className="container mt-5 quiz-container">
      <h4 className="quiz-header">
        Question {index + 1} of {questions.length}
      </h4>
      <h5 className="quiz-question">{currentQ.question}</h5>

      <div className="mt-4">
        {currentQ.options.map((option) => (
          <Button
            key={option}
            className={`d-block mb-2 w-100 text-start quiz-button ${
              option === answer ? "selected" : ""
            }`}
            onClick={() => dispatch({ type: "select", payload: option })}
          >
            {option}
          </Button>
        ))}
      </div>

      <Button
        className="mt-3"
        variant="success"
        onClick={() => dispatch({ type: "next" })}
        disabled={answer === null}
      >
        {index === questions.length - 1 ? "Finish" : "Next"}
      </Button>
    </div>
  );
}

export default Quiz;
