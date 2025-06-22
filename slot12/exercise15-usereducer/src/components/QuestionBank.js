// 🧠 BÀI 6: Nâng cấp từ BÀI 5 – thêm feedback, countdown timer, highScore
import React, { useReducer, useEffect } from "react";
import { Button, Card, Container } from "react-bootstrap";

// ✅ reducer quản lý quiz
function quizReducer(state, action) {
  switch (action.type) {
    case "SELECT_OPTION":
      const isCorrect =
        action.payload === state.questions[state.currentQuestion].answer;

      return {
        ...state,
        selectedOption: action.payload,
        isCorrect,
        showFeedback: true,
      };

    case "NEXT_QUESTION":
      const updatedScore = state.isCorrect ? state.score + 1 : state.score;
      const isLast = state.currentQuestion + 1 === state.questions.length;
      const newHighScore = Math.max(updatedScore, state.highScore);

      // 🆕 Bài 6 – lưu highScore vào localStorage
      if (isLast) {
        localStorage.setItem("highScore", newHighScore);
      }

      return {
        ...state,
        score: updatedScore,
        currentQuestion: state.currentQuestion + 1,
        selectedOption: "",
        showFeedback: false,
        isCorrect: null,
        showScore: isLast,
        timer: 15,
        highScore: newHighScore,
      };

    case "RESTART_QUIZ":
      return { ...initialState, highScore: state.highScore };

    case "TICK": // 🆕 Bài 6 – giảm timer
      return { ...state, timer: state.timer - 1 };

    default:
      return state;
  }
}

// ✅ State khởi tạo
const initialState = {
  questions: [
    {
      id: 1,
      question: "What is the capital of Australia?",
      options: ["Sydney", "Canberra", "Melbourne", "Perth"],
      answer: "Canberra",
    },
    {
      id: 2,
      question: "Which planet is known as the Red Planet?",
      options: ["Venus", "Mars", "Jupiter", "Saturn"],
      answer: "Mars",
    },
    {
      id: 3,
      question: "What is the largest ocean on Earth?",
      options: [
        "Atlantic Ocean",
        "Indian Ocean",
        "Pacific Ocean",
        "Arctic Ocean",
      ],
      answer: "Pacific Ocean",
    },
  ],
  currentQuestion: 0,
  selectedOption: "",
  score: 0,
  showScore: false,
  showFeedback: false, // 🆕 Bài 6 – hiện phản hồi đúng/sai
  isCorrect: null, // 🆕 Bài 6 – trạng thái đúng/sai
  timer: 15, // 🆕 Bài 6 – đếm ngược thời gian
  highScore: parseInt(localStorage.getItem("highScore")) || 0, // 🆕 Bài 6
};

function QuestionBank() {
  const [state, dispatch] = useReducer(quizReducer, initialState);
  const {
    questions,
    currentQuestion,
    selectedOption,
    score,
    showScore,
    showFeedback,
    isCorrect,
    timer,
    highScore,
  } = state;

  // ⏲️ Bài 6 – đếm ngược thời gian
  useEffect(() => {
    if (showScore || showFeedback) return;

    const interval = setInterval(() => {
      dispatch({ type: "TICK" });
    }, 1000);

    if (timer === 0) {
      dispatch({ type: "NEXT_QUESTION" });
    }

    return () => clearInterval(interval);
  }, [timer, showScore, showFeedback]);

  return (
    <Container className="mt-4">
      <Card className="p-4 text-center">
        {showScore ? (
          <div>
            <h2>
              Your Score: {score} / {questions.length}
            </h2>
            <h4>🏆 High Score: {highScore}</h4>{" "}
            {/* 🆕 Bài 6 – hiển thị điểm cao */}
            <Button
              variant="primary"
              onClick={() => dispatch({ type: "RESTART_QUIZ" })}
            >
              Restart Quiz
            </Button>
          </div>
        ) : (
          <div>
            <h5>
              Question {currentQuestion + 1} / {questions.length}
            </h5>
            <h4 className="mt-2">{questions[currentQuestion].question}</h4>
            <p>⏱️ Time left: {timer}s</p> {/* 🆕 Bài 6 – hiển thị thời gian */}
            <div className="mt-3">
              {questions[currentQuestion].options.map((option, index) => (
                <Button
                  key={index}
                  variant={
                    showFeedback
                      ? option === questions[currentQuestion].answer
                        ? "success"
                        : option === selectedOption
                        ? "danger"
                        : "outline-secondary"
                      : selectedOption === option
                      ? "primary"
                      : "outline-secondary"
                  }
                  className="m-2"
                  disabled={showFeedback}
                  onClick={() =>
                    !selectedOption &&
                    dispatch({ type: "SELECT_OPTION", payload: option })
                  }
                >
                  {option}
                </Button>
              ))}
            </div>
            {showFeedback && (
              <div className="mt-3">
                <h5>{isCorrect ? "✅ Correct!" : "❌ Incorrect!"}</h5>
                <Button
                  variant="info"
                  className="mt-2"
                  onClick={() => dispatch({ type: "NEXT_QUESTION" })}
                >
                  {currentQuestion === questions.length - 1 ? "Finish" : "Next"}
                </Button>
              </div>
            )}
          </div>
        )}
      </Card>
    </Container>
  );
}

export default QuestionBank;
