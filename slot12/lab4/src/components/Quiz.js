import React, { useState } from "react";
import { useQuiz } from "../context/QuizContext";
import QuestionCard from "./QuestionCard";
import "./Quiz.css";
import { quizData } from "../Quiz"; // chứa dữ liệu câu hỏi

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selected, setSelected] = useState("");
  const [showResult, setShowResult] = useState(false);
  const { score, setScore } = useQuiz();

  const handleNext = () => {
    if (selected === quizData[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    setSelected("");

    if (currentQuestion + 1 < quizData.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  if (showResult) {
    return (
      <div className="result">
        <h1>Quiz Completed!</h1>
        <p>Your score: {score}</p>
      </div>
    );
  }

  return (
    <div className="quiz-container">
      <h2>Question {currentQuestion + 1}</h2>
      <QuestionCard
        question={quizData[currentQuestion].question}
        answers={quizData[currentQuestion].answers}
        selected={selected}
        setSelected={setSelected}
      />
      <button className="next-btn" onClick={handleNext} disabled={!selected}>
        Next
      </button>
    </div>
  );
}

export default Quiz;
